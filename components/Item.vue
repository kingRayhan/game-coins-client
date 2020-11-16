<template>
  <div class="card rounded">
    <figure class="image is-5by4">
      <n-link to="{ name: 'id', params: { _id: title } }"
        ><img :src="thumbnail"
      /></n-link>
    </figure>

    <div class="card-content text-center">
      <p class="title is-6">{{ title }}</p>
    </div>
  </div>
</template>
<script>
export default {
  props: ["title", "thumbnail"]
};
</script>
