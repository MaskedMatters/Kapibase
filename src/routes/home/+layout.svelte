<script lang="ts">
    import { page } from '$app/state';
    import Sidebar from './Sidebar.svelte';

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

    <!-- NAVBAR -->
    <div class="flex flex-col flex-1">
        <div class="navbar bg-base-100 w-full border-b border-gray-200">
            <div class="flex-1">
                {#if page.url.pathname == "/home"}
                    <span class="text-xl font-bold pl-4">Home</span>
                {:else if page.url.pathname == "/home/tools"}
                    <span class="text-xl font-bold pl-4">Tools</span>
                {:else if page.url.pathname == "/home/events"}
                    <span class="text-xl font-bold pl-4">Events</span>
                {:else if page.url.pathname == "/home/groups"}
                    <span class="text-xl font-bold pl-4">Groups</span>
                {/if}
            </div>
        </div>

        <div class="p-8">
            {@render children?.()}
        </div>
    </div>

</div>