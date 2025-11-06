<script lang="ts">
	import '@hcaptcha/vanilla-hcaptcha';
	import Cross from "./icons/Cross.svelte";
	import { PUBLIC_CAPTCHA_KEY } from "$env/static/public";

	interface Props {
		onToken?: (token: string) => void;
	}

	const { onToken }: Props = $props();

	const siteKey = PUBLIC_CAPTCHA_KEY;
	let captchaError = $state(false);
	let captchaElement: HTMLElement | undefined = $state(undefined);

	$effect(() => {
		if (!captchaElement) return;

		const handleVerified = (e: Event) => {
			// The vanilla-hcaptcha event has token directly on the event object
			const token = (e as any).token || '';
			onToken?.(token);
			captchaError = false;
		};

		const handleError = () => {
			captchaError = true;
		};

		captchaElement.addEventListener('verified', handleVerified);
		captchaElement.addEventListener('error', handleError);

		return () => {
			captchaElement?.removeEventListener('verified', handleVerified);
			captchaElement?.removeEventListener('error', handleError);
		};
	});
</script>

<h-captcha
	bind:this={captchaElement}
	site-key={siteKey}
	theme="light"
	size="normal"
></h-captcha>

{#if captchaError}
	<div class="alert alert-error shadow-lg text-black" data-testid="error">
		<div>
			<Cross />
			<span>Error loading HCaptcha. Please reload the page.</span>
		</div>
	</div>
{/if}
