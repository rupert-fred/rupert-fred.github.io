<script>
  import Header from "../lib/components/Header.svelte";
</script>

<style lang="scss">
    .page-content {
        background-image: url("background_image.png");
        background-size: cover;
        background-position: cover;
        background-repeat: no-repeat;
        background-attachment: fixed;
    }
    main {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin: 0 auto;
        color: #fff;
    }
</style>

<div class="page-content">
<Header />

<main>
  <slot></slot>
</main>
</div>