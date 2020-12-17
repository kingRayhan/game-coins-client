<template>
  <b-navbar>
    <template slot="brand">
      <b-navbar-item tag="router-link" :to="{ path: '/' }">
        <img
          src="https://cdn1.codashop.com/S/content/mobile/images/codashop-logo.png"
          alt="DGA"
        />
      </b-navbar-item>
    </template>

    <template slot="end">
      <b-navbar-item tag="div" v-if="$auth.loggedIn">
        <b-icon icon="account" size="is-small" class="mr-1"> </b-icon>
        {{ $auth.user.name }}
      </b-navbar-item>

      <b-navbar-item tag="div" v-if="$auth.loggedIn">
        <nuxt-link to="/dashboard">
          <b-icon icon="view-dashboard" size="is-small" class="mr-1"> </b-icon>
          Dashboard
        </nuxt-link>
      </b-navbar-item>

      <b-navbar-item tag="div" v-if="$auth.loggedIn">
        <button @click="$auth.logout()">Logout</button>
      </b-navbar-item>
    </template>
  </b-navbar>
</template>
