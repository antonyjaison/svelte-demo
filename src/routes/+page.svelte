<script type="ts">
    import { goto } from "$app/navigation";
    import { user } from "../store";

    $effect(() => {
        if (!$user.name) {
            goto("/login", { replaceState: true });
        }
    });
</script>


{#if $user.name}
    <p class="container">Welcome, {$user.name}</p>
    <p class="container">This is a protected route, only authenticated users can see this.</p>
{/if}

