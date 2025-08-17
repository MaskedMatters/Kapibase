<script lang="ts">
    import { goto } from '$app/navigation';
    import { page } from '$app/state';
    
    import { auth } from '$lib/firebase';
    import { onAuthStateChanged, type User } from 'firebase/auth';
    import { onMount } from 'svelte';

    let user: User | null = $state(null);

    async function signOutUser() {
        try {
            await auth.signOut();
            goto("/");
        } catch (error) {
            console.error("Error signing out:", error);
        }
    }

    onMount(() => {
        onAuthStateChanged(auth, (currentUser) => {
            user = currentUser;
        });
    });
</script>

<nav class="h-screen w-72 bg-gray-50 border-r border-gray-200 p-6 flex flex-col gap-4">
    <h1 class="text-xl font-bold text-gray-800 text-center">Kapibase Dashboard</h1>
    <div class="border-b border-gray-200"></div>
    <ul class="menu bg-base-200 rounded-box w-full">
        <li>
            <a href="/dashboard/tools">
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#434343"><path d="m352-522 86-87-56-57-44 44-56-56 43-44-45-45-87 87 159 158Zm328 329 87-87-45-45-44 43-56-56 43-44-57-56-86 86 158 159Zm24-567 57 57-57-57ZM290-120H120v-170l175-175L80-680l200-200 216 216 151-152q12-12 27-18t31-6q16 0 31 6t27 18l53 54q12 12 18 27t6 31q0 16-6 30.5T816-647L665-495l215 215L680-80 465-295 290-120Zm-90-80h56l392-391-57-57-391 392v56Zm420-419-29-29 57 57-28-28Z"/></svg>
                <span class="{page.url.pathname.startsWith("/dashboard/tools") ? "font-bold" : ""}">My Tools</span>
            </a>
        </li>
        <li>
            <a href="/dashboard/home">
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#434343"><path d="M120-840h320v320H120v-320Zm80 80v160-160Zm320-80h320v320H520v-320Zm80 80v160-160ZM120-440h320v320H120v-320Zm80 80v160-160Zm440-80h80v120h120v80H720v120h-80v-120H520v-80h120v-120Zm-40-320v160h160v-160H600Zm-400 0v160h160v-160H200Zm0 400v160h160v-160H200Z"/></svg>
                <span class="{page.url.pathname.startsWith("/dashboard/home") ? "font-bold" : ""}">Home</span>
            </a>
        </li>
        <li>
            <a href="/dashboard/events">
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#434343"><path d="M438-226 296-368l58-58 84 84 168-168 58 58-226 226ZM200-80q-33 0-56.5-23.5T120-160v-560q0-33 23.5-56.5T200-800h40v-80h80v80h320v-80h80v80h40q33 0 56.5 23.5T840-720v560q0 33-23.5 56.5T760-80H200Zm0-80h560v-400H200v400Zm0-480h560v-80H200v80Zm0 0v-80 80Z"/></svg>
                <span class="{page.url.pathname.startsWith("/dashboard/events") ? "font-bold" : ""}">Events</span>
            </a>
        </li>
        <li>
            <a href="/dashboard/groups">
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#434343"><path d="M40-160v-112q0-34 17.5-62.5T104-378q62-31 126-46.5T360-440q66 0 130 15.5T616-378q29 15 46.5 43.5T680-272v112H40Zm720 0v-120q0-44-24.5-84.5T666-434q51 6 96 20.5t84 35.5q36 20 55 44.5t19 53.5v120H760ZM360-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47Zm400-160q0 66-47 113t-113 47q-11 0-28-2.5t-28-5.5q27-32 41.5-71t14.5-81q0-42-14.5-81T544-792q14-5 28-6.5t28-1.5q66 0 113 47t47 113ZM120-240h480v-32q0-11-5.5-20T580-306q-54-27-109-40.5T360-360q-56 0-111 13.5T140-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T440-640q0-33-23.5-56.5T360-720q-33 0-56.5 23.5T280-640q0 33 23.5 56.5T360-560Zm0 320Zm0-400Z"/></svg>
                <span class="{page.url.pathname.startsWith("/dashboard/groups") ? "font-bold" : ""}">Groups</span>
            </a>
        </li>
        <li>
            <button onclick={() => (document.getElementById('IDModal') as HTMLDialogElement)?.showModal()}>
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#434343"><path d="M560-440h200v-80H560v80Zm0-120h200v-80H560v80ZM200-320h320v-22q0-45-44-71.5T360-440q-72 0-116 26.5T200-342v22Zm160-160q33 0 56.5-23.5T440-560q0-33-23.5-56.5T360-640q-33 0-56.5 23.5T280-560q0 33 23.5 56.5T360-480ZM160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm0-80h640v-480H160v480Zm0 0v-480 480Z"/></svg>
                <span>View ID</span>
            </button>
        </li>
        <li>
            <button>
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#434343"><path d="M480-280q17 0 28.5-11.5T520-320q0-17-11.5-28.5T480-360q-17 0-28.5 11.5T440-320q0 17 11.5 28.5T480-280Zm0-160q17 0 28.5-11.5T520-480q0-17-11.5-28.5T480-520q-17 0-28.5 11.5T440-480q0 17 11.5 28.5T480-440Zm0-160q17 0 28.5-11.5T520-640q0-17-11.5-28.5T480-680q-17 0-28.5 11.5T440-640q0 17 11.5 28.5T480-600Zm320 440H160q-33 0-56.5-23.5T80-240v-160q33 0 56.5-23.5T160-480q0-33-23.5-56.5T80-560v-160q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v160q-33 0-56.5 23.5T800-480q0 33 23.5 56.5T880-400v160q0 33-23.5 56.5T800-160Zm0-80v-102q-37-22-58.5-58.5T720-480q0-43 21.5-79.5T800-618v-102H160v102q37 22 58.5 58.5T240-480q0 43-21.5 79.5T160-342v102h640ZM480-480Z"/></svg>
                <span>Create Hall Pass</span>
            </button>
        </li>
    </ul>

    <div class="mt-auto flex flex-col gap-2">
        <div class="border-b border-gray-200"></div>
        <a class="btn btn-primary w-full" href="/help">Help Center</a>
        <button class="btn btn-soft flex justify-between w-full">
            <div class="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#434343"><path d="M720-120H280v-520l280-280 50 50q7 7 11.5 19t4.5 23v14l-44 174h258q32 0 56 24t24 56v80q0 7-2 15t-4 15L794-168q-9 20-30 34t-44 14Zm-360-80h360l120-280v-80H480l54-220-174 174v406Zm0-406v406-406Zm-80-34v80H160v360h120v80H80v-520h200Z"/></svg>
                <span class="font-medium text-gray-700">Like</span>
            </div>
            <span class="font-bold text-gray-700">42</span>
        </button>
        <div class="flex gap-2">
            <button class="btn btn-ghost flex-1" aria-label="About Kapibase button" onclick={() => (document.getElementById('OrgModal') as HTMLDialogElement)?.showModal()}><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#434343"><path d="M440-280h80v-240h-80v240Zm40-320q17 0 28.5-11.5T520-640q0-17-11.5-28.5T480-680q-17 0-28.5 11.5T440-640q0 17 11.5 28.5T480-600Zm0 520q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg></button>
            <button class="btn btn-ghost flex-1" aria-label="Logout of Kapibase button" onclick={signOutUser}><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#434343"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h280v80H200Zm440-160-55-58 102-102H360v-80h327L585-622l55-58 200 200-200 200Z"/></svg></button>
        </div>
    </div>
</nav>

<dialog id="IDModal" class="modal">
    <div class="modal-box">
        <form method="dialog">
            <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
        </form>
        <h3 class="text-lg font-bold text-center">{user?.displayName}</h3>
        <p class="py-4">This is your ID! Doesn't this modal look so nice. Anyways, your UID is: {user?.uid}</p>
    </div>
</dialog>

<dialog id="OrgModal" class="modal">
    <div class="modal-box max-w-4xl">
        <form method="dialog">
            <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
        </form>
        <h2 class="text-xl font-bold text-center pb-2">Your Organization</h2>
        <div class="flex justify-around items-center">
            <div class="flex flex-col items-center gap-2 border-r border-gray-200 w-full">
                <h3 class="text-lg">Join Organization</h3>
                <fieldset class="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                    <legend class="fieldset-legend">Org. ID</legend>
                    <div class="join">
                        <input type="text" class="input join-item" placeholder="ex. 012ab3" />
                        <button class="btn join-item">Join</button>
                    </div>
                </fieldset>
                <p class="text-sm text-center">Joining an organization will give you the member role to participate in forms and be managed.</p>
            </div>
            <div class="flex flex-col items-center gap-2 border-l border-gray-200 w-full">
                <h3 class="text-lg">Create Organization</h3>
                <fieldset class="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                    <legend class="fieldset-legend">Org. Name</legend>
                    <div class="join">
                        <input type="text" class="input join-item" placeholder="ex. The Yay Company" />
                        <button class="btn join-item">Make</button>
                    </div>
                </fieldset>
                <p class="text-sm text-center">Creating an organization will make you a cool VIP account administrator with full permissions.</p>
            </div>
        </div>
    </div>
</dialog>