<template>
  <router-view></router-view>
</template>

<script>
import axios from 'axios'

  export default {
    created(){
      axios.interceptors.response.use(function (response) {
          return response;
      }, function (error) {
          if (401 === error.response.status) {
              if(window.location.href != window.location.origin + '/'){
                window.location.href = window.location.origin;
              }
          } else {
              return Promise.reject(error);
          }
      });
    }
  }
</script>


<style lang="scss">
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
body {
  font-family: sans-serif;
}
</style>
