<script>
	import Checkmark from '../assets/checkmark.svelte';
</script>

<div class="px-4 py-2 rounded text-white relative">
	<div class="opacity-75 absolute inset-0 rounded bg-red-700 border border-red-600"></div>
	<div class="relative flex gap-1 items-center">
		<Checkmark />
		<span class="font-bold"><slot /></span>
	</div>
</div>
