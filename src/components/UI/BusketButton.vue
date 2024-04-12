<template>
  <button>
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "busket-btn",
};
</script>

<style scoped>
button {
  border: 1px solid var(--vt-c-black);
  border-radius: 5px;
  background-color: var(--vt-c-black);
  color: var(--vt-c-white-soft);
  margin-top: 10px;
  width: 100%;
  height: 2rem;
}
</style>
