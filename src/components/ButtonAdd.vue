<template>
  <font-awesome-icon
    icon="fa-solid fa-plus"
    class="md:hidden bg-primary p-2 text-white rounded-full cursor-pointer transition duration-150 hover:bg-blue-500"
  />
  <div
    class="hidden md:flex items-center gap-2 bg-primary text-white rounded-full py-1.5 px-4 cursor-pointer transition duration-150 hover:bg-blue-500"
  >
    <font-awesome-icon icon="fa-solid fa-plus" />
    <p>Tambah</p>
  </div>
</template>

<script>
export default {
  name: "ButtonAdd",
};
</script>

<style></style>
