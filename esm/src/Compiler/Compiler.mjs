import Logger from"../Logger/Logger.mjs";import TextToken from"./TextToken.mjs";import CompilerContext from"./CompilerContext.mjs";import parse from"./peg.mjs";import TernaryExpressionToken from"./TernaryExpressionToken.mjs";import ComparisonExpressionToken from"./ComparisonExpressionToken.mjs";class Options{constructor(e={}){this.logger=null!=(e=e.logger)?e:new Logger({namespace:"TRANSAX:COMPILER"})}}export default class Compiler{constructor(e={}){this.options=new Options(e)}tokenize(e){var o=[];for(const n of parse(e))0<o.length&&n instanceof TextToken&&o[o.length-1]instanceof TextToken?o[o.length-1].text+=n.text:o.push(n);return o}compile(e){var o=new CompilerContext,n=['""'];for(const i of this.tokenize(e)){var r=i instanceof TernaryExpressionToken||i instanceof ComparisonExpressionToken,t=i.compile(o);n.push(r?`(${t})`:t)}for(let e=0;e<n.length;e++)["null","true","false"].includes(n[e])&&(n[e]='""');for(let e=1;e<n.length;e++)n[e-1].startsWith('"')&&n[e-1].endsWith('"')&&n[e].startsWith('"')&&(n[e-1]=n[e-1].slice(0,-1)+n[e].slice(1),n.splice(e,1),e--);let s="";return 0<o.parameters.length&&(s+=`{${o.parameters.join(",")}}`),0<o.globals.length&&(0===o.parameters.length&&(s+="_"),s+=`,{${o.globals.join(",")}}`),""===s?n.join("+"):`(${s})=>`+n.join("+")}}