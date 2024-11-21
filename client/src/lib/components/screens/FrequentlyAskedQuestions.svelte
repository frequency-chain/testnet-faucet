<script lang="ts">
	import SvelteMarkdown from "svelte-markdown";

	export let faq: string;
</script>

<div class="flex items-center justify-center my-2 md:my-f16">
	<div class="md:w-2/3 w-5/6 mt-2 md:mt-f20">
		<div class=" items-center text-center">
			<h3 id="faq" class="title-h3 text-navy">Frequently Asked Questions</h3>
			<div
				class="mt-2 md:mt-8 w-full text-left prose lg:prose-xl prose-headings:text-xl prose-headings:text-navy prose-headings:font-bold prose-p:text-opacity-90"
			>
				<SvelteMarkdown source={faq} />
			</div>
		</div>
	</div>
</div>
