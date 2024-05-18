<script>
    import { onMount } from 'svelte';
    import EmployeeTable from '../organisms/EmployeeTable.svelte';
    import NewEmployeeForm from '../organisms/NewEmployeeForm.svelte';
    import { fetchEmployees } from '../../api.js';

    let employees = [];

    onMount(async () => {
        employees = await fetchEmployees();
    });
</script>

<div>
    <h1 class="text-2xl font-bold mb-4">Employee List</h1>
    <EmployeeTable {employees} />
    <h2 class="text-xl font-bold mt-8 mb-4">Create New Employee</h2>
    <NewEmployeeForm />
</div>

