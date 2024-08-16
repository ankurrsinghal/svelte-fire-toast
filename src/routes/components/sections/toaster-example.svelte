<script lang="ts">
	import { toast } from '$lib/core/toast.js';
	import type { ToastPosition } from '$lib/core/types.js';
	import clsx from 'clsx';
	import EmojiButton from '../emoji-button.svelte';
	import Code from '../code.svelte';

	export let position: ToastPosition;
	export let onPosition: (pos: ToastPosition) => void;
	export let reverse: boolean;
	export let onReverse: (rev: boolean) => void;

	export const positions: Array<ToastPosition> = [
		'top-left',
		'top-center',
		'top-right',
		'bottom-left',
		'bottom-center',
		'bottom-right'
	];

	function reverseIt() {
		setTimeout(() => {
			toast('Notification 1', {
				icon: '1️⃣',
				id: 'reverse-1'
			});
		}, 10);

		setTimeout(
			() =>
				toast('Notification 2', {
					icon: '2️⃣',
					id: 'reverse-2'
				}),
			250
		);
		setTimeout(
			() =>
				toast('Notification 3', {
					icon: '3️⃣',
					id: 'reverse-3'
				}),
			500
		);
		setTimeout(
			() =>
				toast('Notification 4', {
					icon: '4️⃣',
					id: 'reverse-4'
				}),
			750
		);
		onReverse(!reverse);
	}
</script>

<section class="flex flex-col md:grid grid-cols-1 md:grid-cols-3 gap-2">
	<Code
		snippet={`<Toaster
  position="${position}"
  reverseOrder="${reverse}"
/>`}
	/>
	<div
		class="order-first md:order-none col-span-2 grid grid-cols-3 justify-between bg-toast-100 rounded-xl gap-x-2 gap-y-4 p-2 md:p-4"
	>
		{#each positions as p (p)}
			<button
				id="p"
				class={clsx(
					'rounded-xl text-center text-xs md:text-sm py-2 px- flex items-center justify-center cursor-pointer flex-col md:flex-row',
					position === p ? 'bg-toast-900 text-toast-100 ' : 'bg-white shadow-small-button'
				)}
				on:click={() => {
					// toast.success(
					//   <span>
					//     Position set to <b>{p}</b>
					//   </span>,
					//   {
					//     id: 'position',
					//   }
					// );

					onPosition(p);
				}}
			>
				<span class="mr-2">{p}</span>
			</button>
		{/each}
	</div>
	<div class="col-start-2 col-span-2 flex justify-center my-4">
		<EmojiButton
			emoji={(position.includes('bottom') && !reverse) || (position.includes('top') && reverse)
				? '⬆'
				: '⬇'}
			on:click={reverseIt}
		>
			Toggle Direction
		</EmojiButton>
	</div>
</section>
