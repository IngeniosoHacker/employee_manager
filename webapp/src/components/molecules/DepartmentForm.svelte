<script>
    import Input from '../atoms/Input.svelte';
    import Label from '../atoms/Label.svelte';

    export let departmentName = "";
    export let onDepartmentNameChange = () => {};
</script>

<div class="space-y-4">
    <div>
        <Label forId="departmentName">Department Name</Label>
        <Input id="departmentName" type="text" value={departmentName} on:input={onDepartmentNameChange} />
    </div>
</div>

