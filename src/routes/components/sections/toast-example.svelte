<script lang="ts">
	import { toast } from '$lib/core/toast.js';
	import Code from '../code.svelte';
	import EmojiButton from '../emoji-button.svelte';

	const examples: Array<{
		title: string;
		action: () => void;
		emoji: string;
		snippet: string;
	}> = [
		{
			title: 'Success',
			emoji: '✅',
			snippet: "toast.success('Successfully toasted!')",
			action: () => {
				toast.success('Successfully toasted!');
			}
		},
		{
			title: 'Error',
			emoji: '❌',
			snippet: `toast.error("This didn't work.")`,

			action: () => {
				toast.error("This didn't work.");
			}
		},
		{
			title: 'Promise',
			emoji: '⏳',
			snippet: `toast.promise(
  saveSettings(settings),
   {
     loading: 'Saving...',
     success: <b>Settings saved!</b>,
     error: <b>Could not save.</b>,
   }
 );`,
			action: () => {
				const promise = new Promise((res, rej) => {
					setTimeout(Math.random() > 0.5 ? res : rej, 1000);
				});

				toast.promise(
					promise,
					{
						loading: 'Saving...',
						success: '<b>Settings saved!</b>',
						error: '<b>Could not save.</b>'
					},
					{
						style: {
							width: '200px',
							paddingRight: '10px'
						}
					}
				);
			}
		},
		{
			title: 'Multi Line',
			emoji: '↕️',
			snippet: `toast(
  "This toast is super big. I don't think anyone could eat it in one bite.\\n\\nIt's larger than you expected. You eat it but it does not seem to get smaller.",
  {
    duration: 6000,
  }
);`,
			action: () => {
				toast(
					"This toast is super big. I don't think anyone could eat it in one bite.\n\n It's larger than you expected. You eat it but it does not seem to get smaller.",
					{
						duration: 6000
					}
				);
			}
		},
		{
			title: 'Emoji',
			emoji: '👏',
			snippet: `toast('Good Job!', {
  icon: '👏',
});`,
			action: () => {
				toast('Good Job!', {
					icon: '👏'
				});
			}
		},
		{
			title: 'Dark Mode',
			emoji: '🌚',
			snippet: `toast('Hello Darkness!',
  {
    icon: '👏',
    style: {
      borderRadius: '10px',
      background: '#333',
      color: '#fff',
    },
  }
);`,
			action: () => {
				toast('Hello Darkness!', {
					icon: '👏',

					style: {
						borderRadius: '200px',
						background: '#333',
						color: '#fff'
					}
				});
			}
		},
		{
			title: 'Themed',
			emoji: '🎨',
			snippet: `toast.success('Look at my styles.', {
  style: {
    border: '1px solid #713200',
    padding: '16px',
    color: '#713200',
  },
  iconTheme: {
    primary: '#713200',
    secondary: '#FFFAEE',
  },
});`,

			action: () => {
				toast.success('Look at my styles.', {
					style: {
						border: '1px solid #713200',
						padding: '16px',
						color: '#713200'
					},
					iconTheme: {
						primary: '#713200',
						secondary: '#FFFAEE'
					}
				});
			}
		},
		{
			title: 'Custom Position',
			emoji: '⬆️',
			snippet: `toast.success('Always at the bottom.', {
  position: "bottom-center"
})`,
			action: () => {
				toast.success('Always at the bottom.', {
					position: 'bottom-center',
					duration: 10000
				});
			}
		}
	];

	let snippet = examples[0].snippet;
</script>

<section class="grid md:grid-cols-2 gap-4">
	<div class="flex items-center">
		<div class="w-full grid grid-cols-2 gap-2 bg-toast-100 rounded-xl p-4">
			{#each examples as e (e.title)}
				<EmojiButton
					emoji={e.emoji}
					on:click={() => {
						if (e.snippet) {
							snippet = e.snippet;
						}
						e.action();
					}}
				>
					{e.title}
				</EmojiButton>
			{/each}
		</div>
	</div>
	<div class="md:h-72 w-full overflow-auto rounded-lg">
		<!-- <Code {snippet} class="!h-auto min-h-full" /> -->
	</div>
</section>
