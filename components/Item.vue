<template>
  <div class="card rounded">
    <figure class="image is-5by4">
      <nuxt-link :to="{ name: 'items-slug', params: { slug: slug } }">
        <img :src="thumbnail" />
      </nuxt-link>
    </figure>

    <div class="card-content text-center">
      <p class="title is-6">{{ title }}</p>
    </div>
  </div>
</template>
<script>
export default {
  props: ["title", "thumbnail", "slug"]
};
</script>
