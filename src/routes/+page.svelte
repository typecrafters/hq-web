<script lang="ts">
    import Header from "$lib/Header.svelte";
    import Footer from "$lib/Footer.svelte";
    import HeroBanner from "$lib/HeroBanner.svelte";
    import Container from "$lib/Container.svelte";
    import TeamCard from "$lib/TeamCard.svelte";
    import ProjectCard from "$lib/ProjectCard.svelte";
    import { ProjectStatus } from "$enum/ProjectStatus";
    import CopyButton from "$lib/CopyButton.svelte";
    import Alert from "$lib/Alert.svelte";
    import { enhance } from "$app/forms";
    import Spinner from "$lib/Spinner.svelte";
    import type { SubmitFunction } from "@sveltejs/kit";

    const { form } = $props();
    let alert = $derived(form);
    let submitting = $state(false);
    let show = $derived(alert != null && Object.keys(alert).length > 0);

    const wait: SubmitFunction = () => {
        submitting = true;
        return async ({ update }) => {
            await update();
            submitting = false;
        };
    };
</script>

<Header />
<main class="space-y-32">
    <HeroBanner />
    <Container id="about-us" class="text-center space-y-16" centered>
        <div class="space-y-8">
            <h2 class="text-4xl font-bold">About us</h2>
            <Container maxW="max-w-4xl" class="text-xl text-center" centered>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Amet vel quod dolorum ducimus ipsum quasi ipsam et impedit,
                    neque distinctio minima at vitae labore, cumque odio magni
                    nulla, nemo culpa. Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Laboriosam repellendus unde et id
                    perferendis incidunt voluptatum asperiores?.
                </p>
            </Container>
        </div>
        <Container
            maxW="max-w-full"
            class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8"
            centered
        >
            <TeamCard
                pictureUrl="/img/link-profile-picture.png"
                name="John Doe"
                role="Creative Director & Founder"
                details="Former AAA game designer with 8+ years experience. Passionate about narrative-driven gameplay."
            />
        </Container>
    </Container>
    <Container id="current-projects" class="text-center space-y-16" centered>
        <div class="space-y-8">
            <h2 class="text-4xl font-bold">Current Projects</h2>
            <Container maxW="max-w-4xl" class="text-xl text-center" centered>
                <p>
                    Discover the apps and games we're currently developing and
                    get a glimpse into our creative process.
                </p>
            </Container>
        </div>
        <Container
            maxW="max-w-full"
            class="grid grid-cols-1 lg:grid-cols-2 gap-8"
            centered
        >
            <ProjectCard
                name="Fatebound"
                status={ProjectStatus.Planning}
                description="3D semi-open world action/adventure videogame."
                content="..."
                imageUrl="/img/placeholder.svg"
                tags={["3D", "Action", "Adventure"]}
                href="/"
            />
        </Container>
    </Container>
    <Container id="blog" class="text-center space-y-4" centered>
        <div class="space-y-8">
            <h2 class="text-4xl font-bold">Latest from Our Blog</h2>
            <Container maxW="max-w-4xl" class="text-xl text-center" centered>
                <p>
                    Stay updated with our development journey, industry
                    insights, and behind-the-scenes content.
                </p>
            </Container>
        </div>
        <!-- ///// -->
        <a
            href="/"
            class="flex gap-2 duration-200 bg-primary-600 border-2 border-transparent hover:bg-transparent hover:text-primary-800 hover:border-primary-800 rounded-lg px-6 py-2 w-fit mx-auto"
        >
            <span class="text-lg font-medium">View All Posts</span>
            <i class="bi bi-box-arrow-up-right text-xs"></i>
        </a>
    </Container>
    <Container id="contact-us" class="text-center space-y-16" centered>
        <div class="space-y-8">
            <h2 class="text-4xl font-bold">Get In Touch</h2>
            <Container maxW="max-w-4xl" class="text-xl text-center" centered>
                <p>
                    Have a question, want to collaborate, or just want to say
                    hello? We'd love to hear from you.
                </p>
            </Container>
        </div>
        <Container
            maxW="max-w-full"
            class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch"
            centered
        >
            <div
                class="w-full h-full p-6 flex flex-col gap-6 bg-secondary-600/20 backdrop-blur-md rounded-lg border-2 border-secondary-700"
            >
                <Alert
                    type={alert?.type!}
                    message={alert?.message!}
                    bind:show
                />
                {#if submitting}
                    <Spinner />
                {/if}
                <div class="text-left space-y-2">
                    <h3 class="text-2xl font-semibold">Send us a message</h3>
                    <p class="opacity-70">
                        Fill out the form below and we'll get back to you as
                        soon as possible.
                    </p>
                </div>
                <form
                    method="POST"
                    class="relative flex-1 flex flex-col gap-8 duration-150 {submitting && "brightness-60"}"
                    use:enhance={wait}
                >
                    <fieldset class="contents" disabled={submitting}>
                        <div class="flex flex-col sm:flex-row gap-6">
                            <div class="flex-1 space-y-2">
                                <label
                                    for="firstName"
                                    class="block text-left font-semibold"
                                >
                                    First Name
                                </label>
                                <input
                                    type="text"
                                    name="firstName"
                                    id="firstName"
                                    placeholder="John"
                                    class="w-full border border-secondary-400 bg-secondary-600/40 backdrop-blur-md rounded px-2 py-1 outline-2 outline-transparent focus:outline-secondary-400 duration-150"
                                />
                            </div>
                            <div class="flex-1 space-y-2">
                                <label
                                    class="block text-left font-semibold"
                                    for="lastName"
                                >
                                    Last Name
                                </label>
                                <input
                                    type="text"
                                    name="lastName"
                                    id="lastName"
                                    placeholder="Doe"
                                    class="w-full border border-secondary-400 bg-secondary-600/40 backdrop-blur-md rounded px-2 py-1 outline-2 outline-transparent focus:outline-secondary-400 duration-150"
                                />
                            </div>
                        </div>
                        <div class="space-y-2">
                            <label
                                class="block text-left font-semibold"
                                for="email">Email</label
                            >
                            <input
                                type="email"
                                name="email"
                                id="email"
                                placeholder="john@example.com"
                                class="w-full border border-secondary-400 bg-secondary-600/40 backdrop-blur-md rounded px-2 py-1 outline-2 outline-transparent focus:outline-secondary-400 duration-150"
                            />
                        </div>
                        <div class="space-y-2">
                            <label
                                class="block text-left font-semibold"
                                for="subject">Subject</label
                            >
                            <input
                                type="text"
                                name="subject"
                                id="subject"
                                placeholder="What's this about?"
                                class="w-full border border-secondary-400 bg-secondary-600/40 backdrop-blur-md rounded px-2 py-1 outline-2 outline-transparent focus:outline-secondary-400 duration-150"
                            />
                        </div>
                        <div class="flex-1 flex flex-col gap-2">
                            <label
                                class="block text-left font-semibold"
                                for="message">Message</label
                            >
                            <textarea
                                name="message"
                                id="message"
                                placeholder="Tell us more..."
                                class="flex-1 w-full resize-y border border-secondary-400 bg-secondary-600/40 backdrop-blur-md rounded px-2 py-1 outline-2 outline-transparent focus:outline-secondary-400 duration-150"
                                rows={5}
                            ></textarea>
                        </div>
                        <div>
                            <input
                                type="submit"
                                value={submitting ? "Wait a moment..." : "Send message"}
                                class="w-full font-semibold bg-primary-600 disabled:bg-primary-600/50 hover:bg-primary-800 py-1.5 cursor-pointer rounded-lg duration-150"
                            />
                        </div>
                    </fieldset>
                </form>
            </div>
            <div class="w-full flex flex-col gap-8">
                <CopyButton
                    id="copy-email"
                    value="typecrafters0@gmail.com"
                    class="w-full rounded-lg bg-secondary-600/20 backdrop-blur-md border-2 border-secondary-700 p-6"
                >
                    <div class="space-y-2">
                        <div class="flex gap-3 text-2xl font-semibold">
                            <i class="bi bi-envelope text-primary-400"></i>
                            <h3>Email</h3>
                        </div>
                        <div class="opacity-70 text-left text-lg">
                            <p>typecrafters0@gmail.com</p>
                        </div>
                    </div>
                </CopyButton>
                <CopyButton
                    id="copy-address"
                    value="https://maps.app.goo.gl/CKzaH9HaE8QzDfjJA"
                    class="flex-1 w-full rounded-lg bg-secondary-600/20 backdrop-blur-md border-2 border-secondary-700 p-6"
                >
                    <div class="space-y-2">
                        <div class="flex gap-3 text-2xl font-semibold">
                            <i class="bi bi-geo-alt text-primary-400"></i>
                            <h3>Office</h3>
                        </div>
                        <div class="opacity-70 text-left text-lg">
                            <p>1054 Circunvalación St.</p>
                            <p>Ciudad de Panamá, PA</p>
                            <p>Panamá</p>
                        </div>
                    </div>
                </CopyButton>
                <CopyButton
                    id="copy-phone-no"
                    value="(+507) 123-4567"
                    class="w-full rounded-lg bg-secondary-600/20 backdrop-blur-md border-2 border-secondary-700 p-6"
                >
                    <div class="space-y-2">
                        <div class="flex gap-3 text-2xl font-semibold">
                            <i class="bi bi-telephone text-primary-400"></i>
                            <h3>Phone</h3>
                        </div>
                        <div class="opacity-70 text-left text-lg">
                            <p>(+507) 123-4567</p>
                        </div>
                    </div>
                </CopyButton>
                <div
                    class="w-full rounded-lg space-y-6 bg-secondary-600/20 backdrop-blur-md border-2 border-secondary-700 p-6"
                >
                    <div class="flex">
                        <h3 class="text-2xl font-semibold">Follow Us</h3>
                    </div>
                    <div class="flex items-center gap-6 text-2xl">
                        <a
                            href="/"
                            aria-label="YouTube"
                            class="text-secondary-400 hover:text-primary-400 duration-150"
                        >
                            <i class="bi bi-youtube"></i>
                        </a>
                        <a
                            href="/"
                            aria-label="X"
                            class="text-secondary-400 hover:text-primary-400 duration-150"
                        >
                            <i class="bi bi-twitter-x"></i>
                        </a>
                        <a
                            href="/"
                            aria-label="Instagram"
                            class="text-secondary-400 hover:text-primary-400 duration-150"
                        >
                            <i class="bi bi-instagram"></i>
                        </a>
                    </div>
                </div>
            </div>
        </Container>
    </Container>
    <Footer />
</main>
