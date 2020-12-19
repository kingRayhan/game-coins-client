<template>
  <div>
    <Navbar />

    <section class="main-content columns">
      <div class="container column is-10">
        <nuxt />
      </div>
    </section>

    <footer class="footer">
      <div class="content has-text-centered">
        <p>All right reserved &copy; {{ new Date().getFullYear() }}</p>
      </div>
    </footer>
  </div>
</template>
