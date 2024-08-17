<script>
	import Code from '../code.svelte';
</script>

<h1 class="text-xl">Svelte Action way</h1>
<Code
	size="sm"
	snippet={`
<script>
import { toastAction } from 'svelte-fire-toast';
</script>

<button
	use:toastAction={'Toasted!'}>
		Fire
</button>`}
/>
