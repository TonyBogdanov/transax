"use strict";Object.defineProperty(exports,"__esModule",{value:!0});class Util{static relative(t,e){for(var s=t.split("/"),i=e.split("/");0<s.length&&0<i.length&&s[0]===i[0];)s.shift(),i.shift();return s.map(()=>"..").concat(i).join("/")}}exports.default=Util;