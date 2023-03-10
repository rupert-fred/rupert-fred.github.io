<script>
  import Header from "../lib/components/Header.svelte";

</script>

<style lang="scss">
    main {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin: 0 auto;
    }
</style>

<Header />

<main>
  <slot></slot>
</main>