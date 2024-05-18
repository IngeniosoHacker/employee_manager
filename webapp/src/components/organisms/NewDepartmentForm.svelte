<script>
    let codigo = '';
    let nombre = '';
    let descripcion = '';

    const handleSubmit = async (event) => {
        event.preventDefault();
        const response = await fetch('http://localhost:3000/api/departments/newdep', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ codigo, nombre, descripcion })
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
    <input type="text" placeholder="Nombre" bind:value={nombre} class="p-2 border rounded" required />
    <textarea placeholder="Descripción" bind:value={descripcion} class="p-2 border rounded"></textarea>
    <button type="submit" class="p-2 bg-blue-500 text-white rounded">Crear Departamento</button>
</form>

