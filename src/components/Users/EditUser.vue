<template>
  <div class="CreateUser">
      <input type="text" v-model="input.id" placeholder="Id" />
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
        id: '',
        username: '',
        password: '',
        email: ''
      },
      response_put: '',
      response_get: ''
    }
  },
  methods: {
    // getData () {
    //   this.$http
    //     .get('http://localhost:8000/users/', {
    //       headers: { 'content-type': 'application/json' }
    //     })
    //     .then(
    //       result => {
    //         this.email = this.input.email,
    //         this.response_get = result.data,
    //         this.id = this.response_get.find(this.response_get, this.response_get.email == this.email)
    //         // this.id = this.response_get.email.indexOf(this.email)
    //       },
    //       error => {
    //         console.error(error)
    //       }
    //     )
    // },
    editData () {
      this.$http
        .put('http://localhost:8000/users/6/', this.input, {
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
