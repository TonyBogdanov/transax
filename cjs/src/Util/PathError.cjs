"use strict";Object.defineProperty(exports,"__esModule",{value:!0});class PathError extends TypeError{static wrap(r,e){try{return e()}catch(t){var a;throw t instanceof PathError&&({path:e,template:a}=t,t=new PathError(a,r+(0===e.length?"":".")+e)),t}}constructor(t,r=""){super(t.replace(/{{\s*path\s*}}/gi,r)),this.template=t,this.path=r}toString(){return JSON.stringify(this)}}exports.default=PathError;