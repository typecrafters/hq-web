import type { Config } from "@sveltejs/kit";
import adapter from "svelte-adapter-bun";

const config: Config = {
    kit: {
        adapter: adapter(),
        alias: {
            "$styles": "src/styles",
            "$common": "src/common",
            "$interface": "src/common/interface",
            "$enum": "src/common/enum"
        }
    },
    compilerOptions: {
        runes: true
    }
};

export default config;