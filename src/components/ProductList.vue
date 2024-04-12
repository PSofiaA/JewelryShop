<template>
  <div class="cardList">
    <product-card
      v-for="(product, index) in products"
      :name="product.name"
      :price="product.price"
      :image="product.image"
      :amount="product.amount"
      :available="product.available"
      @addToBusket="addToBusket(index)"
    ></product-card>
  </div>
</template>

<script>
import earringsURL from "../assets/Earrings.jpg";
import ringURL from "../assets/ring.jpg";
import ProductCard from "./ProductCard.vue";
export default {
  components: {
    ProductCard,
  },
  methods: {
    addToBusket(index) {
      if (this.products[index].amount > 0) {
        this.products[index].amount--;
      }
      if (this.products[index].amount == 0) {
        this.products[index].available = false;
      }
    },
  },
  data() {
    return {
      products: [
        {
          // image: earringsURL,
          name: "Earrings",
          price: 1000,
          available: true,
          amount: 20,
        },
        {
          image: ringURL,
          name: "Ring",
          price: 500,
          available: true,
          amount: 5,
        },
        {
          // image: earringsURL,
          name: "Earrings",
          price: 1000,
          available: true,
          amount: 20,
        },
        {
          // image: earringsURL,
          name: "Earrings",
          price: 1000,
          available: true,
          amount: 20,
        },
        {
          image: earringsURL,
          name: "Earrings",
          price: 1000,
          available: true,
          amount: 20,
        },
      ],
    };
  },
};
</script>

<style scoped>
.cardList {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
}
</style>
