<script lang="ts">
	export let primary = '#ff4b4b';
	export let secondary = '#fff';
</script>

<div class="ft-error-icon" style:background={primary}>
	<span style:background={secondary}></span>
	<span style:background={secondary}></span>
</div>

<style lang="scss">
	@keyframes ft-error-icon-circle-animation {
		from {
			transform: scale(0) rotate(45deg);
			opacity: 0;
		}
		to {
			transform: scale(1) rotate(45deg);
			opacity: 1;
		}
	}

	@keyframes ft-error-icon-first-line-animation {
		from {
			transform: scale(0);
			opacity: 0;
		}
		to {
			transform: scale(1);
			opacity: 1;
		}
	}

	@keyframes ft-error-icon-second-line-animation {
		from {
			transform: scale(0) rotate(90deg);
			opacity: 0;
		}
		to {
			transform: scale(1) rotate(90deg);
			opacity: 1;
		}
	}

	.ft-error-icon {
		width: 20px;
		opacity: 0;
		height: 20px;
		border-radius: 10px;
		position: relative;
		transform: rotate(45deg);

		animation: ft-error-icon-circle-animation 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
		animation-delay: 100ms;

		span {
			animation: ft-error-icon-first-line-animation 0.15s ease-out forwards;
			animation-delay: 150ms;
			position: absolute;
			border-radius: 3px;
			opacity: 0;
			bottom: 9px;
			left: 4px;
			height: 2px;
			width: 12px;
		}

		span:last-child {
			animation: ft-error-icon-second-line-animation 0.15s ease-out forwards;
			animation-delay: 180ms;
			transform: rotate(90deg);
		}
	}
</style>
