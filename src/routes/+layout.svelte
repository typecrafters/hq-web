<script lang="ts">
    import type { Snippet } from "svelte";
    import "$styles/index.css";
    import "bootstrap-icons/font/bootstrap-icons.min.css";
    import AppAlert from "$lib/AppAlert.svelte";
    import WebsiteHeader from "$lib/WebsiteHeader.svelte";
    import WebsiteFooter from "$lib/WebsiteFooter.svelte";

    interface IndexLayoutProps {
        children?: Snippet;
    }
    let { children }: IndexLayoutProps = $props();
</script>


<AppAlert />
<WebsiteHeader />
{@render children?.()}
<WebsiteFooter />