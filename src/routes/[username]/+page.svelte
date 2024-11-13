<script lang="ts">
	import type { PageData } from "../$types";

	let { data }: { data: PageData } = $props();

    console.log(data)
</script>


<div class="container wrapper py-10">
	<div class=" ">
		<h1 class=" text-3xl">{data?.title}</h1>
		<p>{data?.content}</p>
	</div>
</div>

