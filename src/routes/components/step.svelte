<script lang="ts">
	export let count: number;
	export let title: string;
	export let subTitle: string;
</script>

<div class="flex flex-col gap-1 items-center">
	<div
		class="h-6 w-6 mb-2 text-sm rounded-full bg-toast-900 text-toast-50 flex items-center justify-center"
	>
		{count}
	</div>
	<div class="font-bold">{title}</div>
	<div class="text-red-700 text-sm">{subTitle}</div>
	<code
		class="mt-2 border border-toast-200 py-2 px-4 rounded font-bold bg-white w-full text-center"
	>
		<slot />
	</code>
</div>
