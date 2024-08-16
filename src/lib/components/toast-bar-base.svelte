<script lang="ts">
	import type { CSSProperties, Optional, Toast } from '$lib/core/types.js';
	import Message from './message.svelte';
	import ToastIcon from './toast-icon.svelte';

	export let toast: Toast;
	export let style: Optional<CSSProperties>;

	$: styleString =
		style &&
		Object.entries(style)
			.map(([key, value]) => `${key}: ${value};`)
			.join(' ');

	$: console.log('styleStringstyleStringstyleStringstyleString', styleString);
</script>

<div class="ft-toast-bar-base" style={styleString}>
	<ToastIcon {toast} />
	<Message>
		{toast.message}
	</Message>
</div>

<style>
	.ft-toast-bar-base {
		display: flex;
		align-items: center;
		background: #fff;
		color: #363636;
		line-height: 1.3;
		will-change: transform;
		box-shadow:
			0 3px 10px rgba(0, 0, 0, 0.1),
			0 3px 3px rgba(0, 0, 0, 0.05);
		max-width: 350px;
		pointer-events: auto;
		padding: 8px 10px;
		border-radius: 8px;
		box-sizing: border-box;
	}
</style>
