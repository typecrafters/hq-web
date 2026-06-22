<script>
    import ProjectCard from "./ProjectCard.svelte";

</script>
<section id="projects" class="w-full text-black bg-paper-200 px-8 py-24">
    <div class="w-full max-w-7xl mx-auto space-y-12">
        <div class="w-full max-w-3xl mr-auto space-y-4">
            <p class="font-mono text-signal-600 uppercase">01 / The work</p>
            <h2 class="text-5xl font-mono font-semibold max-w-3xl">
                Games we shipped, and tools we couldn't live without.
            </h2>
            <p class="text-ink-600">
                Four projects from the last few years — 
                some you can play, others you can build with.
            </p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            <ProjectCard />
        </div>
    </div>
</section>
