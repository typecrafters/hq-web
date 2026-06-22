import type { Config } from "@sveltejs/kit";
import adapter from "svelte-adapter-bun";

const config: Config = {
    kit: {
        adapter: adapter(),
        alias: {
            "$styles": "src/styles",
            "$components": "src/components"
        }
    },
    compilerOptions: {
        runes: true
    }
};

export default config;