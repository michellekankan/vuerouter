<template>
  <div>
    <img :src="user.picture.large" class="card-img-top" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">{{ user.gender }}</h5>
      <p class="card-text">{{ user.email }}</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>    
  </div>
</template>

<script>
export default {
  data () {
    return {
      user: {
        picture: {},
      }
      
    }
  },
  created(){
    //console.log(this.$route.params.id);
    //const id = this.$route.params.id;
    const vm = this;
    this.$http.get('https://randomuser.me/api/').then((response) => {
      console.log(response.data);
      vm.user = response.data.results[0]
    })
    
  }
}
</script>

