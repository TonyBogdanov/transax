export default class LiteralToken{constructor(l){this._="literal",this.value=l}collapse(l){return!1}compile(l){return null===this.value?"null":JSON.stringify(this.value)}}