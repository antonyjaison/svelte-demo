<script lang="ts">
	import type { PageData } from './$types';
	let { data }: { data: PageData } = $props();
	import { user } from '../../../store';
	import Button from '$lib/components/ui/button/button.svelte';
	import { goto } from '$app/navigation';

	const logout = () => {
		user.set({
			name:"",
			username:""
		})
		goto("/login", { replaceState: true });
	}

</script>

<div class="wrapper container py-10">
	<div class=" ">
		{#if $user.username}
			<p>{$user.username}, {$user.name}</p>
		{/if}
		<h1 class=" text-3xl">{data?.title}</h1>
		<p>{data?.content}</p>
		<Button on:click={logout}>
			Log out
		</Button>
	</div>

	<div class=" mt-10">
		<p>These are some protected routes.</p>
		<div>
			<a class=" underline" href="/">Home</a>
			<a class=" underline" href="/details">Details</a>
		</div>
	</div>
</div>
