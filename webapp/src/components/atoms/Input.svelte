<script>
    export let type = "text";
    export let value = "";
    export let onInput = () => {};
</script>

<input type={type} value={value} on:input={onInput} class="border border-gray-300 px-4 py-2 rounded w-full" />

