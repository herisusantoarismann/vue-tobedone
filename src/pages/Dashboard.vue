<template>
  <div class="min-h-screen w-screen bg-secondary">
    <Header />
    <div class="p-4 md:px-24 lg:px-40 xl:px-96 flex justify-between">
      <h2 class="font-semibold text-lg lg:text-xl">Activity</h2>
      <ButtonAdd />
    </div>
    <img
      v-if="datas.length === 0"
      :src="require('../assets/activity-empty-state.png')"
      alt="empty-state-img"
      class="mt-12 md:w-2/4 md:mx-auto xl:w-1/4"
    />
    <div
      v-else
      class="p-4 md:px-24 lg:px-40 xl:px-96 flex flex-wrap justify-center md:justify-start gap-6 md:gap-8"
    >
      <div
        v-for="(data, index) in datas"
        :key="index"
        class="p-4 max-w-[14rem] lg:max-w-[13rem] bg-white flex justify-between flex-col gap-24 rounded-md shadow-md transition duration-150 cursor-pointer hover:shadow-lg"
      >
        <p class="font-bold text-xl">{{ data.name }}</p>
        <div class="flex items-center justify-between">
          <p class="text-sm text-gray-400">{{ data.date }}</p>
          <font-awesome-icon
            icon="fa-solid fa-trash-can"
            class="text-sm text-gray-400 cursor-pointer transition duration-150 hover:text-red-600"
          />
        </div>
      </div>
    </div>
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
  data() {
    return {
      datas: [
        {
          name: "Daftar Belanja Bulanan",
          date: "5 Oktober 2021",
        },
        {
          name: "Daftar Belanja Bulanan",
          date: "5 Oktober 2021",
        },
        {
          name: "Daftar Belanja Bulanan",
          date: "5 Oktober 2021",
        },
      ],
    };
  },
};
</script>

<style></style>
