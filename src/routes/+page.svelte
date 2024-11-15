<script type="ts">
    import { goto } from "$app/navigation";
    import { user } from "../store";

    $effect(() => {
        if (!$user.name) {
            goto("/login", { replaceState: true });
        }
    });
</script>

