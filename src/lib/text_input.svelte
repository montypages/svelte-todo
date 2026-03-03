<script>
    let { id, placeholder, onkeypress } = $props();

    let value = $state();
</script>

<input type="text" { id } { placeholder } { onkeypress } bind:value={value}>


<style>
    input {
        padding: 0.5rem;
        margin-top: 1rem;
    }
</style>