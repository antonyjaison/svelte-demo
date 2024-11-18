<script lang="ts">
    import { user } from "../../store";
    import { goto } from "$app/navigation";

    $effect(() => {
        if (!$user.name) {
            goto("/login", { replaceState: true });
        }
    });

</script>

<main>
    <p>this is a simple page</p>
</main>