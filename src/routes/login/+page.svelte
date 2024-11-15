<script lang="ts">
	import Button from '$lib/components/ui/button/button.svelte';
	import { Input } from '$lib/components/ui/input';
	import { Label } from '$lib/components/ui/label';
	import { cn } from '$lib/utils';
	import { goto } from '$app/navigation';

	type FormType = {
		username: string;
		password: string;
	};

	type AuthType = {
		name: string;
		icon: string;
	};

	let { username, password }: FormType = $state({
		username: '',
		password: ''
	});

	let error: string = $state('');

	let authProviders: AuthType[] = [
		{
			name: 'Google',
			icon: '/icons/google.svg'
		},
		{
			name: 'Facebook',
			icon: '/icons/fb.svg'
		},
		{
			name: 'Apple',
			icon: '/icons/apple.svg'
		}
	];

	function onsubmit() {
		if (username === '' || password === '') {
			error = 'Please fill in all fields';
			return;
		}

		if (username === 'john1999' && password === '123456') {
			error = '';
			console.log('Logged in');
			user.set({ username, name: 'John Doe' });
			goto("user/" + username , { replaceState: true });
		} else {
			error = 'Invalid username or password';
		}
	}

	// $effect(() => {
	// 	goto('/user/hello');
	// });
</script>

<main class="container flex h-screen w-full items-center justify-center">
	<form {onsubmit} class=" w-full rounded-lg border px-5 py-5 shadow-md lg:w-80">
		<h2 class=" text-4xl">Log in</h2>
		<div class=" mt-6 flex flex-col gap-4">
			<div>
				<Label for="username">Username</Label>
				<Input
					bind:value={username}
					type="text"
					placeholder=""
					class={cn('border-2 outline-none focus:outline-none', {
						'border-red-300': error && username === ''
					})}
				/>
			</div>

			<div>
				<Label for="password">Password</Label>
				<Input
					bind:value={password}
					type="password"
					placeholder=""
					class={cn('border-2 outline-none focus:outline-none', {
						'border-red-300': error && password === ''
					})}
				/>
				<a href="/" class=" text-xs text-gray-500 underline"> Forgot password? </a>
			</div>

			{#if error}
				<p class="text-sm text-red-500">{error}</p>
			{/if}

			<Button type="submit">Login</Button>

			<Label class="text-center text-gray-500 ">Or</Label>
			<div class=" flex items-center justify-center gap-2">
				{#each authProviders as provider}
					<div
						class="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border-2 p-1"
					>
						<img class="h-6 w-6 object-contain" src={provider.icon} alt={provider.name} />
					</div>
				{/each}
			</div>
		</div>
	</form>
</main>
