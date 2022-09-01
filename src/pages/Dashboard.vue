<template>
  <div class="min-h-screen w-screen bg-secondary">
    <Header />
    <div class="p-4 md:px-24 lg:px-40 xl:px-96 flex justify-between">
      <h2 class="font-semibold text-lg lg:text-xl">Activity</h2>
      <div @click="addNewActivity">
        <ButtonAdd />
      </div>
    </div>
    <img
      v-if="datas === null"
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
        class="p-4 w-48 max-w-[14rem] lg:max-w-[13rem] bg-white flex justify-between flex-col gap-24 rounded-md shadow-md transition duration-150 cursor-pointer hover:shadow-lg"
      >
        <Activity :name="data.name" :date="data.date" />
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import ButtonAdd from "../components/ButtonAdd.vue";
import Activity from "../components/Activity.vue";
import moment from "moment";

export default {
  name: "DashboardPage",
  components: {
    Header,
    ButtonAdd,
    Activity,
  },
  data() {
    const datas = JSON.parse(localStorage.getItem("vue-tobedone"));
    return {
      datas: datas,
    };
  },
  methods: {
    getData() {
      const datas = JSON.parse(localStorage.getItem("vue-tobedone"));
      this.datas = datas;
    },
    addNewActivity() {
      const newData = {
        id: 1,
        name: "New Activity",
        activity: [],
        date: moment().format("ll"),
      };
      if (this.datas === null) {
        const datas = [newData];
        localStorage.setItem("vue-tobedone", JSON.stringify(datas));
      } else {
        const datas = [...this.datas, newData];
        localStorage.setItem("vue-tobedone", JSON.stringify(datas));
      }

      this.getData();
    },
  },
};
</script>

<style></style>
