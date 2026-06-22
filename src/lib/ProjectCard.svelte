<script lang="ts">
    interface ProjectCardProps {
        title?: string;
        subtitle?: string;
        thumbnailUrl?: string;
        status?: string;
        description?: string;
    }

    const {
        title = "FateBound",
        subtitle = "Action/Adventure",
        thumbnailUrl = "/img/placeholder.svg",
        status = "In development",
        description = "Embark on an adventure, exploring the darkest, narrowest corners in search for treasure",
    }: ProjectCardProps = $props();
</script>

<figure class="w-full relative rounded-lg overflow-hidden shadow-md shadow-paper-600">
    <span class="absolute top-4 right-4 rounded-full px-2 py-1 text-sm font-mono">
        {status}
    </span>
    <picture class="aspect-8/5 w-full block overflow-hidden">
        <img src={thumbnailUrl} alt={title} class="w-full h-full object-cover object-center" />
    </picture>
    <figcaption class="bg-white p-6 flex flex-col gap-4">
        <div class="flex items-center">
            <h3 class="flex-1 text-xl font-semibold">{title}</h3>
            <span class="text-ink-600 text-sm font-mono">{subtitle}</span>
        </div>
        <p class="flex-1 text-ink-600">{description}</p>
    </figcaption>
</figure>
