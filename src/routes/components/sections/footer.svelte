<script lang="ts">
	export let noBadge: Boolean;
</script>

<footer class="container relative justify-center my-8 flex flex-col items-center space-y-4">
	<div class="flex space-x-4">
		<a class="underline" href="https://github.com/timolins/react-hot-toast"> GitHub </a>
		<a href="/docs">
			<span class="underline">Docs</span>
		</a>
		<a class="underline" href="https://twitter.com/timolins"> Twitter </a>
	</div>
	<div class="text-toast-600">
		<span>© {new Date().getFullYear()} react-hot-toast</span>
		{' · '}
		<span>
			<span>Built by </span>
			<a class="underline" href="https://timo.sh"> Timo Lins </a>
		</span>
	</div>
	{#if !noBadge}
		<div>
			<a
				href="https://splitbee.io/?ref=rht"
				data-splitbee-event="Click Splitbee Analytics"
				data-splitbee-event-location="Footer"
			>
				<img
					src="https://splitbee-cdn.fra1.cdn.digitaloceanspaces.com/static/badge/splitbee-badge.svg"
					alt="Analytics by Splitbee.io"
				/>
			</a>
		</div>
	{/if}
</footer>
