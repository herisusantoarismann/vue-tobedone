<template>
  <div class="min-h-screen w-screen bg-secondary">
    <Header />
    <div class="p-4 md:px-24 lg:px-40 xl:px-96 flex justify-between">
      <h2 class="font-semibold text-lg lg:text-xl">Activity</h2>
      <ButtonAdd />
    </div>
    <img
      :src="require('../assets/activity-empty-state.png')"
      alt="empty-state-img"
      class="mt-12 md:w-2/4 md:mx-auto xl:w-1/4"
    />
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import ButtonAdd from "../components/ButtonAdd.vue";

export default {
  name: "DashboardPage",
  components: {
    Header,
    ButtonAdd,
  },
};
</script>

<style></style>
