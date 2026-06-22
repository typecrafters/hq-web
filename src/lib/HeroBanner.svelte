<script>
    import BannerCode from "./BannerCode.svelte";
</script>
<section class="flex items-center w-full max-w-360 mx-auto py-24 px-8 gap-24">
    <div class="flex-1 space-y-6">
        <p class="font-mono text-signal-600">// independent game studio & software factory</p>
        <h1 class="text-8xl font-semibold">
            We craft worlds— and the tools that build them.
        </h1>
        <p class="text-lg text-ink-300">
            TypeCrafters is a small studio of designers, 
            engineers, and storytellers shipping original 
            games—and the software that ships them.
        </p>
        <div class="flex gap-4">
            <a
                href="/" 
                class="flex items-center rounded-full px-4 py-4 border border-signal-500 bg-signal-500 text-ink-800 font-bold"
            >
                See our work
                &nbsp;
                <i class="bi bi-arrow-right"></i>
            </a>
            <a 
                href="/" 
                class="flex items-center rounded-full px-4 py-4 border border-ink-400"
            >
                Meet the team
            </a>
        </div>
    </div>
    <div class="flex-1 flex justify-end">
        <div class="w-full max-w-135">
            <BannerCode />
        </div>
    </div>
</section>