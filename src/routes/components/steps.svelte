<script>
	import Step from './step.svelte';
</script>

<div class="grid grid-cols-1 md:grid-cols-3 gap-x-4 gap-y-8 my-12">
	<Step count={1} title="Install package" subTitle="It weighs less than 5kb"
		><code>
			<span class="text-toast-600">yarn add</span>{' '}
			<span class="text-toast-800">react-hot-toast</span>
		</code></Step
	>
	<Step count={2} title="Add Toaster to your app" subTitle="Make sure it's placed at the top">
		<span class="text-toast-600">{'<div>'}</span>
		<span class="text-toast-800">{'<Toaster/>'}</span>
		<span class="text-toast-600">{'</div>'}</span>
	</Step>
	<Step count={3} title="Start toasting!" subTitle="Call it from anywhere">
		<span class="text-toast-600">{'toast'}</span>
		<span class="text-toast-800">{'("Hello World")'}</span></Step
	>
</div>
