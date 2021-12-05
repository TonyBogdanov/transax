{

	const SWITCH_NO = '__switch_no__fa6e7332-56e5-4093-98ac-c87d9500147a__';

    const collapse = tokens => tokens.reduce( ( tokens, token ) => {
    	if ( 'string' === typeof token && 0 < tokens.length && 'string' === typeof tokens[ tokens.length - 1 ] ) {
        	tokens[ tokens.length - 1 ] += token;
        } else {
        	tokens.push( token );
        }
    	return tokens;
    }, [] );

    class Literal {
    	//_ = 'Literal';
        constructor( value ) {
        	this.value = value;
        }
        compile( root = false ) {
            if ( null === this.value ) {
                return 'null';
            }
            if ( 'number' === typeof this.value ) {
                return `${ this.value }`;
            }
            const text = this.value.replace( /`/g, '\\`' );
            return root ? text : `\`${ text }\``;
        }
        evaluate() {
        	return this.value;
        }
    }

    class FilteredExpression {
    	//_ = 'FilteredExpression';
        constructor( exp, filters ) {
        	this.exp = exp;
            this.filters = filters;
        }
        compile() {
            return `\${${ this.filters.reduce( ( acc, filter ) => filter.compile( acc ), this.exp.compile() ) }}`;
        }
        evaluate( context, filters ) {
        	let value = this.exp.evaluate( context, filters );
            for ( const filter of this.filters ) {
            	value = filter.evaluate( value, context, filters );
            }
            return value;
        }
    }

    class Resolution {
    	//_ = 'Resolution';
        constructor( resolvers ) {
        	this.resolvers = resolvers;
        }
        compile( root = false ) {
            const result = `c${ this.resolvers.map( resolver => resolver.compile() ).join( '' ) }`;
            return root ? `\${${ result }}` : result;
        }
        evaluate( context, filters ) {
        	for ( const resolver of this.resolvers ) {
            	context = resolver.evaluate( context, filters );
            }
            return context;
        }
    }

    class Invocation {
    	//_ = 'Invocation';
        constructor( args ) {
        	this.args = args;
        }
        compile( root = false ) {
            const result = `(${ this.args.map( arg => arg.compile() ).join( ',' ) })`;
            return root ? `\${${ result }}` : result;
        }
        evaluate( context, filters ) {
            return context( ... this.args.map( exp => exp.evaluate( context, filters ) ) );
        }
    }

    class Accessor {
    	//_ = 'Accessor';
        constructor( key ) {
        	this.key = key;
        }
        compile( root = false ) {
            const result = 'number' === typeof this.key ? `[${ this.key }]` : `.${ this.key }`;
            return root ? `\${${ result }}` : result;
        }
        evaluate( context ) {
        	return context[ this.key ];
        }
    }

    class Filter {
    	//_ = 'Filter'
        constructor( name, inv ) {
        	this.name = name;
            this.inv = inv;
        }
        compile( content ) {
            const inv = this.inv ? this.inv.compile() : '()';
            return `f.${ this.name }(${ content }${ this.inv ? `,${ inv.substr( 1, inv.length - 2 ) }` : '' })`;
        }
        evaluate( value, context, filters ) {
            const args = ( this.inv ? this.inv.args : [] ).map( arg => arg.evaluate( context, filters ) );
            return filters[ this.name ]( value, ... args );
        }
    }

    class SwitchExpression {
    	//_ = 'SwitchExpression';
        constructor( exp, cases ) {
        	this.exp = exp;
            this.cases = cases;
        }
        compile( root = false ) {
            let fallback = false;
            for ( const case_ of this.cases ) {
                if ( '*' === case_.test ) {
                    fallback = true;
                    break;
                }
            }
            const result = `(v=>{${ this.cases.map( exp => exp.compile() ).join( '' ) }${ fallback ? '' :
                `throw 'SWITCH_NO_MATCH'` }})(${ this.exp.compile() })`;
            return root ? `\${${ result }}` : result;
        }
        evaluate( context, filters ) {
        	const value = this.exp.evaluate( context, filters );
            for ( const case_ of this.cases ) {
            	const result = case_.evaluate( value, filters );
                if ( SWITCH_NO === result ) {
                	continue;
                }
                return result;
            }
            throw 'SWITCH_NO_MATCH';
        }
    }

    class SwitchCase {
    	//_ = 'SwitchCase';
        constructor( test, exp ) {
        	this.test = test;
            this.exp = exp;
        }
        compile() {
            if ( '*' === this.test ) {
                return `return ${ this.exp.compile() };`;
            }
            return `if(v===${ this.test.compile() })return ${ this.exp.compile() };`;
        }
        evaluate( context, filters ) {
        	if ( '*' === this.test || this.test.evaluate( context, filters ) === context ) {
            	return this.exp.evaluate( context, filters );
            }
            return SWITCH_NO;
        }
    }

}

Start
	= v:( Token / _Symbol )+ { return collapse( v ) }
    / '' { return [ '' ] }

Token
	= '{{' _ v:( FilteredExpression / Expression ) _ '}}' { return v }

FilteredExpression
	= v:Expression s:( _ "|" _ Filter )+ { return new FilteredExpression( v, s.map( m => m[3] ) ) }

Expression
    = Switch
    / SafeExpression

SafeExpression
	= Literal
    / Resolution

Switch
	= 'switch' __ v:SafeExpression _ ':' _ s:( SwitchCase ( _ ( ',' / ';' ) _ SwitchCase )* )
	  { return new SwitchExpression( v, [ s[0], ... s[1].map( m => m[3] ) ] ) }

SwitchCase
	= v:( '*' / SafeExpression ) _ '=>' _ s:SafeExpression { return new SwitchCase( v, s ) }

Resolution
	= v:RootResolver _ s:Resolver* { return new Resolution( [ v, ... s] ) }

RootResolver
    = Invocation
    / ArrayAccessor
    / RootObjectAccessor

Resolver
    = Invocation
    / ArrayAccessor
    / ObjectAccessor

Invocation
	= "(" _ v:( Expression ( _ "," _ Expression )* )? _ ")"
	  { return new Invocation( v ? [ v[0], ... v[1].map( m => m[3] ) ] : [] ) }

ArrayAccessor
	= v:_Index { return new Accessor( v ) }

RootObjectAccessor
	= v:_Name { return new Accessor( v ) }

ObjectAccessor
	= "." _ v:_Name { return new Accessor( v ) }

Literal
	= v:( _Null / _String / _Float / _Integer ) { return new Literal( v ) }

Filter
	= v:_Name s:Invocation? { return new Filter( v, s ) }

_
	= [ \t\r\n]*

__
	= [ \t\r\n]+

_Symbol
	= v:. { return v }

_Null
	= 'null' { return null }
    / 'NULL' { return null }

_Integer
	= '0' { return 0 }
    / v:( '-'? [1-9] [0-9]* ) { return parseInt( [ v[0], v[1], ... v[2] ].join( '' ), 10 ) }

_Float
	= v:( '-'? [1-9] [0-9]* '.' [0-9]+ )
	  { return parseFloat( [ v[0], v[1], v[2].join( '' ), '.', v[4].join( '' ) ].join( '' ), 10 ) }
	/ v:( '-'? ( '0' / '' ) '.' [0-9]+ ) { return parseFloat( [ ... v.slice( 0, 3 ), ... v[3] ].join( '' ), 10 ) }

_String
	= "'" v:( "\\'" / [^'] )* "'" { return v.map( m => "\\'" === m ? m[1] : m ).join( '' ) }
    / '"' v:( '\\"' / [^"] )* '"' { return v.map( m => '\\"' === m ? m[1] : m ).join( '' ) }

_Name
	= v:( [a-zA-Z_] [a-zA-Z0-9_]* ) { return [ v[0], ... v[1] ].join( '' ) }

_Index
	= "[" _ v:( "0" / [1-9] [0-9]* ) _ "]"
	  { return parseInt( 'string' === typeof v ? v : [ v[0], ... v[1] ].join( '' ), 10 ) }
