<script lang="ts">
	export let primary = '#616161';
	export let secondary = '#e0e0e0';
</script>

<div class="ft-loader-icon" style:border-color={secondary} style:border-right-color={primary}></div>

<style lang="scss">
	@keyframes ft-loader-icon-rotate {
		from {
			transform: rotate(0deg);
		}
		to {
			transform: rotate(360deg);
		}
	}

	.ft-loader-icon {
		width: 12px;
		height: 12px;
		box-sizing: border-box;
		border: 2px solid;
		border-radius: 100%;
		animation: ft-loader-icon-rotate 1s linear infinite;
	}
</style>
