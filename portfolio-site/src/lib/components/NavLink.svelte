<script>
    export let name;
    export let href;
    export let icon;
</script>

<style lang="scss">
    a {
        color: #fff;
        text-shadow: #000 1px 1px, #000 0 0 0.25rem;
        font-size: 1.5rem;
        text-decoration: none;
    }

    i {
        margin-right: 0.5rem;
    }
</style>

<a href={href} target="_blank" rel="noreferrer">
    {#if icon}
    <i class={icon}></i>
    {/if}
    {#if name}
    <span>{name}</span>
    {/if}
</a>