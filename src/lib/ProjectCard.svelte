<script lang="ts">
    import type { Project } from "$common/interface/Project";
    import { ProjectStatus } from "$enum/ProjectStatus";

    const statusColors: Map<ProjectStatus, string> = new Map([
        [ProjectStatus.Planning, "bg-sky-600"],
        [ProjectStatus.Development, "bg-teal-600"],
        [ProjectStatus.Testing, "bg-violet-500"],
        [ProjectStatus.EarlyAccess, "bg-yellow-600"],
        [ProjectStatus.Available, "bg-emerald-600"],
        [ProjectStatus.Paused, "bg-gray-600"],
        [ProjectStatus.Canceled, "bg-red-600/70"],
    ]);

    const {
        name,
        description,
        status,
        content,
        imageUrl,
        tags,
        href,
    }: Omit<Project, "id"> = $props();
</script>

<div class="group w-full bg-secondary-600/20 flex flex-col gap-6 py-6 relative border-2 border-secondary-700 backdrop-blur-md rounded-lg hover:brightness-105 duration-200">
    <span
        role="presentation"
        class="absolute z-5 top-8 left-4 px-3 py-0.5 font-semibold text-sm rounded {statusColors.get(status)}"
    >{status}</span>
    <figure class="w-full aspect-5/2 h-auto overflow-hidden group-hover:scale-y-105 duration-200">
        <img
            src={imageUrl}
            alt={name}
            class="w-full h-full object-cover object-center"
        />
    </figure>
    <div class="w-full flex-1 flex flex-col items-start px-4 gap-4">
        <div class="w-full">
            <h3 class="text-3xl font-semibold text-left">{name}</h3>
            <p class="text-left text-primary-400">{description}</p>
        </div>
        <div class="flex-1">
            <p class="text-left">{content}</p>
        </div>
        <div class="flex w-full justify-start gap-4 my-1 flex-wrap">
            {#each tags as tag, i (i)}
                <span class="px-3 py-0.5 bg-secondary-200 text-black rounded-lg font-medium text-sm">
                    {tag}
                </span>
            {/each}
        </div>
        <div class="w-full">
            <a
                {href}
                class="flex justify-center gap-2 bg-primary-600 hover:bg-primary-800 py-1.5 cursor-pointer rounded-lg duration-150"
            >
                <span>Learn More</span>
                <i class="bi bi-box-arrow-up-right text-xs"></i>
            </a>
        </div>
    </div>
</div>
