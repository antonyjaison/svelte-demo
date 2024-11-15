<script lang="ts">
	import type { PageData } from "./$types";
	let { data }: { data: PageData } = $props();
	import { user } from "../../../store";
</script>


<div class="container wrapper py-10">
	<a href="/">Home</a>
	<div class=" ">
		{#if $user.username}
			<p>{$user.username}, {$user.name}</p>
		{/if}
		<h1 class=" text-3xl">{data?.title}</h1>
		<p>{data?.content}</p>
	</div>
</div>

