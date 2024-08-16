<script lang="ts">
	import Prism from 'prismjs';
	import '../prism-svelte.js';

	export let snippet: string;
</script>

<pre><code>{@html Prism.highlight(snippet, Prism.languages.svelte, 'svelte').trim()}</code></pre>
