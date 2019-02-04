<template>
  <v-container>
    <v-card>
      <v-card-title primary-title>
        <v-container>
          <ProfileAvatar/>
          <v-card-text>
            <h3 class="headline">Hello World!</h3>
            <p>Hi! My name is Ville Kähärä. I am a Bachelor of Engineering student in the field of information technology. While specializing in game programming my skills lay in problem solving. As a bonus I'm a person who loves coffee.</p>
          </v-card-text>
        </v-container>
      </v-card-title>
    </v-card>
  </v-container>
</template>

<script>
const ProfileAvatar = () => import('./ProfileAvatar')
export default {
  components: {
    ProfileAvatar
  }
}
</script>
