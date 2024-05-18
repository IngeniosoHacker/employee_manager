<script>
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();

    function navigate(route) {
        dispatch('routechange', { route });
    }
</script>

<nav class="bg-gray-800 p-4">
    <ul class="flex space-x-4">
        <li><button on:click={() => navigate('employees')} class="text-white">Employees</button></li>
        <li><button on:click={() => navigate('departments')} class="text-white">Departments</button></li>
    </ul>
</nav>

