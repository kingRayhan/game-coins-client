<template>
  <div>
    <Navbar />

    <section class="main-content columns">
      <aside class="column is-2 section">
        <p class="menu-label is-hidden-touch">
          General
        </p>
        <ul class="menu-list">
          <li v-for="(item, key) of items" :key="key">
            <nuxt-link :to="item.to" exact-active-class="is-active">
              <b-icon :icon="item.icon" /> {{ item.title }}
            </nuxt-link>
          </li>
        </ul>
      </aside>

      <div class="container column is-10">
        <nuxt />
      </div>
    </section>
  </div>
</template>

<script>
export default {
  middleware: "authenticated",
  data() {
    return {
      items: [
        {
          title: "Dashboard",
          icon: "view-dashboard",
          to: "/dashboard"
        },
        {
          title: "Games",
          icon: "nintendo-game-boy",
          to: "/dashboard/games"
        },
        {
          title: "Orders",
          icon: "currency-bdt",
          to: "/dashboard/orders"
        },
        {
          title: "Admins",
          icon: "account",
          to: "/dashboard/users"
        }
      ]
    };
  }
};
</script>
