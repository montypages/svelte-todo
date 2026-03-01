<script>
    let { text = "Button", onclick } = $props();
</script>

<button onclick={onclick}>{text}</button>


<style>
    button {
        padding: 10px 50px;
        background-color: aqua;
        color: hsl(180, 100%, 15%);
        transition: scale 100ms ease;
    }

    button:hover {
        background-color: hsl(180, 100%, 60%);
    }

    button:active {
        background-color: hsl(180, 100%, 45%);
        scale: 0.95;
    }
</style>