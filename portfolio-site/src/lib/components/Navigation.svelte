<script>
  import { navLinks } from "../stores";
  import NavLink from "./NavLink.svelte";
</script>

<style lang="scss">
    nav {
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0;
    }

    ul {
        display: flex;
        align-items: center;
        justify-content: center;
        list-style: none;
        padding: 0;
    }
    
        li {
        display: inline-block;
        margin: 0 1rem;
    }
</style>

<nav>
    <ul>
        {#each $navLinks as navLink}
        <li>
            <NavLink {...navLink} />
        </li>
        {/each}
    </ul>
</nav>