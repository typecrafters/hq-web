<script lang="ts">
    import type { Snippet } from "svelte";
    import AppAlert from "$lib/AppAlert.svelte";

    interface IndexLayoutProps {
        children?: Snippet;
    }
    let { children }: IndexLayoutProps = $props();
</script>

<AppAlert />
{@render children?.()}