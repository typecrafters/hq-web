<script>
    import Container from "./Container.svelte";
</script>
<footer id="website-footer" class="bg-secondary-800 backdrop-blur-md shadow-md">
    <Container class="py-8 space-y-8" centered>
        <div class="flex w-full flex-col md:flex-row gap-8 md:gap-0">
            <div class="flex-1 flex flex-col gap-4 items-start text-center md:text-left *:flex-1">
                <p class="w-full">TypeCrafters is a small developer team based in Panama.</p>
                <p class="w-full">We are excited to make amazing experiences for developers and gamers.</p>
            </div>
            <nav class="flex-1 flex flex-col gap-4 items-center md:items-end *:flex-1">
                <ul class="flex gap-4">
                    <li class="hover:text-primary-400 duration-150 cursor-pointer">
                        <a href="#about-us">About</a>
                    </li>
                    <li class="hover:text-primary-400 duration-150 cursor-pointer">
                        <a href="#current-projects">Projects</a>
                    </li>
                    <li class="hover:text-primary-400 duration-150 cursor-pointer">
                        <a href="#blog">Blog</a>
                    </li>
                    <li class="hover:text-primary-400 duration-150 cursor-pointer">
                        <a href="#contact-us">Contact</a>
                    </li>
                </ul>
                <ul class="flex gap-6 text-2xl">
                    <li>
                        <a href="/" aria-label="YouTube" class="text-secondary-400 hover:text-primary-400 duration-150">
                            <i class="bi bi-youtube"></i>
                        </a>
                    </li>
                    <li>
                        <a href="/" aria-label="X" class="text-secondary-400 hover:text-primary-400 duration-150">
                            <i class="bi bi-twitter-x"></i>
                        </a>
                    </li>
                    <li>
                        <a href="/" aria-label="Instagram" class="text-secondary-400 hover:text-primary-400 duration-150">
                            <i class="bi bi-instagram"></i>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
        <hr class="border-secondary-500" />
        <div class="w-full">
            <div class="text-center text-sm">
                <p>
                    &copy; {new Date().getFullYear()} TypeCrafters. All rights reserved.
                </p>
            </div>
        </div>
    </Container>
</footer>