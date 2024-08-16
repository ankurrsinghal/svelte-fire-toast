<script>
	import './page.css';
	import Checkmark from '$lib/components/checkmark-icon.svelte';
	import Error from '$lib/components/error-icon.svelte';
	import LoaderIcon from '$lib/components/loader-icon.svelte';
	import Toaster from '$lib/components/toaster.svelte';
	import { toast } from '$lib/core/toast';

	function makeToast() {
		const promise = new Promise((res, rej) => {
			if (Math.random() < 0.85) {
				setTimeout(res, 10000000);
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
					'padding-right': '10px'
				}
			}
		);
	}
</script>

<Toaster />
<button on:click={makeToast}>Create toast</button>
