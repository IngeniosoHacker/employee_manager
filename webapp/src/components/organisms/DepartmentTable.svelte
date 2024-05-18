<script>
    export let departments = [];
</script>

<table class="min-w-full bg-white border">
    <thead>
        <tr>
            <th class="py-2 px-4 border-b">ID</th>
            <th class="py-2 px-4 border-b">Department Name</th>
            <th class="py-2 px-4 border-b">Number of Employees</th>
        </tr>
    </thead>
    <tbody>
        {#each departments as department}
            <tr>
                <td class="py-2 px-4 border-b">{department.id}</td>
                <td class="py-2 px-4 border-b">{department.nombre}</td>
                <td class="py-2 px-4 border-b">{department.num_employees}</td>
            </tr>
        {/each}
    </tbody>
</table>

<style>
    table {
        width: 100%;
        border-collapse: collapse;
    }
    th, td {
        text-align: left;
        padding: 8px;
    }
    th {
        background-color: #f2f2f2;
    }
</style>

