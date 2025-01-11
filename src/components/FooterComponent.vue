<template>
  <footer class="footer">
    <p>&copy; {{ year }} Tourism Company. All rights reserved.</p>
  </footer>
</template>

<script>
export default {
  name: "FooterComponent",
  props: {
    year: {
      type: Number,
      required: true,
    },
  },
};
</script>

<style scoped>

.footer {
  text-align: center;
  padding: 10px;
  background: #f8f9fa;
  border-top: 50px solid #eaeaea;
}
</style>
  