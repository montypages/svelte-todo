<script>
    import Button from '../lib/components/button.svelte';

    let count = $state(0);

    function countup() {count++}
    function resetCount() {count = 0}
</script>

<Button text="Clicked {count} {count === 1 ? 'time' : 'times'}" onclick={countup}/>
<Button text="Reset" onclick={resetCount} />