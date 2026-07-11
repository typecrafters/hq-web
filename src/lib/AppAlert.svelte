<script lang="ts">
    import { alertStore, type AlertType } from "./alert.svelte";

    const icon: Record<AlertType, string> = {
        info: "bi-info-circle",
        success: "bi-check-circle",
        warning: "bi-exclamation-triangle",
        error: "bi-x-circle"
    };

    const style: Record<AlertType, string> = {
        info: "bg-info-100 border-info-500 text-info-900",
        success: "bg-success-100 border-success-500 text-success-900",
        warning: "bg-warning-100 border-warning-500 text-warning-900",
        error: "bg-error-100 border-error-500 text-error-900"
    };
</script>

{#if alertStore.current?.visible}
    {@const alert = alertStore.current}
    <div
        class="fixed top-6 right-6 z-50 flex items-center gap-3 rounded border px-4 py-3 shadow-lg font-sans text-sm {style[alert.type]}"
        role="alert"
    >
        <i class="bi {icon[alert.type]} text-lg"></i>
        <span>{alert.message}</span>
        <button
            type="button"
            onclick={() => alert.hide()}
            aria-label="Dismiss"
            class="ml-2 text-lg leading-none opacity-70 hover:opacity-100"
        >
            <i class="bi bi-x"></i>
        </button>
    </div>
{/if}
