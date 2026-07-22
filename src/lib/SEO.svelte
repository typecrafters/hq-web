<script lang="ts">
    import { PUBLIC_PAGE_URL } from "$env/static/public";

    interface SEOProps {
        title: string;
        description: string;
        path?: string;
    }

    const {
        title,
        description,
        path="/"
    }: SEOProps = $props();

    const jsonLd = $derived(JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "TypeCrafters",
        url: PUBLIC_PAGE_URL,
        logo: `${PUBLIC_PAGE_URL}/img/logo.svg`,
        description
    }).replace(/</g, "\\u003c"));
</script>

<svelte:head>
    <title>{title}</title>
    <meta name="description" content={description}>
    <link rel="canonical" href="{PUBLIC_PAGE_URL}{path}">

    <meta property="og:title" content={title}>
    <meta property="og:type" content="website">
    <meta property="og:url" content={PUBLIC_PAGE_URL}>
    <meta property="og:description" content={description}>
    <meta property="og:site_name" content="TypeCrafters">

    <meta name="twitter:card" content="summary">
    <meta name="twitter:title" content={title}>
    <meta name="twitter:description" content={description}>

    <meta name="theme-color" content="#EC5A2A">

    {@html `<script type="application/ld+json">${jsonLd}</script>`}
</svelte:head>
