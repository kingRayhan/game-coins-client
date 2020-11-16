<template>
  <b-carousel>
    <b-carousel-item v-for="(carousel, i) in carousels" :key="i">
      <img :src="carousel.src" :alt="carousel.src" class="w-full" />
    </b-carousel-item>
  </b-carousel>
</template>

<script>
export default {
  data() {
    return {
      carousels: [
        {
          src:
            "https://cdn1.codashop.com/S/content/common/images/promos/106/codashop_anniv1_id.jpg"
        },
        {
          src:
            "https://cdn1.codashop.com/S/content/common/images/promos/106/codashop_anniv2_id.jpg"
        },
        {
          src:
            "https://cdn1.codashop.com/S/content/common/images/promos/106/pubg_gopay_id.png"
        },
        {
          src:
            "https://cdn1.codashop.com/S/content/common/images/promos/106/codashop_anniv4_id.jpg"
        }
      ]
    };
  }
};
</script>
