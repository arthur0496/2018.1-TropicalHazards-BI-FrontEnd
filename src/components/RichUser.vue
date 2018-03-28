<template>
  <div>
    pau no cu
    {{ first_name }}

  </div>
</template>

<script>
export default {
  data () {
    return {
      first_name: ''
    }
  },
  methods: {
    user () {
      this.$http.get('https://reqres.in/api/users/2').then(response => {
        this.first_name = response.body.data.first_name
        console.log(response)
      })
    }
  },
  created () {
    this.user()
  }
}
</script>

<style>

</style>
