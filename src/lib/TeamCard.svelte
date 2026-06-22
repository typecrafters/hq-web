<script lang="ts">
    import type { TeamMember } from "$interface/TeamMember";
    const { name, role, details, pictureUrl }: Omit<TeamMember, "id"> = $props();
</script>

<figure class="w-full p-4 flex flex-col gap-4 items-center border-2 border-secondary-700 bg-secondary-600/20 backdrop-blur-md rounded-lg">
    <div class="w-32 h-32 aspect-square rounded-full flex justify-center items-center overflow-hidden">
        <img src={pictureUrl} alt={`${name}'s profile`} class="w-full h-full" />
    </div>
    <figcaption class="flex flex-col gap-6">
        <div>
            <h3 class="text-xl font-semibold">{name}</h3>
            <span class="text-primary-400">{role}</span>
        </div>
        <p class="flex-1">{details}</p>
    </figcaption>
</figure>