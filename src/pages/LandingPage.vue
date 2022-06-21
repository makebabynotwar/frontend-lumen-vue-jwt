<template>
  <div class="landing-page">
    <user-profile class="profile" v-if="authenticated"> </user-profile>
    <login-form class="login" v-else></login-form>
  </div>
</template>

<script>
import LoginForm from '@/components/LandingPage/LoginForm';
import UserProfile from '@/components/LandingPage/UserProfile';
import { mapGetters } from 'vuex';
export default {
  mounted(){
    this.$store.dispatch('title/setTitle', 'HomePage');
  },
  components: {
    LoginForm,
    UserProfile
  },
  computed: {
    ...mapGetters({
      authenticated: 'auth/authenticated'
    })
  },
}
</script>
