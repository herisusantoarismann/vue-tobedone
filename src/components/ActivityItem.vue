<template>
  <div class="flex items-center gap-2">
    <input type="checkbox" />
    <div
      v-if="priority === 'High'"
      class="w-2 h-2 bg-red-600 rounded-full"
    ></div>
    <div
      v-else-if="priority === 'Medium'"
      class="w-2 h-2 bg-yellow-600 rounded-full"
    ></div>
    <div
      v-else-if="priority === 'Low'"
      class="w-2 h-2 bg-green-600 rounded-full"
    ></div>
    <div v-else class="w-2 h-2 bg-gray-600 rounded-full"></div>
    <p>{{ name }}</p>
  </div>
  <div class="flex gap-4">
    <font-awesome-icon
      icon="fa-solid fa-pencil"
      class="text-gray-400 cursor-pointer hover:text-blue-600"
      @click="onEdit(id, name, priority)"
    />
    <font-awesome-icon
      icon="fa-solid fa-trash-can"
      class="text-gray-400 cursor-pointer hover:text-red-600"
      @click="onDelete(id)"
    />
  </div>
</template>

<script>
export default {
  name: "ActivityItem",
  props: {
    id: Number,
    priority: String,
    name: String,
    modelValue: Boolean,
    onEdit: Function,
    onDelete: Function,
  },
};
</script>

<style></style>
