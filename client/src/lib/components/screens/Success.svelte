<script lang="ts">
	import { testnet } from "$lib/utils/stores";
	import CheckCircle from "../icons/CheckCircle.svelte";
</script>

<CheckCircle class="max-w-full text-success"/>
<div class="lgText mb-4 text-center text-success">
	Successfully sent {$testnet.currency}s to your address.
</div>

<!-- {#if false && $testnet.explorer}
		<Button 
			href={`${$testnet.explorer}/extrinsic/${hash}`}
			data-testid="success-button"
			target="_blank"
			rel="noreferrer">
				See transaction details
		</Button>
{/if} -->
