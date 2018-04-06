<template>
  <div class="CreateUser">
      <input type="text" v-model="id_user" placeholder="Id" />
      <input type="text" v-model="input.email" placeholder="Email" />
      <input type="text" v-model="input.username" placeholder="Username" />
      <input type="password" v-model="input.password" placeholder="Password" />
      <button v-on:click="editData()">Edit</button>

      <br />
      <br />
  </div>
</template>

<script>
export default {
  name: 'EditUser',
  components: {},
  data () {
    return {
      input: {
        username: '',
        password: '',
        email: ''
      },
      id_user: '',
      response_put: '',
      response_get: ''
    }
  },
  methods: {
    editData () {
      this.$http
        .put('http://localhost:8000/users/' + this.id_user + '/', this.input, {
          headers: { 'content-type': 'application/json' }
        })
        .then(
          result => {
            this.response_post = result.data
          },
          error => {
            console.error(error)
          }
        )
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
