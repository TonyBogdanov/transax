import { PluginOptionsType } from '../Type/PluginOptionsType';
import Plugin from './Plugin';

export default function VitePlugin( options: PluginOptionsType ) {
    const plugin = new Plugin( options );

    const dictionaryWatcher = plugin.createDictionaryWatcher();
    const inputWatcher = plugin.createInputWatcher();

    return {
        name: 'vite-plugin-transax',

        buildStart() {
            dictionaryWatcher.on( 'add', plugin.loadDictionary.bind( plugin ) );
            dictionaryWatcher.on( 'change', plugin.loadDictionary.bind( plugin ) );
            dictionaryWatcher.on( 'unlink', plugin.removeDictionary.bind( plugin ) );

            inputWatcher.on( 'add', plugin.loadInput.bind( plugin ) );
            inputWatcher.on( 'change', plugin.loadInput.bind( plugin ) );
            inputWatcher.on( 'unlink', plugin.removeInput.bind( plugin ) );

            plugin.loadDictionaries();
            plugin.loadInputs();
        },

        closeBundle() {
            return Promise.all( [
                inputWatcher.close(),
                dictionaryWatcher.close(),
            ] );
        },
    };
}
