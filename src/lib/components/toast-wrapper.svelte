<script lang="ts">
	import type { CSSProperties, ToastWrapperProps } from '$lib/core/types.js';

	export let id: string;
	export let onHeightUpdate: (id: string, height: number) => void;
	export let className: string | undefined;
	export let style: CSSProperties | undefined;

	$: styleString = Object.entries(style)
		.map(([key, value]) => `${key}: ${value};`)
		.join(' ');

	let el: HTMLElement | null = null;

	$: {
		if (el !== null) {
			const updateHeight = () => {
				if (el === null) return;
				const height = el.getBoundingClientRect().height;
				onHeightUpdate(id, height);
			};
			updateHeight();
			new MutationObserver(updateHeight).observe(el, {
				subtree: true,
				childList: true,
				characterData: true
			});
		}
	}
</script>

<div bind:this={el} class={className} style={styleString}>
	<slot />
</div>

<style lang="scss">
	.ft-toast-wrapper-if-visible {
		z-index: 9999;
		> * {
			pointer-events: auto;
		}
	}
</style>
