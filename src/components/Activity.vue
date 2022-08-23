<template>
  <p class="font-bold text-xl">{{ name }}</p>
  <div class="flex items-center justify-between">
    <p class="text-sm text-gray-400">{{ date }}</p>
    <font-awesome-icon
      icon="fa-solid fa-trash-can"
      class="text-sm text-gray-400 cursor-pointer transition duration-150 hover:text-red-600"
    />
  </div>
</template>

<script>
export default {
  name: "ActivityComponents",
  props: {
    name: String,
    date: String,
  },
};
</script>

<style></style>
