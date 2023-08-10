import CompilerToken from './CompilerToken';
import CompilerContext from './CompilerContext';
import { LocationRange } from 'peggy';

/**
 * Represents a call expression accessing an object property.
 */
export class CallExpressionObjectAccess {

    readonly name: string;

    /**
     * Creates a new instance.
     *
     * @param name The name of the property to access.
     */
    constructor( name: string ) {
        this.name = name;
    }

}

/**
 * Represents a call expression accessing an array element.
 */
export class CallExpressionArrayAccess {

    readonly expr: CompilerToken;

    /**
     * Creates a new instance.
     *
     * @param expr The expression to be used as array index.
     */
    constructor( expr: CompilerToken ) {
        this.expr = expr;
    }

}

/**
 * Represents a call expression invocation.
 */
export class CallExpressionInvocation {

    /**
     * An array of expressions to be used as arguments.
     */
    readonly exprs: CompilerToken[];

    /**
     * Creates a new instance.
     *
     * @param exprs An array of expressions to be used as arguments.
     */
    constructor( exprs: CompilerToken[] ) {
        this.exprs = exprs;
    }

}

/**
 * Represents a call expression.
 * It must be represented by an identifier (local or global) optionally followed by one or more of the following:
 *
 * - Object access: `.` followed by an identifier.
 * - Array access: `[` followed by an expression followed by `]`.
 * - Invocation: `(` followed by an optional comma-separated list of expressions followed by `)`.
 *
 * Examples:
 * `local`
 * `@global`
 * `local.property`
 * `@global.property`
 * `local[0]`
 * `@global[0]`
 * `local[0].property`
 * `@global[0].property`
 * `local[0].property()`
 * `@global[0].property()`
 * `local[0].property(1, 2, 3)`
 * `@global[0].property(1, 2, 3)`
 */
export default class CallExpressionToken extends CompilerToken {

    readonly global: boolean;
    readonly name: string;
    readonly tail: ( CallExpressionObjectAccess | CallExpressionArrayAccess | CallExpressionInvocation )[];

    /**
     * Creates a new instance.
     *
     * @param global Specifies whether the identifier is a global variable or a parameter.
     * @param name The name of the identifier.
     * @param tail An array of object accesses, array accesses or invocations.
     * @param text The full text (content) of the expression.
     * @param location The location of the invocation within the source code.
     */
    constructor(
        global: boolean,
        name: string,
        tail: ( CallExpressionObjectAccess | CallExpressionArrayAccess | CallExpressionInvocation )[],
        text: string,
        location: LocationRange,
    ) {
        super( text, location );

        this.global = global;
        this.name = name;
        this.tail = tail;
    }

    /**
     * @inheritDoc
     */
    compile( context: CompilerContext ): string {
        if ( this.global ) {
            context.requireGlobal( this.name );
        } else {
            context.requireParameter( this.name );
        }

        return this.name + this.tail.map( part => {
            if ( part instanceof CallExpressionObjectAccess ) {
                return '.' + part.name;
            }

            if ( part instanceof CallExpressionArrayAccess ) {
                return '[' + part.expr.compile( context ) + ']';
            }

            if ( part instanceof CallExpressionInvocation ) {
                return '(' + part.exprs.map( expr => expr.compile( context ) ).join( ',' ) + ')';
            }
        } ).join( '' );
    }

}
