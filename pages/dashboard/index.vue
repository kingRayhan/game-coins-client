<template>
  <div>
    <div class="columns">
      <!--  -->
      <div class="column">
        <Card title="Total Game">
          <h2 class="title">145</h2>
        </Card>
      </div>

      <!--  -->
      <div class="column">
        <Card title="Pending Order">
          <h2 class="title">145</h2>
        </Card>
      </div>

      <!--  -->
      <div class="column">
        <Card title="Done order">
          <h2 class="title">145</h2>
        </Card>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  layout: "admin",
  middleware: "authenticated"
};
</script>
