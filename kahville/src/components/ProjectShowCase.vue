<template>
  <v-container text-xs-center>
    <h2>Recent projects</h2>

    <v-container grid-list-xs>
      <v-layout row wrap>
        <v-flex xs4 >
          <ProjectCard></ProjectCard>
        </v-flex>
        <v-flex xs4>
        <ProjectCard></ProjectCard>
        </v-flex>
                <v-flex>
        <ProjectCard></ProjectCard>
        </v-flex>
                <v-flex xs4>
        <ProjectCard></ProjectCard>
        </v-flex>
                <v-flex xs4 >
        <ProjectCard></ProjectCard>
        </v-flex>
      </v-layout>
    </v-container>
  </v-container>
</template>

<script>
const ProjectCard = () => import('./ProjectCard')
export default {
  components: {
    ProjectCard
  }
}
</script>
