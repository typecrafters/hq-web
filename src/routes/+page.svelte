<script lang="ts">
    import "$styles/index.css";
    import "bootstrap-icons/font/bootstrap-icons.min.css";
    import WebsiteHeader from "../lib/WebsiteHeader.svelte";
    import HeroBanner from "$lib/HeroBanner.svelte";
    import ProjectSection from "$lib/ProjectSection.svelte";
    import TeamSection from "$lib/TeamSection.svelte";
    import BlogSection from "$lib/BlogSection.svelte";
    import ContactSection from "$lib/ContactSection.svelte";
    import WebsiteFooter from "$lib/WebsiteFooter.svelte";
</script>

<WebsiteHeader />
<HeroBanner />
<ProjectSection />
<TeamSection />
<BlogSection />
<ContactSection />
<WebsiteFooter />