export default class IdentifierToken{constructor(e,t){this._="identifier",this.name=e,this.global=t}collapse(e){return!1}compile(e){return this.global?e.requireGlobal(this.name):e.requireParameter(this.name),this.name}}