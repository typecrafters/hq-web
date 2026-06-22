<script lang="ts">
    import Container from "./Container.svelte";
</script>


<Container id="hero-banner" class="py-28 text-center space-y-8" centered>
    <h1 class="text-5xl md:text-6xl lg:text-7xl font-bold">
        Crafting Digital
        <span class="bg-clip-text text-transparent bg-linear-to-r from-0% from-primary-500 to-100% to-accent-600">
            &#32;Adventures
        </span>
    </h1>
    <Container maxW="max-w-4xl" class="text-xl text-center space-y-8" centered>
        <p class="w-full">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Voluptatibus quas totam temporibus, dignissimos distinctio inventore
            repudiandae in dolorem tempora. Ipsa adipisci ea cumque impedit
            dolores doloremque sequi, laudantium reprehenderit autem.
        </p>
        <div id="call-to-action" class="w-full flex flex-col md:flex-row justify-center items-center gap-6">
            <button class="w-full md:w-auto rounded px-6 py-2 cursor-pointer border-2 bg-accent-800 border-transparent hover:bg-transparent hover:border-accent-800 hover:text-accent-800 duration-200">
                <div class="flex justify-center items-center gap-3">
                    <p>Explore our projects</p>
                </div>
            </button>
            <button class="w-full md:w-auto rounded px-6 py-2 cursor-pointer border-2 bg-primary-800 border-transparent hover:bg-transparent hover:border-primary-800 hover:text-primary-800 duration-200">
                <div class="flex justify-center items-center gap-3">
                    <i class="bi bi-discord"></i>
                    <span>Join our community</span>
                </div>
            </button>
        </div>
    </Container>
</Container>