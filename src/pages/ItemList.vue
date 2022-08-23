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
      <div class="flex items-center gap-4">
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
  <div
    class="fixed top-2/4 lg:top-1/4 left-2/4 -translate-x-2/4 -translate-y-2/4 bg-white w-3/4 md:w-2/4 lg:w-72"
  >
    <div class="py-2 px-4 flex justify-between">
      <p class="text-sm font-semibold">Tambah List Item</p>
      <font-awesome-icon
        icon="fa-solid fa-xmark"
        class="text-sm text-gray-400 hover:text-red-400"
      />
    </div>
    <hr />
    <div class="py-4 px-6 flex flex-col gap-4">
      <div class="flex flex-col gap-2">
        <label for="name" class="text-sm">Name</label>
        <input
          type="text"
          class="text-sm border border-gray-400 outline-none rounded px-2 py-1 focus:border-blue-400"
          placeholder="Name"
          v-model="input.name"
        />
      </div>
      <div class="flex flex-col gap-2">
        <label for="name" class="text-sm">Prioritas</label>
        <select
          name="priority"
          id="priority"
          class="py-1 px-2 text-sm outline-none border border-gray-400 rounded"
          v-model="input.priority"
        >
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>
      </div>
    </div>
    <hr />
    <div class="py-3 px-4 flex justify-end">
      <button
        class="py-1.5 px-4 bg-primary rounded-xl text-sm text-white"
        @click="submit"
      >
        Simpan
      </button>
    </div>
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import ButtonAdd from "../components/ButtonAdd.vue";
import ActivityItem from "../components/ActivityItem.vue";

export default {
  name: "ItemListPage",
  components: {
    Header,
    ButtonAdd,
    ActivityItem,
  },
  data() {
    return {
      name: "New Activity",
      isEdit: false,
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
      input: {
        name: "",
        priority: "High",
      },
    };
  },
  methods: {
    toggleEdit() {
      this.isEdit = !this.isEdit;
    },
    saveName() {
      alert("saved");
      this.isEdit = false;
    },
    submit() {
      console.log(this.input);
    },
  },
};
</script>

<style></style>
