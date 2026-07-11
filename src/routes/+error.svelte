<script lang="ts">
    import "$styles/index.css";
    import "bootstrap-icons/font/bootstrap-icons.min.css";
    import { page } from "$app/state";
    import WebsiteHeader from "../lib/WebsiteHeader.svelte";
    import WebsiteFooter from "$lib/WebsiteFooter.svelte";
</script>

<WebsiteHeader />
<section class="w-full px-8 py-32">
    <div class="w-full max-w-7xl mx-auto flex flex-col items-start gap-4">
        <p class="font-mono text-signal-600 uppercase">
            {page.status}
        </p>
        <h1 class="text-5xl font-mono font-semibold max-w-3xl">
            Something went wrong.
        </h1>
        <p class="text-ink-300">
            {page.error?.message ?? "An unexpected error occurred. Please try again."}
        </p>
        <a
            href="/"
            class="flex items-center gap-2 rounded-full px-4 py-3 border border-signal-500 bg-signal-500 hover:border-signal-600 hover:bg-signal-600 duration-150 text-ink-800 font-bold"
        >
            Back home
            <i class="bi bi-arrow-right"></i>
        </a>
    </div>
</section>
<WebsiteFooter />
