<script>
	import Code from './code.svelte';
</script>

<Code
	snippet={`
<script>
import { Toaster, toastAction } from 'svelte-fire-toast';
</script>

<Toaster />
<button
	use:toastAction={'Toasted!'}>
		Fire
</button>`}
/>
