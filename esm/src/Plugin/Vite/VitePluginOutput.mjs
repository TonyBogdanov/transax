import VitePluginOutputCompilation from"./VitePluginOutputCompilation.mjs";import VitePluginOutputAnalysis from"./VitePluginOutputAnalysis.mjs";import PathError from"../../Util/PathError.mjs";import{VitePluginOutputAnalysisFlavorMissing,VitePluginOutputAnalysisFlavorUnused}from"../../Type/VitePluginOutputAnalysisType.mjs";export default class VitePluginOutput{constructor(t){if(!t||"object"!=typeof t)throw new PathError("Expected {{ path }} to be an object.");this.compiled=PathError.wrap("compiled",()=>"string"==typeof t.compiled?new VitePluginOutputCompilation({path:t.compiled}):new VitePluginOutputCompilation(t.compiled)),this.missing=PathError.wrap("missing",()=>{if(void 0!==t.missing){if("string"==typeof t.missing)return new VitePluginOutputAnalysis({flavor:VitePluginOutputAnalysisFlavorMissing,path:t.missing});if(t.missing instanceof VitePluginOutputAnalysis)return t.missing;if(null!==t.missing&&"object"==typeof t.missing)return new VitePluginOutputAnalysis(t.missing)}throw new PathError("Expected {{ path }} to be a string or an object.")}),this.unused=PathError.wrap("unused",()=>{if(void 0!==t.unused){if("string"==typeof t.unused)return new VitePluginOutputAnalysis({flavor:VitePluginOutputAnalysisFlavorUnused,path:t.unused});if(t.unused instanceof VitePluginOutputAnalysis)return t.unused;if(null!==t.unused&&"object"==typeof t.unused)return new VitePluginOutputAnalysis(t.unused)}throw new PathError("Expected {{ path }} to be a string or an object.")})}}