<script lang="ts">
    import type { Snippet } from "svelte";

    interface ContainerProps {
        maxW?: `max-w-${string}`;
        centered?: boolean;
        id?: string;
        class?: string;
        children?: Snippet;
    }

    const { maxW = "max-w-container", centered = false, class: className, id, children }: ContainerProps = $props();
</script>

<div {id} class="w-full {maxW} {className} {centered && "mx-auto"} px-4 scroll-mt-20">
{@render children?.()}
</div>