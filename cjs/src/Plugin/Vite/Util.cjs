"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const node_path_1=require("node:path");class Util{static localeFromPath(e){return(e=(0,node_path_1.basename)(e)).substring(0,e.length-(0,node_path_1.extname)(e).length)}}exports.default=Util;