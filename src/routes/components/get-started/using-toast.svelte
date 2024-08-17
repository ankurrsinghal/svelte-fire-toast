<script>
	import Code from '../code.svelte';
</script>

<h1 class="text-xl">Or calling `toast()`</h1>
<Code
	size="sm"
	snippet={`
<script>
import { toast } from 'svelte-fire-toast';
</script>

<button on:click={() => toast('Toast!')}>
	Fire
</button>`}
/>
