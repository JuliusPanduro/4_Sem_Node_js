<script>
    export let label
    export let value
</script>


<div class="relative mb-4">
    <label for={label} class="leading-7 text-sm text-gray-400">{label}</label>
    <input bind:value id={label} name={label} {...$$restProps} 
        class="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-blue-900 rounded border border-gray-600 focus:border-blue-500 text-base outline-none text-black-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
  </div>