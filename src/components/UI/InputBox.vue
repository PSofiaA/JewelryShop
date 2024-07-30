<template>
  <input
    :value="modelValue"
    @input="updateInput"
    type="text"
  />
</template>

<script>
export default {
  name: "input-box",
  props: {
    modelValue: [String, Number],
  },
  methods: {
    updateInput(event) {
      this.$emit("update:modelValue", event.target.value);
    },
  },
};
</script>

<style scoped>
input {
  font-size: 24px;
}
</style>
