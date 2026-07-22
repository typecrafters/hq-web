<script lang="ts">
    import { ProjectStatus } from "$common/enum/ProjectStatus";

    interface ProjectCardProps {
        title: string;
        summary: string;
        thumbnailUrl: string;
        status: ProjectStatus;
        description: string;
    }

    const {
        title,
        summary,
        thumbnailUrl,
        status,
        description,
    }: ProjectCardProps = $props();

    const statusStyles: Record<ProjectStatus, string> = {
        [ProjectStatus.Development]: "bg-info-100 text-info-700",
        [ProjectStatus.Planned]: "bg-secondary-100 text-secondary-700",
        [ProjectStatus.Review]: "bg-warning-100 text-warning-700",
        [ProjectStatus.Archived]: "bg-paper-200 text-paper-700",
        [ProjectStatus.Cancelled]: "bg-error-100 text-error-700",
    };
</script>

<figure class="w-full flex flex-col relative rounded-lg overflow-hidden shadow-md shadow-paper-600">
    <span class="absolute top-4 right-4 rounded-full px-2.5 py-1 text-sm font-mono {statusStyles[status]}">
        {status}
    </span>
    <picture class="aspect-8/5 w-full block overflow-hidden">
        <img src={thumbnailUrl} alt={title} class="w-full h-full object-cover object-center" />
    </picture>
    <figcaption class="flex-1 bg-white p-6 flex flex-col gap-4">
        <h3 class="flex-1 text-xl font-semibold">{title}</h3>
        <p class="flex-1 text-ink-600">{description}</p>
    </figcaption>
</figure>
