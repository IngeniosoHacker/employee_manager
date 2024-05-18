<script>
    import Input from '../atoms/Input.svelte';
    import Label from '../atoms/Label.svelte';

    export let name = "";
    export let position = "";
    export let onNameChange = () => {};
    export let onPositionChange = () => {};
</script>

<div class="space-y-4">
    <div>
        <Label forId="name">Name</Label>
        <Input id="name" type="text" value={name} on:input={onNameChange} />
    </div>
    <div>
        <Label forId="position">Position</Label>
        <Input id="position" type="text" value={position} on:input={onPositionChange} />
    </div>
</div>

