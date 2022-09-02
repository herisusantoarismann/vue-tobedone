<template>
  <div
    class="fixed top-2/4 lg:top-1/4 left-2/4 -translate-x-2/4 -translate-y-2/4 bg-white w-3/4 md:w-2/4 lg:w-72 rounded-md"
    :class="modelValue ? 'block' : 'hidden'"
  >
    <div class="py-2 px-4 lg:p-4 flex justify-between">
      <p class="text-sm font-semibold">Tambah List Item</p>
      <font-awesome-icon
        icon="fa-solid fa-xmark"
        class="text-sm text-gray-400 cursor-pointer hover:text-red-400"
        @click="closeModal"
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
          v-model="name"
        />
      </div>
      <div class="flex flex-col gap-2">
        <label for="name" class="text-sm">Prioritas</label>
        <select
          name="priority"
          id="priority"
          class="py-1 px-2 text-sm outline-none border border-gray-400 rounded"
          v-model="priority"
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
export default {
  name: "ModalItem",
  props: {
    modelValue: {
      type: Boolean,
    },
    refreshData: {
      type: Function,
    },
  },
  data() {
    return {
      name: "",
      priority: "High",
    };
  },
  methods: {
    submit() {
      let datas = JSON.parse(localStorage.getItem("vue-tobedone"));
      datas.map((data) => {
        if (data.id == this.$route.params.id)
          data.activity = [
            ...data.activity,
            { name: this.name, priority: this.priority },
          ];
      });
      localStorage.setItem("vue-tobedone", JSON.stringify(datas));
      this.$emit("update:modelValue", false);
      this.refreshData();
    },
    closeModal() {
      (this.name = ""), (this.priority = "High");
      this.$emit("update:modelValue", false);
    },
  },
};
</script>

<style></style>
