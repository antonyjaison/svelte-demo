<script type="ts">
    import { goto } from "$app/navigation";

    $effect(() => {
        goto("/login", { replaceState: true });
    });
</script>

