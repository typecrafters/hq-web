<script lang="ts">
    import { enhance } from "$app/forms";
    import { Alert } from "$lib/alert.svelte";

    let formEl: HTMLFormElement;
</script>
<section id="contact" class="w-full bg-ink-800 px-8 py-24">
    <div class="w-full max-w-7xl mx-auto">
        <div class="w-full flex gap-32">
            <div class="flex-1 flex flex-col items-start gap-4">
                <p class="font-mono text-signal-600 uppercase">
                    04 / Say hello
                </p>
                <h2 class="text-5xl font-mono font-semibold max-w-3xl">
                    Let's build something.
                </h2>
                <p class="text-ink-300">
                    Publisher, player, or someone who just shipped something
                    cool — we'd love to hear from you. We read everything.
                </p>
            </div>
            <div class="flex-1 flex-col gap-4 flex items-start">
                <form
                    method="post"
                    action="?/sendMessage"
                    class="contents"
                    bind:this={formEl}
                    use:enhance={() => {
                        return async ({ result, update }) => {
                            if (result.type === "success") {
                                Alert.success("Message sent — we'll be in touch soon.");
                                formEl.reset();
                            } else if (result.type === "failure") {
                                Alert.error(
                                    (result.data?.error as string) ??
                                        "Something went wrong. Please try again."
                                );
                            } else if (result.type === "error") {
                                Alert.error("Something went wrong. Please try again.");
                            }
                            await update({ reset: false });
                        };
                    }}
                >
                    <div class="w-full space-y-2">
                        <label
                            for="fullName"
                            class="block uppercase text-sm font-mono"
                        >
                            Your name
                        </label>
                        <input
                            type="text"
                            name="fullName"
                            id="fullName"
                            placeholder="John Doe"
                            class="w-full max-w-lg p-2 rounded-lg border border-ink-400 bg-ink-700 focus:outline-none"
                        />
                    </div>
                    <div class="w-full space-y-2">
                        <label
                            for="email"
                            class="block uppercase text-sm font-mono"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="name@example.com"
                            class="w-full max-w-lg p-2 rounded-lg border border-ink-400 bg-ink-700 focus:outline-none"
                        />
                    </div>
                    <div class="w-full space-y-2">
                        <label
                            for="message"
                            class="block uppercase text-sm font-mono"
                        >
                            Message
                        </label>
                        <textarea 
                            name="message" 
                            id="message"
                            rows={4}
                            placeholder="Tell us what you're dreaming up..."
                            class="w-full max-w-lg p-2 rounded-lg border border-ink-400 bg-ink-700 focus:outline-none resize-y"
                        ></textarea>
                    </div>
                    <div>
                        <button
                            type="submit"
                            class="flex items-center rounded-full px-4 py-3 border border-signal-500 bg-signal-500 hover:border-signal-600 hover:bg-signal-600 duration-150 text-ink-800 font-bold"
                        >
                            Send it
                            &nbsp;
                            <i class="bi bi-arrow-right"></i>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</section>
