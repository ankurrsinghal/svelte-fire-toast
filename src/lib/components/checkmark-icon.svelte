<script lang="ts">
	export let primary = '#61d345';
	export let secondary = '#fff';
</script>

<div class="ft-checkmark-icon" style:background={primary}>
	<span style:border-color={secondary}></span>
</div>

<style lang="scss">
	@keyframes ft-checkmark-icon-circle-animation {
		from {
			transform: scale(0) rotate(45deg);
			opacity: 0;
		}
		to {
			transform: scale(1) rotate(45deg);
			opacity: 1;
		}
	}

	@keyframes ft-checkmark-icon-checkmark-animation {
		0% {
			height: 0;
			width: 0;
			opacity: 0;
		}
		40% {
			height: 0;
			width: 6px;
			opacity: 1;
		}
		100% {
			opacity: 1;
			height: 10px;
		}
	}

	.ft-checkmark-icon {
		width: 20px;
		opacity: 0;
		height: 20px;
		border-radius: 10px;
		position: relative;
		transform: rotate(45deg);

		animation: ft-checkmark-icon-circle-animation 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
			forwards;
		animation-delay: 100ms;
		span {
			box-sizing: border-box;
			animation: ft-checkmark-icon-checkmark-animation 0.2s ease-out forwards;
			opacity: 0;
			animation-delay: 200ms;
			position: absolute;
			border-right: 2px solid;
			border-bottom: 2px solid;
			bottom: 6px;
			left: 6px;
			height: 10px;
			width: 6px;
		}
	}
</style>
