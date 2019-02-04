<template>
  <v-container align-center>
    <ProfileCard />
  </v-container>
</template>

<script>
const ProfileCard = () => import('../components/ProfileCard')
export default {
  components: {
    ProfileCard
  }
}
</script>
