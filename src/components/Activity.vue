<template>
  <p class="font-bold text-xl">{{ data.name }}</p>
  <div class="flex items-center justify-between">
    <p class="text-sm text-gray-400">{{ data.date }}</p>
    <font-awesome-icon
      icon="fa-solid fa-trash-can"
      class="text-sm text-gray-400 cursor-pointer transition duration-150 hover:text-red-600"
      @click="(e) => deleteActivity(e)"
    />
  </div>
</template>

<script>
export default {
  name: "ActivityComponents",
  props: {
    data: Object,
    getData: Function,
  },
  methods: {
    deleteActivity(e) {
      e.stopPropagation();
      let datas = JSON.parse(localStorage.getItem("vue-tobedone"));
      datas = datas.filter((data) => data.id !== this.data.id);
      localStorage.setItem("vue-tobedone", JSON.stringify(datas));
      this.getData();
    },
  },
};
</script>

<style></style>
