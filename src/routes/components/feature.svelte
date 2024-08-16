<script>
	import Checkmark from '../assets/checkmark.svelte';
</script>

<div class="flex gap-1 items-center">
	<Checkmark />
	<span class="font-bold"><slot /></span>
</div>
