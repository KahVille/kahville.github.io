<template>
  <v-container align-center>
    <ProfileCard />
    <ProjectShowCase/>
  </v-container>
</template>

<script>
const ProfileCard = () => import('../components/ProfileCard')
const ProjectShowCase = () => import('../components/ProjectShowCase')
export default {
  components: {
    ProfileCard,
    ProjectShowCase
  }
}
</script>
