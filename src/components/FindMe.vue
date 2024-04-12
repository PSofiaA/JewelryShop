<template>
  <h2>Search</h2>
  <input v-on:input="inputCurrent($event)" />
  <div>
    Всего имен {{ names.length }}, совпадений
    {{ findMatch.length }}
  </div>
  <div v-for="name in findMatch" key:index>
    {{ name }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentVal: "",
      names: ["Иван", "Евгений", "Алексей", "Егор"],
    };
  },
  methods: {
    inputCurrent(event) {
      this.currentVal = event.target.value;
    },
  },
  computed: {
    findMatch() {
      return this.names.filter((sym) =>
        sym.includes(this.currentVal)
      );
    },
  },
};
</script>

<style scoped></style>
