<template>
  <div class="min-h-screen w-screen bg-secondary">
    <Header />
    <div class="p-4 md:px-24 lg:px-40 xl:px-96 flex justify-between">
      <div class="flex gap-2 xl:gap-3 items-center">
        <font-awesome-icon
          icon="fa-solid fa-angle-left"
          class="cursor-pointer xl:text-lg hover:animate-bounce-left"
        />
        <input
          class="bg-secondary w-24 xl:w-28 xl:text-lg outline-none border-none"
          type="text"
          :value="name"
        />
        <font-awesome-icon
          icon="fa-solid fa-pencil"
          class="text-gray-400 text-xs cursor-pointer transition duration-150 hover:text-black"
        />
      </div>
      <ButtonAdd />
    </div>
    <img
      :src="require('../assets/todo-empty-state.png')"
      alt="empty-state-img"
      class="mt-12 md:w-2/4 md:mx-auto xl:w-1/4"
    />
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import ButtonAdd from "../components/ButtonAdd.vue";

export default {
  name: "ItemListPage",
  components: {
    Header,
    ButtonAdd,
  },
  data() {
    return {
      name: "New Activity",
    };
  },
};
</script>

<style></style>
