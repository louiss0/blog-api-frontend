import camelCase from 'lodash/camelCase';
import { ModuleTree } from 'vuex';
const requireModule = require.context('.', false, /\.ts$/); //extract js files inside modules folder
const modules:Record<string, unknown> & ModuleTree<Record<string, unknown>> = {};


requireModule.keys().forEach((fileName) => {
    if (fileName === './index.ts') return; //reject the index.ts file
    const moduleName = camelCase(fileName.replace(/(\.\/|\.ts)/g, '')); //
    modules[moduleName] = {
        namespaced: true,
        ...requireModule(fileName).default
    };
});
export default modules;
