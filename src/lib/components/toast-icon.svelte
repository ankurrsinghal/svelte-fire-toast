<script lang="ts">
	import type { Toast } from '$lib/core/types.js';
	import CheckmarkIcon from './checkmark-icon.svelte';
	import ErrorIcon from './error-icon.svelte';
	import LoaderIcon from './loader-icon.svelte';
	export let toast: Toast;

	$: ({ icon, type, iconTheme } = toast);

	$: console.log('iconiconiconiconiconicon', { icon, type, iconTheme });
</script>

{#if icon !== undefined}
	{#if typeof icon === 'string'}
		<div class="ft-animated-icon-wrapper">
			<svelte:component this={icon} />
		</div>
	{:else}
		<svelte:component this={icon} />
	{/if}
{:else}
	<div class="ft-indicator-icon-wrapper">
		<LoaderIcon {...iconTheme} />
		{#if type !== 'loading'}
			<div class="ft-status-wrapper">
				{#if type === 'error'}
					<ErrorIcon {...iconTheme} />
				{:else}
					<CheckmarkIcon {...iconTheme} />
				{/if}
			</div>
		{/if}
	</div>
{/if}

<style lang="scss">
	.ft-status-wrapper {
		position: absolute;
	}

	.ft-indicator-icon-wrapper {
		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;
		min-width: 20px;
		min-height: 20px;
	}

	@keyframes ft-animated-icon-wrapper-enter-keyframes {
		from {
			transform: scale(0.6);
			opacity: 0.4;
		}
		to {
			transform: scale(1);
			opacity: 1;
		}
	}

	.ft-animated-icon-wrapper {
		position: relative;
		transform: scale(0.6);
		opacity: 0.4;
		min-width: 20px;
		animation: ft-animated-icon-wrapper-enter-keyframes 0.3s 0.12s
			cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
	}
</style>
