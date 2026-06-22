<script lang="ts">
    interface TeamCardProps {
        pfpUrl: string;
        firstName: string;
        lastName: string;
        title: string;
        description: string;
    }

    let {
        pfpUrl = "/img/placeholder.svg",
        firstName = "John",
        lastName = "Doe",
        title = "CEO & Founder",
        description = [            
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit",
            "recusandae laborum, ipsam molestias aliquid tenetur nobis nisi",
            "voluptates nesciunt eaque eveniet sapiente, deserunt aperiam nulla",
            "harum esse amet accusantium dicta."
        ].join(" "),
    }: TeamCardProps = $props();

    let fullName = $derived(`${firstName} ${lastName}`);
</script>

<div class="bg-white w-full p-6 border border-ink-300 rounded-lg space-y-4">
    <figure class="flex items-center gap-4">
        <div class="rounded-full size-16 overflow-hidden bg-ink-400">
            <img
                src={pfpUrl}
                alt="{fullName}'s profile"
                class="w-full h-full object-cover object-center"
            />
        </div>
        <figcaption class="font-mono">
            <h3 class="text-xl font-semibold">{fullName}</h3>
            <span class="text-sm text-signal-600">{title}</span>
        </figcaption>
    </figure>
    <div class="text-ink-600">
        <p class="line-clamp-3">{description}</p>
    </div>
</div>
