<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">Navbar</a>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <router-link class="nav-link" :to="{ name: '首頁' }">Home</router-link>
          </li>
          
          <li class="nav-item">
            <router-link class="nav-link" to="/page/" >Page</router-link>
          </li>
        </ul>
      </div>      
    </nav>
    
    
    <!--<img src="./assets/logo.png"> -->
    <!--<HelloWorld/> -->
    <router-view name="menu"></router-view>  <!--另外設定的router-view-->
    <div class="container">
      <router-view></router-view>  <!--預設的router-view-->
    </div>
    
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

