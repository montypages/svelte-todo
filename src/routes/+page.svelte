<script>
    import { onMount } from 'svelte';
	import { placeholder } from 'drizzle-orm';
    import { Button, ListTile } from '$lib';


    let todos = $state([
        {
            text: "Take out the trash",
            id: crypto.randomUUID()
        }, 
        {
            text: "Make dinner",
            id: crypto.randomUUID()
        }, 
        {
            text: "Fold laundry",
            id: crypto.randomUUID()
        }
    ]);
    // let todotext = $state('');

    function countup() {count++}
    function resetCount() {count = 0}
    function newtodo(text) {
        const input = document.getElementById('newtodo');
        todos.push({
            text: text,
            id: crypto.randomUUID()
        });
        input.value = '';
    }



</script>

<header>
    <h1>To-Do List</h1>
</header>

<div class="container">
    <input id="newtodo" type="text" placeholder="New to-do item" onkeypress={(e) => {if (e.key === 'Enter') {newtodo(this.value)}}}>
    {#each todos as todo (todo.id) }
        <ListTile text={todo.text} onclick={() => {
            // todos.splice(todos.indexOf(todo), 1);
            todos = todos.filter(t => t.id !== todo.id);
            }}/>
    {/each}
    {#if !todos.length}
            <h2>All done!</h2>
            <p>Add some items and let's <strong>DO THIS!</strong></p>
    {/if}
</div>


<style>

    :global(body) {
        background-color: #222;
        color: #ddd;
        font-family: Avenir, Montserrat, Corbel, 'URW Gothic', source-sans-pro, sans-serif;
        font-weight: normal;
    }

    .container, header {
        width: min(90%, 900px);
        margin: 0 auto;
    }

    input {
        padding: 0.5rem;
        margin-top: 1rem;
        width: 100%;
    }
</style>