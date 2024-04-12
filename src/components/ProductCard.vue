<template>
  <div
    class="product"
    @mouseover="upHere = true"
    @mouseleave="upHere = false"
  >
    <div class="product-image">
      <img class="image" v-bind:src="image" />
    </div>
    <h1>{{ name }}</h1>

    <div class="product-description">
      <div class="product-price">{{ price }} P</div>
      <div class="availability">
        <div v-if="available">
          Available {{ amount }} positions
        </div>
        <div v-else>Not available</div>
      </div>
    </div>
    <busket-btn v-show="upHere" @click="addToBusket"
      >ADD TO CART</busket-btn
    >
  </div>
</template>

<script>
import defaultImgURL from "../assets/notImage.png";
export default {
  name: "product-card",
  data() {
    return {
      upHere: false,
    };
  },
  props: {
    name: {
      type: String,
      required: true,
      validator(val) {
        return val.length < 20;
      },
    },
    price: {
      type: Number,
      required: true,
    },
    image: {
      type: String,
      default: defaultImgURL,
    },
    amount: {
      type: Number,
      required: true,
      validator(val) {
        return val >= 0;
      },
    },
    available: {
      type: Boolean,
      required: true,
    },
  },
  methods: {
    addToBusket() {
      this.$.emit("addToBusket");
    },
  },
};
</script>

<style scoped>
.product {
  border: 1px solid #d8d8d8;
  padding: 20px 15px;
  width: 200px;
  margin: 10px;
  text-align: center;
}
.product-description {
  margin: 10px 10px 0px;
  text-align: left;
}
.availability {
  color: var(--vt-c-divider-dark-1);
}
.image {
  width: 90%;
}
</style>
