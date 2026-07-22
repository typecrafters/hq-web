<script lang="ts">
    import "$styles/index.css";
    import "bootstrap-icons/font/bootstrap-icons.min.css";
    import SEO from "$lib/SEO.svelte";
    import WebsiteHeader from "../lib/WebsiteHeader.svelte";
    import HeroBanner from "$lib/HeroBanner.svelte";
    import ProjectSection from "$lib/ProjectSection.svelte";
    import TeamSection from "$lib/TeamSection.svelte";
    import BlogSection from "$lib/BlogSection.svelte";
    import ContactSection from "$lib/ContactSection.svelte";
    import WebsiteFooter from "$lib/WebsiteFooter.svelte";
</script>

<SEO
    title="TypeCrafters — Independent Game Studio & Software Factory"
    description="TypeCrafters is a small studio of designers, engineers, and storytellers shipping original games—and the software that ships them."
/>
<WebsiteHeader />
<HeroBanner />
<ProjectSection />
<TeamSection />
<BlogSection />
<ContactSection />
<WebsiteFooter />