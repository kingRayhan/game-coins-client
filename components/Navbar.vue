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

    <template slot="start">
      <b-navbar-item>
        Cara tercepat dan termudah untuk pembelian kredit permainan.
      </b-navbar-item>
    </template>

    <template slot="end">
      <b-navbar-item tag="div">
        <div class="buttons">
          <a class="button is-primary">
            <strong>Sign up</strong>
          </a>
          <a class="button is-light">
            Log in
          </a>
        </div>
      </b-navbar-item>
    </template>
  </b-navbar>
</template>
