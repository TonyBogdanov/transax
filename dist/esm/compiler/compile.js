import Context from"./context";export default function compile(t){var e=new Context,l=['""'];for(const r of t){var o=r.compile(e);""!==o&&l.push(o)}for(let t=0;t<l.length;t++)"null"===l[t]&&(l[t]='""');for(let t=1;t<l.length;t++)l[t-1].startsWith('"')&&l[t-1].endsWith('"')&&l[t].startsWith('"')&&(l[t-1]=l[t-1].slice(0,-1)+l[t].slice(1),l.splice(t,1),t--);let n="";return 0<e.parameters.length&&(n+=`{${e.parameters.join(",")}}`),0<e.globals.length&&(0===e.parameters.length&&(n+="_"),n+=`,{${e.globals.join(",")}}`),`(${n})=>`+l.join("+")}