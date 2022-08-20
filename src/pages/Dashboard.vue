<template>
  <div class="min-h-screen w-screen bg-secondary">
    <div
      class="bg-primary px-4 md:px-24 lg:px-40 xl:px-96 py-3 lg:py-4 text-white uppercase font-semibold"
    >
      <h1 class="text-xl">To Do List App</h1>
    </div>
    <div class="p-4 md:px-24 lg:px-40 xl:px-96 flex justify-between">
      <h2 class="font-semibold text-lg lg:text-xl">Activity</h2>
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
    </div>
    <img
      :src="require('../assets/activity-empty-state.png')"
      alt="empty-state-img"
      class="mt-12 md:w-2/4 md:mx-auto xl:w-1/4"
    />
  </div>
</template>

<script>
export default {
  name: "DashboardPage",
};
</script>

<style></style>
