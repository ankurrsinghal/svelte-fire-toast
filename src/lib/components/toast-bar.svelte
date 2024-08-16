<script lang="ts">
	import { keyframes } from 'goober';
	import type { CSSProperties, Optional, Toast, ToastPosition } from '$lib/core/types.js';
	import { prefersReducedMotion } from '$lib/core/utils.js';
	import ToastBarBase from './toast-bar-base.svelte';

	export let toast: Toast;
	export let position: Optional<ToastPosition>;
	export let style: Optional<CSSProperties>;

	const enterAnimation = (factor: number) => `
0% {transform: translate3d(0,${factor * -200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`;

	const exitAnimation = (factor: number) => `
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${factor * -150}%,-1px) scale(.6); opacity:0;}
`;
	const getAnimationStyle = (position: ToastPosition, visible: boolean): any => {
		const top = position.includes('top');
		const factor = top ? 1 : -1;

		const [enter, exit] = prefersReducedMotion()
			? [fadeInAnimation, fadeOutAnimation]
			: [enterAnimation(factor), exitAnimation(factor)];

		return {
			animation: visible
				? `${keyframes(enter)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`
				: `${keyframes(exit)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`
		};
	};

	const fadeInAnimation = `0%{opacity:0;} 100%{opacity:1;}`;
	const fadeOutAnimation = `0%{opacity:1;} 100%{opacity:0;}`;

	$: animationStyle = toast.height
		? getAnimationStyle(toast.position || position || 'top-center', toast.visible)
		: { opacity: 0 };
</script>

<ToastBarBase {toast} style={{ ...animationStyle, ...style, ...toast.style }} />
