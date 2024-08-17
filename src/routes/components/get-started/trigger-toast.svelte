<script>
	import Code from '../code.svelte';
	import SvelteAction from './svelte-action.svelte';
	import UsingToast from './using-toast.svelte';
</script>

<h1 class="text-2xl">Fire the toast</h1>
<div class="space-y-4 mt-4">
	<div>
		<SvelteAction />
	</div>
	<div>
		<UsingToast />
	</div>
</div>
