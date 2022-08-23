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
          :readonly="!isEdit"
        />
        <font-awesome-icon
          v-if="isEdit"
          icon="fa-solid fa-floppy-disk"
          class="text-sm cursor-pointer transition duration-150 hover:text-black"
          @click="saveName"
        />
        <font-awesome-icon
          v-else
          icon="fa-solid fa-pencil"
          class="text-gray-400 text-xs cursor-pointer transition duration-150 hover:text-black"
          @click="toggleEdit"
        />
      </div>
      <div class="flex items-center gap-4" @click="openModal">
        <ButtonAdd />
      </div>
    </div>
    <img
      v-if="datas.length === 0"
      :src="require('../assets/todo-empty-state.png')"
      alt="empty-state-img"
      class="mt-12 md:w-2/4 md:mx-auto xl:w-1/4"
    />
    <div class="p-4 md:px-24 lg:px-40 xl:px-96 flex flex-col gap-4">
      <div
        v-for="(data, index) in datas"
        :key="index"
        class="bg-white py-3 px-4 rounded shadow flex items-center justify-between"
      >
        <ActivityItem :priority="data.priority" :name="data.name" />
      </div>
    </div>
  </div>
  <Modal v-model="isModalShow" />
</template>

<script>
import Header from "../components/Header.vue";
import ButtonAdd from "../components/ButtonAdd.vue";
import ActivityItem from "../components/ActivityItem.vue";
import Modal from "../components/Modal.vue";

export default {
  name: "ItemListPage",
  components: {
    Header,
    ButtonAdd,
    ActivityItem,
    Modal,
  },
  data() {
    return {
      name: "New Activity",
      isEdit: false,
      isModalShow: false,
      datas: [
        {
          name: "Telur Ayam",
          priority: "High",
        },
        {
          name: "Beras 5 kg",
          priority: "Medium",
        },
        {
          name: "Daging",
          priority: "Low",
        },
      ],
    };
  },
  methods: {
    toggleEdit() {
      this.isEdit = !this.isEdit;
    },
    openModal() {
      this.isModalShow = true;
    },
    saveName() {
      alert("saved");
      this.isEdit = false;
    },
  },
};
</script>

<style></style>
