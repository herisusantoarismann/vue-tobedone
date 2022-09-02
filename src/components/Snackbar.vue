<template>
  <div
    class="w-3/4 fixed bottom-2 left-2/4 -translate-x-2/4 px-4 py-2 flex justify-between items-center bg-black text-white rounded shadow"
    :class="isShow ? 'block' : 'hidden'"
  >
    <p class="text-sm">{{ message }}</p>
    <p
      class="text-sm text-red-600 tracking-wider uppercase font-semibold"
      @click="closeSnackbar"
    >
      Close
    </p>
  </div>
</template>

<script>
export default {
  name: "SnackbarComponent",
  props: {
    message: {
      type: String,
    },
  },
  data() {
    return {
      isShow: false,
    };
  },
  methods: {
    closeSnackbar() {
      this.isShow = false;
    },
  },
};
</script>

<style></style>
