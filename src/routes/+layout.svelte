<script lang="ts">
    import "../app.css";
    import { goto } from '$app/navigation';



    // function moveOn() {
    //     goto('login');
    // }
</script>

<div class="min-h-screen flex flex-col">
<!--    <button class="btn" on:click={moveOn}>Move on</button>-->
    <slot />
</div>
