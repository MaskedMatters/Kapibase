<script lang="ts">
    import Sidebar from './Sidebar.svelte';
    import Navbar from './Navbar.svelte';

    import { onMount } from 'svelte';
    import { goto } from '$app/navigation';

    import { auth } from '$lib/firebase';
    import { onAuthStateChanged } from 'firebase/auth';

    let { children } = $props();

    onMount(() => {
        onAuthStateChanged(auth, (user) => {
            if (!user) {
                goto("/");
            }
        })
    });
</script>

<div class="flex h-screen">
    <!-- THIS SIDEBAR IS SO BIG I MOVED TO COMPONENT -->
    <Sidebar />

    <!-- MAIN SECTION -->
    <div class="flex flex-col flex-1">
        <!-- NAVBAR PRETTY BIG TOO -->
        <Navbar />

        <div class="p-8">
            {@render children?.()}
        </div>
    </div>

</div>