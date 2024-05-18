<script>
    export let employees = [];
</script>

<table class="min-w-full bg-white border">
    <thead>
        <tr>
            <th class="py-2 px-4 border-b">ID</th>
            <th class="py-2 px-4 border-b">Name</th>
            <th class="py-2 px-4 border-b">Department</th>
        </tr>
    </thead>
    <tbody>
        {#each employees as employee}
            <tr>
                <td class="py-2 px-4 border-b">{employee.id}</td>
                <td class="py-2 px-4 border-b">{employee.nombres} {employee.apellidos}</td>
                <td class="py-2 px-4 border-b">{employee.department}</td>
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

