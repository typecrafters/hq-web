<script lang="ts">
    import { AlertType } from "$common/enum/AlertType";
    import type { AlertData } from "$common/interface/AlertData";

    const AlertColors: Map<AlertType, string> = new Map([
        [AlertType.Success, "bg-emerald-500"],
        [AlertType.Info, "bg-sky-500"],
        [AlertType.Warning, "bg-yellow-500"],
        [AlertType.Error, "bg-red-500/50"]
    ]);

    let { type, message, show = $bindable<boolean>() }: AlertData & { show: boolean } = $props(); 
</script>

{#if show}
    <div
        role="alert"
        class="w-max max-w-100 absolute top-4 right-4 z-40 opacity-100 flex gap-4 items-center text-white {AlertColors.get(type)!} px-2 py-1 rounded"
    >
        <span>{message}</span>
        <button type="button" aria-label="close alert" onclick={() => show = false} class="cursor-pointer">
            <i class="bi bi-x-lg"></i>
        </button>
    </div>
{/if}