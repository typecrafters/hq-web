<script lang="ts">
    let showNavMenu: boolean = $state(false);
</script>
<header class="sticky top-0 w-full px-4 md:px-8 lg:px-12 py-4 border-b border-secondary-500 backdrop-blur-md z-40">
    <nav class="flex items-center w-full">
        <h1 class="flex-1 font-black text-xl lg:text-3xl">
            <a href="#top">TypeCrafters HQ</a>
        </h1>
        <ul
            class="h-screen md:h-auto min-w-50 md:min-w-auto flex flex-col md:flex-row bg-secondary-800 md:bg-inherit fixed md:static top-0 right-0 text-lg font-semibold p-6 md:p-0 gap-4 md:gap-8 z-50 {showNavMenu ? "translate-x-0" : "translate-x-full"} md:translate-0 duration-200"
        >
            <li class="hover:text-primary-400 duration-150">
                <a href="#about">About</a>
            </li>
            <li class="hover:text-primary-400 duration-150">
                <a href="#projects">Projects</a>
            </li>
            <li class="hover:text-primary-400 duration-150">
                <a href="#blog">Blog</a>
            </li>
            <li class="hover:text-primary-400 duration-150">
                <a href="#contact">Contact</a>
            </li>
        </ul>
        <button
            aria-label="open navigation menu"
            class="text-3xl cursor-pointer md:hidden"
            onclick={() => showNavMenu = true}
        >
            <i class="bi bi-list"></i>
        </button>
        <button
            aria-label="close navigation menu"
            class="fixed inset-0 w-screen h-screen z-45 {showNavMenu ? "block" : "hidden"}"
            onclick={() => showNavMenu = false}
        ></button>
    </nav>
</header>