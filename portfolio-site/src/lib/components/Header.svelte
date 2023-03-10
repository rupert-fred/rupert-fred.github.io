<script>
  import IconLink from "./IconLink.svelte";
  import Navigation from "./Navigation.svelte";
  import NavLink from "./NavLink.svelte";

</script>
<style lang="scss">
    header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0.5rem 0;
        margin: 0 0.5rem;
        //background-color: #000;
        color: #fff;
        text-align: center;
    }
</style>

<header>
    <NavLink name="rupert-fred" href="/" />
    <Navigation />
    <NavLink href="https://rupert-fred.github.io" icon="fab fa-github" />
</header>