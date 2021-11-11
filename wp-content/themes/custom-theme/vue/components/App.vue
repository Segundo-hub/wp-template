<template>
  <form action="" @submit.prevent="onSubmit" class="first">
    <input type="text" v-model="name" placeholder="Name"/>
    holita
  </form>
</template>

<script>
export default {
  name: "Hola",
  data() {
    return {
      name: ""
    }
  },
  methods: {
    onSubmit(){
      window.fetch('')
    }
  },
  mounted() {
    console.log(this.name)
  }
}
</script>

<style>
.first{
   background-color: green;
}
</style>