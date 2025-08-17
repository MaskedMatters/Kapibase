<script lang="ts">
    import { page } from '$app/state';
</script>

<div class="navbar bg-base-100 w-full border-b border-gray-200">
    <div class="flex-1">
        <div class="flex items-center gap-4">
            {#if page.url.pathname.startsWith("/dashboard/home")}
                <span class="text-xl font-bold pl-4">Home</span>
                <div role="tablist" class="tabs tabs-border">
                    <a role="tab" class="tab {page.url.pathname == '/dashboard/home' ? 'tab-active' : ''}" href="/dashboard/home">Feed</a>
                    <a role="tab" class="tab {page.url.pathname == '/dashboard/home/content' ? 'tab-active' : ''}" href="/dashboard/home/content">My Content</a>
                    <a role="tab" class="tab {page.url.pathname == '/dashboard/home/files' ? 'tab-active' : ''}" href="/dashboard/home/files">Files</a>
                </div>
            {:else if page.url.pathname.startsWith("/dashboard/tools")}
                <span class="text-xl font-bold pl-4">My Tools</span>
                <div role="tablist" class="tabs tabs-border">
                    <a role="tab" class="tab {page.url.pathname == '/dashboard/tools' ? 'tab-active' : ''}" href="/dashboard/tools">Dashboard</a>
                    <a role="tab" class="tab {page.url.pathname == '/dashboard/tools/schedule' ? 'tab-active' : ''}" href="/dashboard/tools/schedule">My Schedule</a>
                    <a role="tab" class="tab {page.url.pathname == '/dashboard/tools/points' ? 'tab-active' : ''}" href="/dashboard/tools/points">Points</a>
                    <a role="tab" class="tab {page.url.pathname == '/dashboard/tools/notifications' ? 'tab-active' : ''}" href="/dashboard/tools/notifications">Notifications</a>
                    <a role="tab" class="tab {page.url.pathname == '/dashboard/tools/behaviors' ? 'tab-active' : ''}" href="/dashboard/tools/behaviors">Behaviors</a>
                    <a role="tab" class="tab {page.url.pathname == '/dashboard/tools/preferences' ? 'tab-active' : ''}" href="/dashboard/tools/preferences">Preferences</a>
                </div>
            {:else if page.url.pathname.startsWith("/dashboard/events")}
                <span class="text-xl font-bold pl-4">Events</span>
            {:else if page.url.pathname.startsWith("/dashboard/groups")}
                <span class="text-xl font-bold pl-4">Groups</span>
            {/if}
        </div>
    </div>
</div>