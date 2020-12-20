<template>
  <form @submit.prevent="handleSave">
    <div class="columns">
      <div class="column is-6">
        <Card title="New Game">
          <div class="relative mb-5">
            <p class="font-bold">Cover</p>
            <img v-if="cover" :src="cover" alt="" />

            <div
              v-if="!cover"
              @click="handleCoverImageUpload"
              class="h-24 border-dashed border-2 flex items-center justify-center cursor-pointer my-4"
            >
              <b-icon icon="camera" />
            </div>

            <button
              v-if="cover"
              @click="cover = ''"
              class="text-red-500 text-3xl absolute focus:outline-none"
              style="top:0;right:12px"
            >
              &times;
            </button>
          </div>

          <div class="relative">
            <p class="font-bold">Thumbnail</p>
            <img v-if="thumbnail" :src="thumbnail" alt="" />

            <div
              v-if="!thumbnail"
              @click="handleThumbnailImageUpload"
              class="h-24 border-dashed border-2 flex items-center justify-center cursor-pointer my-4"
            >
              <b-icon icon="camera" />
            </div>

            <button
              v-if="thumbnail"
              @click="thumbnail = ''"
              class="text-red-500 text-3xl absolute focus:outline-none"
              style="top:0;right:12px"
            >
              &times;
            </button>
          </div>

          <ValidationProvider rules="required" v-slot="{ errors }">
            <b-field
              label="Title"
              :type="errors.length ? 'is-danger' : null"
              :message="errors[0]"
            >
              <b-input placeholder="Gane title" v-model="title" />
            </b-field>
          </ValidationProvider>

          <ValidationProvider rules="required" v-slot="{ errors }">
            <b-field
              label="Description"
              :type="errors.length ? 'is-danger' : null"
              :message="errors[0]"
            >
              <VueEditor v-model="body" />
            </b-field>
          </ValidationProvider>

          <div class="mt-3">
            <b-button native-type="submit" type="is-primary">Save</b-button>
          </div>
        </Card>
      </div>
      <div class="column is-6">
        <Card title="Coins">
          <div v-for="(coin, i) in coins" :key="i" class="border mb-5 p-2">
            <b-field>
              <b-input
                placeholder="Gane title"
                v-model="coin.label"
                icon="bitcoin"
              />
            </b-field>
            <b-field>
              <b-input
                placeholder="Gane title"
                v-model.number="coin.price"
                type="number"
                icon="currency-bdt"
              />
            </b-field>
            <b-button size="is-small" type="is-danger" @click="removeCoin(i)">
              Remove
            </b-button>
          </div>
          <b-button
            size="is-small"
            type="is-success"
            @click="coins.push({ label: '', price: '' })"
          >
            New coin
          </b-button>
        </Card>
      </div>
    </div>
  </form>
</template>
<script>
import { VueEditor } from "vue2-editor/dist/vue2-editor.core.js";
export default {
  layout: "admin",
  middleware: "authenticated",
  components: {
    VueEditor
  },
  data() {
    return {
      cover: "",
      thumbnail: "",
      coins: [{ label: "", price: 0 }],
      title: "",
      body: ""
    };
  },
  methods: {
    async handleSave() {
      await this.$axios.$post("games", {
        title: this.title,
        body: this.body,
        coins: this.coins,
        thumbnail: this.thumbnail,
        cover: this.cover
      });
      this.$router.push({ name: "dashboard-games" });
    },
    removeCoin(index) {
      this.coins.splice(index, 1);
    },
    handleCoverImageUpload() {
      const widget = this.createCloudinaryWidgetForCover();
      widget.open();
    },
    handleThumbnailImageUpload() {
      const widget = this.createCloudinaryWidgetForThumbnail();
      widget.open();
    },
    createCloudinaryWidgetForCover(setter) {
      const newWidget = window.cloudinary.createUploadWidget(
        {
          cloudName: "techdiary-dev",
          uploadPreset: "fire-reddit-assets",
          multiple: false,
          maxFiles: 1,
          cropping: true,
          croppingAspectRatio: 1,
          clientAllowedFormats: ["png", "gif", "jpeg"]
        },
        (error, result) => {
          if (!error && result && result.event === "success") {
            this.cover = result.info.secure_url;
          }
        }
      );
      return newWidget;
    },
    createCloudinaryWidgetForThumbnail(setter) {
      const newWidget = window.cloudinary.createUploadWidget(
        {
          cloudName: "techdiary-dev",
          uploadPreset: "fire-reddit-assets",
          multiple: false,
          maxFiles: 1,
          cropping: true,
          croppingAspectRatio: 1,
          clientAllowedFormats: ["png", "gif", "jpeg"]
        },
        (error, result) => {
          if (!error && result && result.event === "success") {
            this.thumbnail = result.info.secure_url;
          }
        }
      );
      return newWidget;
    }
  }
};
</script>

<style lang="css">
@import "vue2-editor/dist/vue2-editor.css";
@import "quill/dist/quill.core.css";
@import "quill/dist/quill.bubble.css";
@import "quill/dist/quill.snow.css";
</style>
