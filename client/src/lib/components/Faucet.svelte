<script lang="ts">
  import { Card } from "@frequency-chain/style-guide"
  import Form from "$lib/components/Form.svelte";
  import SocialTags from "$lib/components/SocialTags.svelte";
  import Error from "$lib/components/screens/Error.svelte";
  import FrequentlyAskedQuestions from "$lib/components/screens/FrequentlyAskedQuestions.svelte";
  import Success from "$lib/components/screens/Success.svelte";
  import type { NetworkData } from "$lib/utils/networkData";
  import { operation, testnet } from "$lib/utils/stores";
  import { onMount } from "svelte";
  import { fly } from "svelte/transition";
  import MarkUp from "./MarkUp.svelte";

  export let faq: string;
  export let network: NetworkData;

  let parachain: number;
  onMount(() => {
    const urlParams = new URLSearchParams(window.location.search);

    const parachainQuery = urlParams.get("parachain") ?? "-1";
    parachain = parseInt(parachainQuery);
    testnet.set(network);
  });
</script>

<main class="mt-9 px-9 md:px-f64 lg:px-0">
  <SocialTags />
  <MarkUp {faq} />
  <div class="flex items-center justify-center mt-16 mb-4 md:my-16">
    <Card title="" icon="" bgColor="cream"
      class="w-full md:w-2/3 lg:w-1/2 px-f12 py-f24 md:px-f56 md:py-f64 lg:px-f64 lg:py-f96 shadow-xl"
      >
      <div slot="content" class="items-center text-center px-f16">
        <h3 class="title-h3 text-navy">{$testnet.networkName} Faucet</h3>
        <p class="text-normal">
          Get {$testnet.currency} tokens for {$testnet.networkName} testnet.
        </p>
        <div class="mt-2 md:mt-8 w-full">
          {#if !$operation}
            <Form />
          {:else}
            <div in:fly={{ y: 30, duration: 500 }}>
              {#if $operation.success}
                <Success hash={$operation.hash} />
              {:else}
                <Error error={$operation.error} />
              {/if}
            </div>
          {/if}
        </div>
      </div>
    </Card>
  </div>
  <FrequentlyAskedQuestions {faq} />
</main>
