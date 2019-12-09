<template>
  <div id="app">
    <Navbar />
    <router-view/>
    <AddSmoothie/>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'


export default {
  name: 'App',
  components: {
    Navbar,

  }
}
</script>

<style>

</style>
