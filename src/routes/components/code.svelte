<script lang="ts">
	import Prism from 'prismjs';
	import '../prism-svelte.js';

	export let snippet: string;
	export let size: 'lg' | 'sm' = 'lg';

	$: containerStyle = size === 'lg' ? 'text-[18px] p-8' : 'text-[14px] p-4';
	$: innerContainerStyle = size === 'lg' ? 'p-12 inset-4' : 'p-6 inset-3';
	$: codeContainerStyle = size === 'lg' ? 'p-8' : 'p-4';
</script>

<div
	class="h-full mt-4 {containerStyle} overflow-auto border rounded-md foreground-gradient relative flex items-center"
>
	<div class="{innerContainerStyle} bg-black opacity-75 absolute rounded-xl frame"></div>
	<div class="{codeContainerStyle} relative">
		<pre><code>{@html Prism.highlight(snippet, Prism.languages.svelte, 'svelte').trim()}</code
			></pre>
	</div>
</div>
