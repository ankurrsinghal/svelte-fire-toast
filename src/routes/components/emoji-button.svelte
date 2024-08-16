<script lang="ts">
	export let emoji: string;
</script>

<button
	class="rounded bg-white text-sm font-semibold py-2 px-2 shadow-small-button flex items-center"
	on:click
>
	<span
		style:font-Family={`"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"`}
	>
		{emoji}
	</span>
	<div class="flex-1 px-3"><slot /></div>
</button>
