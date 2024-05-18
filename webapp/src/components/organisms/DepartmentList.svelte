<script>
    import { onMount } from 'svelte';
    import DepartmentTable from '../organisms/DepartmentTable.svelte';
    import NewDepartmentForm from '../organisms/NewDepartmentForm.svelte';
    import { fetchDepartments } from '../../api.js';

    let departments = [];

    onMount(async () => {
        departments = await fetchDepartments();
    });
</script>

<div>
    <h1 class="text-2xl font-bold mb-4">Department List</h1>
    <DepartmentTable {departments} />
    <h2 class="text-xl font-bold mt-8 mb-4">Create New Department</h2>
    <NewDepartmentForm />
</div>

