<script lang="ts">
    import type { Snippet } from "svelte";

    interface CopyButtonProps {
        id?: string;
        value: string;
        class?: string;
        children?: Snippet;
    }

    let feedback: boolean = $state(false);

    const copy = () => {
        navigator.clipboard.writeText(value);
        feedback = true;
        return setTimeout(() => feedback = false, 5000);
    };

    const { id, value, class: className, children }: CopyButtonProps = $props();
</script>

<button {id} title="Copy '{value}'" onclick={copy} class="relative cursor-pointer {className}">
    {#if feedback}
        <span
            role="presentation"
            class="flex items-center gap-1 bg-success-600 rounded absolute top-4 right-4 px-3 py-0.5 text-sm font-semibold"
        >
            <i class="i bi-check-lg"></i>
            <span>Copied!&nbsp;</span>
        </span>
    {/if}
    {@render children?.()}
</button>