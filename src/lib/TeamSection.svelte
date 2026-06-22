<script>
    import TeamCard from "./TeamCard.svelte";

</script>
<section id="team" class="w-full text-black bg-paper-100 px-8 py-24">
    <div class="w-full max-w-7xl mx-auto space-y-12">
        <div class="w-full max-w-3xl mr-auto space-y-4">
            <p class="font-mono text-signal-600 uppercase">01 / The team</p>
            <h2 class="text-5xl font-mono font-semibold max-w-3xl">
                A group of people who really like making things.
            </h2>
            <p class="text-ink-600">
                No production-line cogs, no faceless studio. Just a tight crew
                that designs, builds, and ships every pixel and every line of
                code together.
            </p>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            <TeamCard />
        </div>
    </div>
</section>
