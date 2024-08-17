<script lang="ts">
	import './tailwind-utilities.css';
	import './page.css';
	import './code.css';
	import { toastAction } from '$lib/core/actions.js';
	import Toaster from '$lib/components/toaster.svelte';
	import HeaderCodeSnippet from './components/header-code-snippet.svelte';
	import Features from './components/features.svelte';
	import ToastExample from './components/sections/toast-example.svelte';
	import Installation from './components/get-started/installation.svelte';
	import AddComponent from './components/get-started/add-component.svelte';
	import TriggerToast from './components/get-started/trigger-toast.svelte';
</script>

<div class="container max-w-[800px] h-full">
	<div class="flex mt-16 sm:flex-col sm:mt-0 sm:py-8 sm:justify-between">
		<div class="flex-1 sm:text-center text-8xl sm:text-8xl flex items-center gap-8">
			<h1 class="font-bold">Svelte</h1>
			<button
				use:toastAction={'Toasted!'}
				class="h-[144px] shadow fire-gradient bg-orange-700 text-white py-4 w-[275px] text-left pl-8 rounded-md my-4 border-b-amber-800 border-b-[16px] active:border-b-0 hover:border-b-[10px] focus:border-b-[10px] transition-[border]"
			>
				<h1 class="font-bold flex items-center">
					Fire <span class="text-4xl ml-4">►</span>
				</h1>
			</button>
			<h1 class="font-bold">Toast</h1>
		</div>
		<div class="flex-1 sm:mt-16">
			<HeaderCodeSnippet />
		</div>
	</div>
	<div>
		<Features />
		<div class="space-y-8">
			<h1 class="text-6xl">Get Started</h1>
			<div>
				<Installation />
			</div>
			<div>
				<AddComponent />
			</div>
			<div>
				<TriggerToast />
			</div>
			<div>
				<h1 class="text-2xl">Examples</h1>
				<ToastExample />
			</div>
		</div>
	</div>
</div>
<Toaster />
