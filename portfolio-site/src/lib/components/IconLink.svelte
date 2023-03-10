<script>
    export let icon;
    export let link;
</script>

<style lang="scss">
    a {
        color: #fff;
        text-shadow: #000 1px 1px, #000 0 0 0.25rem;
        font-size: 2rem;
        margin: 0 1rem;
    }
</style>

<a href={link} target="_blank" rel="noreferrer">
    <i class={icon}></i>
</a>