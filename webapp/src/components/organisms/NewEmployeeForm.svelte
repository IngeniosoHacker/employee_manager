<script>
    let codigo = '';
    let nombres = '';
    let apellidos = '';
    let fechaNacimiento = '';
    let departamentoId = '';

    const handleSubmit = async (event) => {
        event.preventDefault();
        const response = await fetch('http://localhost:3000/api/employees/saveemp', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ codigo, nombres, apellidos, fechaNacimiento, departamentoId })
        });
        if (response.ok) {
            // Handle successful submission, e.g., clear form or show a success message
        } else {
            // Handle error
        }
    };
</script>

<form on:submit={handleSubmit} class="flex flex-col space-y-4">
    <input type="text" placeholder="Código" bind:value={codigo} class="p-2 border rounded" required />
    <input type="text" placeholder="Nombres" bind:value={nombres} class="p-2 border rounded" required />
    <input type="text" placeholder="Apellidos" bind:value={apellidos} class="p-2 border rounded" required />
    <input type="date" placeholder="Fecha de Nacimiento" bind:value={fechaNacimiento} class="p-2 border rounded" required />
    <input type="text" placeholder="Departamento ID" bind:value={departamentoId} class="p-2 border rounded" required />
    <button type="submit" class="p-2 bg-blue-500 text-white rounded">Crear Empleado</button>
</form>

