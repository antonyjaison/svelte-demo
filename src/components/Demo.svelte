<script lang="ts">
	import { user } from '../store';
</script>

{#if $user.username}
	<p>{$user.username}, {$user.name}</p>
{/if}
