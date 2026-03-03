<script>
    let { checked, text, onclick } = $props();

    let done = $state(false);
</script>

<a href="#" onclick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        done = !done;
    }}>
    <div class={["tile", { done }]}>
            <input type="checkbox" bind:checked={done}>
            <p>{text}</p>
            <button { onclick }>🗑️</button>
    </div>
</a>

<style>
    .tile {
        position: relative;
        z-index: 0;
        display: flex;
        justify-content: start;
        align-items: center;
        width: 100%;
        padding: 0.5rem;
        margin-top: 0.5rem;
        background-color: #333;
        color: #ddd;
    }

    .tile > p {
        margin-left: 1rem;
        margin-right: auto;
    }

    .done {
        background-color: #252525;
        color: #aaa;
        text-decoration: line-through;
    }

    input {
        accent-color: rebeccapurple;
    }

    a {
        text-decoration: none;
        color: inherit;
    }

    button {
        position: relative;
        z-index: 2;
        padding: 0.25rem 1rem;
        background-color: #444444;
        border-radius: 8px;
        text-decoration: none !important;
    }
</style>