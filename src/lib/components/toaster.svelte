<script lang="ts">
	import { toast } from '$lib/core/toast.js';
	import { calculateOffset, store, updateHeight } from '$lib/core/toasts.js';
	import type {
		CSSProperties,
		DefaultToastOptions,
		Optional,
		Toast,
		ToastPosition,
		ToastType
	} from '$lib/core/types.js';
	import { prefersReducedMotion } from '$lib/core/utils.js';
	import { derived } from 'svelte/store';
	import ToastBar from './toast-bar.svelte';
	import ToastWrapper from './toast-wrapper.svelte';

	export let reverseOrder: Optional<boolean>;
	export let position: Optional<ToastPosition> = 'top-center';
	export let toastOptions: Optional<DefaultToastOptions> = {};
	export let gutter: Optional<number>;
	export let containerStyle: Optional<CSSProperties>;
	export let containerClassName: Optional<string>;

	const DEFAULT_OFFSET = 16;

	const defaultTimeouts: {
		[key in ToastType]: number;
	} = {
		blank: 4000,
		error: 4000,
		success: 2000,
		loading: Infinity,
		custom: 4000
	};

	$: constainerStyleString =
		containerStyle &&
		Object.entries(containerStyle)
			.map(([key, value]) => `${key}: ${value};`)
			.join(' ');

	const handlers = {
		startPause: () => {},
		endPause: () => {}
	};

	const getPositionStyle = (t: Toast): CSSProperties => {
		const toastPosition = t.position || position;
		const offset = calculateOffset(t, {
			reverseOrder,
			gutter,
			defaultPosition: toastPosition
		});
		console.log('offsetoffset', t, offset, {
			reverseOrder,
			gutter,
			defaultPosition: toastPosition
		});
		const top = toastPosition.includes('top');
		const verticalStyle: CSSProperties = top ? { top: 0 } : { bottom: 0 };
		const horizontalStyle: CSSProperties = toastPosition.includes('center')
			? {
					'justify-content': 'center'
				}
			: toastPosition.includes('right')
				? {
						'justify-content': 'flex-end'
					}
				: {};
		return {
			left: 0,
			right: 0,
			display: 'flex',
			position: 'absolute',
			transition: prefersReducedMotion() ? undefined : `all 230ms cubic-bezier(.21,1.02,.73,1)`,
			transform: `translateY(${offset * (top ? 1 : -1)}px)`,
			...verticalStyle,
			...horizontalStyle
		};
	};

	const toasts = derived(store.toasts, (toasts) => {
		return toasts.map((t) => ({
			...toastOptions,
			...toastOptions[t.type],
			...t,
			duration:
				t.duration ||
				toastOptions[t.type]?.duration ||
				toastOptions?.duration ||
				defaultTimeouts[t.type],
			style: {
				...toastOptions.style,
				...toastOptions[t.type]?.style,
				...t.style
			}
		}));
	});

	$: timeouts = $toasts.map((t) => {
		const now = Date.now();
		if (t.duration === Infinity) {
			return;
		}

		const durationLeft = (t.duration || 0) + t.pauseDuration - (now - t.createdAt);

		console.log('durationLeftdurationLeft', durationLeft);

		if (durationLeft < 0) {
			if (t.visible) {
				toast.dismiss(t.id);
			}
			return;
		}
		return setTimeout(() => toast.dismiss(t.id), durationLeft);
	});
</script>

<div
	style:position="fixed"
	style:z-index={9999}
	style:top="{DEFAULT_OFFSET}px"
	style:left="{DEFAULT_OFFSET}px"
	style:right="{DEFAULT_OFFSET}px"
	style:bottom="{DEFAULT_OFFSET}px"
	style:pointer-events="none"
	style={constainerStyleString}
	class={containerClassName}
	on:mouse-enter={handlers.startPause}
	on:mouse-leave={handlers.endPause}
>
	{#each $toasts as toast (toast.id)}
		<ToastWrapper
			id={toast.id}
			onHeightUpdate={updateHeight}
			className={toast.visible ? 'ft-toast-wrapper-if-visible' : undefined}
			style={getPositionStyle(toast)}
		>
			<ToastBar {toast} position={toast.position || position} />
		</ToastWrapper>
	{/each}
</div>
