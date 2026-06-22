<script lang="ts">
    import type { Snippet } from "svelte";

    interface IndexLayoutProps {
        children?: Snippet;
    }
    let { children }: IndexLayoutProps = $props();
</script>

{@render children?.()}