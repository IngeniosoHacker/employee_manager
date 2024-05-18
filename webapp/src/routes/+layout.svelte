<script>
    import Navbar from './navbar/+page.svelte';
    import ListEmployees from './listemployees/+page.svelte';
    import DepartmentList from './departments/+page.svelte';
    import "../app.css"; 
    import { onMount } from 'svelte';

    let currentRoute = 'employees'; // Default route

    onMount(() => {
        if (typeof window !== 'undefined') {
            const handleRouteChange = (event) => {
                currentRoute = event.detail.route;
            };

            window.addEventListener('routechange', handleRouteChange);

            return () => {
                window.removeEventListener('routechange', handleRouteChange);
            };
        }
    });

    function navigate(route) {
        if (typeof window !== 'undefined') {
            const event = new CustomEvent('routechange', { detail: { route } });
            window.dispatchEvent(event);
        }
    }
</script>

<div class="flex flex-col min-h-screen">
    <nav class="bg-gray-800">
        <Navbar on:routechange={(e) => navigate(e.detail.route)} />
    </nav>
    <main class="flex-grow flex flex-col p-4 max-w-4xl mx-auto">
        <slot />
        {#if currentRoute === 'employees'}
            <ListEmployees />
        {:else if currentRoute === 'departments'}
            <DepartmentList />
        {/if}
    </main>
    <footer class="flex flex-col justify-center items-center py-3">
        <!-- footer here -->
    </footer>
</div>

