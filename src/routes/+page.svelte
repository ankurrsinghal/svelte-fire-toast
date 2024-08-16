<script lang="ts">
	import './tailwind-utilities.css';
	import './page.css';
	import clsx from 'clsx';
	import Toaster from '$lib/components/toaster.svelte';
	import { toast } from '$lib/core/toast';

	import type { Toast, ToastPosition } from '$lib/core/types.js';
	import Features from './components/features.svelte';
	import Steps from './components/steps.svelte';
	import Footer from './components/sections/footer.svelte';
	import ToastExample from './components/sections/toast-example.svelte';
	import Logo from './assets/logo.svelte';
	import Butter_1 from './assets/butter-1.svelte';
	import Github from './assets/github.svelte';
	import Butter_2 from './assets/butter-2.svelte';
	import ToasterExample from './components/sections/toaster-example.svelte';

	let position: ToastPosition = 'top-center';
	let reverse = false;
	let toasts: Toast[] = [];

	const shouldFade = toasts.filter((t) => t.visible).length && position.includes('top');
</script>

<div class="overflow-x-hidden">
	<header class="bg-gradient-to-b from-toast-50 to-white bg-opacity-10">
		<div class="container flex flex-col items-center relative">
			<Butter_1
				class="absolute -left-24 md:left-24 transition-opacity duration-200"
				style={{
					opacity: shouldFade ? 0.5 : 1
				}}
			/>

			<div>
				<Logo
					role="img"
					aria-label="react-hot-toast"
					class="relative animate-slide-in transition-all duration-200 -mt-8 md:-mt-4"
					style={{
						willChange: 'filter',
						opacity: shouldFade ? 0.2 : 1,
						filter: `blur(${shouldFade ? 6 : 0}px)`
					}}
				/>
			</div>
			<div class="text-center my-12 relative duration-200">
				<h1 class="text-3xl md:text-4xl animate-enter font-bold text-toast-900">
					The Best Toast in Town.
				</h1>
				<h2 class="text-xl md:text-2xl font-bold text-toast-600 mt-2">
					Smoking hot React notifications.
				</h2>
			</div>

			<div class="grid md:grid-cols-2 gap-4 rounded-2xl bg-toast-200 p-4 w-full max-w-lg">
				<button
					data-splitbee-event="Trigger Toast"
					data-splitbee-event-example="CTA"
					class={clsx(
						'rounded-lg font-bold gap-4 flex bg-gradient-to-b from-white to-toast-200 shadow-button text-center',
						'py-4 px-6',
						'active:translate-y-0.5 active:shadow-button-active active:bg-gray-100 transform',
						'focus:outline-none focus:ring-4'
					)}
					style={{
						transitionProperty: 'box-shadow, transform'
					}}
					on:click={() => {
						const promise = new Promise((res, rej) => {
							if (Math.random() < 0.85) {
								setTimeout(res, 1000);
							} else {
								setTimeout(rej, 3000);
							}
						});

						toast.promise(
							promise,
							{
								loading: 'Preparing toast',
								error: 'Whoops, it burnt',
								success: "Here's your toast"
							},
							{
								style: {
									width: '200px',
									paddingRight: '10px'
								}
							}
						);
					}}
				>
					<div>🛎</div>
					<span class="flex-1 mr-2">Make me a toast</span>
				</button>
				<a
					class={clsx(
						'rounded-lg flex font-bold bg-white py-4 px-6 shadow-button  text-toast-800',
						'active:translate-y-0.5 active:shadow-button-active transform'
					)}
					style={{
						transitionProperty: 'box-shadow, transform'
					}}
					data-splitbee-event="Open Link"
					data-splitbee-event-target="GitHub"
					href="https://github.com/timolins/react-hot-toast"
				>
					<Github class="opacity-100" />
					<span class="flex-1 text-toast-800 text-center">GitHub</span>
				</a>
			</div>
			<div class="text-toast-600 my-2">
				<a href="/docs">
					<span class="underline">Documentation</span>
				</a>
				.
				<span>v1</span>
			</div>

			<Features />
			<Steps />
			<div class="w-full max-w-4xl">
				<div class="my-14">
					<h2 class="ml-5 text-2xl font-bold">Examples</h2>
					<ToastExample />
				</div>
				<div class="my-14">
					<h2 class="ml-5 mr-5 mb-4 text-2xl font-bold">Change Position</h2>
					<ToasterExample
						onReverse={(r) => (reverse = r)}
						{reverse}
						{position}
						onPosition={(pos) => (position = pos)}
					/>
				</div>
			</div>
		</div>
	</header>
	<Toaster {position} reverseOrder={reverse} toastOptions={{}} />
	<div class="container flex justify-end -mt-10 pointer-events-none">
		<Butter_2 class="transform translate-x-20" />
	</div>
	<Footer noBadge />
</div>
