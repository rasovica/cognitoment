<template>
  <div class="home">
    <p>Hello {{ username }}</p>
  </div>
</template>

<script>
    export default {
        name: 'Home',
        data() {
            return {
              username: 'Unaithoxrizd user',
            };
        },
        mounted() {
            if (this.$store.state.user) {
                this.username = this.$store.state.user.getAccessToken().payload.username;
            }
        },
    };
</script>

<style scoped>

</style>