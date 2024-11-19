<script lang="ts">
	import SvelteMarkdown from "svelte-markdown";

	export let faq: string;
</script>

<div class="flex items-center justify-center my-2 md:my-16">
	<div class="md:w-2/4 w-5/6 min-w-full mt-2 md:mt-20">
		<div class=" items-center text-center">
			<h1 id="faq" class="title-h3 text-navy">Frequently Asked Questions</h1>
			<div
				class="mt-2 md:mt-8 w-full text-left prose lg:prose-xl prose-headings:text-xl prose-headings:text-black prose-headings:font-bold prose-p:text-opacity-90"
			>
				<SvelteMarkdown source={faq} />
			</div>
		</div>
	</div>
</div>
