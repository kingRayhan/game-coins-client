<template>
  <div>
    <Slider />

    <div class="grid grid-cols-12 gap-5 my-12 p-4 md:p-0">
      <div
        v-for="item in items"
        :key="item.id"
        class="col-span-6 md:col-span-3"
      >
        <Item :thumbnail="item.thumbnail" :title="item.name" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          id: 1,
          name: "Mobile Legends",
          thumbnail:
            "https://cdn1.codashop.com/S/content/mobile/images/product-tiles/mlbb_tile.jpg"
        },
        {
          id: 2,
          name: "Mobile Legends",
          thumbnail:
            "https://cdn1.codashop.com/S/content/mobile/images/product-tiles/mlbb_tile.jpg"
        },
        {
          id: 3,
          name: "Mobile Legends",
          thumbnail:
            "https://cdn1.codashop.com/S/content/mobile/images/product-tiles/mlbb_tile.jpg"
        },
        {
          id: 4,
          name: "Mobile Legends",
          thumbnail:
            "https://cdn1.codashop.com/S/content/mobile/images/product-tiles/mlbb_tile.jpg"
        },
        {
          id: 5,
          name: "Mobile Legends",
          thumbnail:
            "https://cdn1.codashop.com/S/content/mobile/images/product-tiles/mlbb_tile.jpg"
        },
        {
          id: 6,
          name: "Mobile Legends",
          thumbnail:
            "https://cdn1.codashop.com/S/content/mobile/images/product-tiles/mlbb_tile.jpg"
        },
        {
          id: 7,
          name: "Mobile Legends",
          thumbnail:
            "https://cdn1.codashop.com/S/content/mobile/images/product-tiles/mlbb_tile.jpg"
        },
        {
          id: 8,
          name: "Mobile Legends",
          thumbnail:
            "https://cdn1.codashop.com/S/content/mobile/images/product-tiles/mlbb_tile.jpg"
        }
      ]
    };
  }
};
</script>
