<script>
    import { onMount } from 'svelte';
	import { placeholder } from 'drizzle-orm';
    import { Button, ListTile } from '$lib';
    import { db } from '$lib/server/db';
    import { todos } from '$lib/server/db/schema';

    export const actions = {
        default: async ({ request }) => {
            const data = await request.formData();
            const text = data.get('text');

            if (text) {
            // Drizzle handles the ID and 'done' status via schema defaults
            await db.insert(todos).values({ text });
            }
        }
    };

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
    <form action="" method="post">
        <input 
            id="newtodo"
            name="text" 
            type="text" 
            placeholder="New to-do item" 
            >
        <button type="submit">➕</button>
    </form>
    {#each db.todos as todo (todo.id) }
        <ListTile text={todo.text} onclick={() => {
            // todos.splice(todos.indexOf(todo), 1);
            db.todos = db.todos.filter(t => t.id !== todo.id);
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