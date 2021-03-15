<template>
  <div class="section">
    <div class="columns is-centered">
      <div class="panel column is-centered is-one-third">
        <p class="panel-heading">Sign in</p>
        <div class="panel-block">
          <div class="field">
            <label class="label">Username</label>
            <div class="control has-icons-left">
              <input
                type="text"
                placeholder="Your username"
                :class="`input ${
                  $v.credentials.username.$invalid ? 'is-danger' : ''
                }`"
                v-model.trim="credentials.username"
              />
              <span class="icon is-small is-left">
                <i class="fas fa-user"></i>
              </span>
            </div>
          </div>
        </div>
        <div class="panel-block">
          <div class="field">
            <label class="label">Password</label>
            <div class="control has-icons-left">
              <input
                type="password"
                placeholder="Your password"
                :class="`input ${
                  $v.credentials.password.$invalid ? 'is-danger' : ''
                }`"
                v-model.trim="credentials.password"
              />
              <span class="icon is-small is-left">
                <i class="fas fa-lock"></i>
              </span>
            </div>
          </div>
        </div>
        <div class="panel-block">
          <div class="field">
            <div class="control">
              <a
                class="button is-primary w-100"
                :disabled="$v.credentials.$invalid"
                @click="logIn()"
                >Sign in</a
              >
              <p v-if="wrongCredentials" class="help is-danger">
                Username or password are wrong
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { required } from "vuelidate/lib/validators";
import { mapActions } from "vuex";

export default {
  name: "SignIn",
  data() {
    return {
      credentials: {
        username: null,
        password: null,
      },
      wrongCredentials: false,
    };
  },
  validations: {
    credentials: {
      username: {
        required,
      },
      password: {
        required,
      },
    },
  },
  methods: {
    ...mapActions(["signIn"]),
    logIn() {
      if (!this.$v.credentials.$invalid) {
        this.signIn(this.credentials)
}
    },


  },
};
</script>

<style >
.w-100,
.field {
  width: 100%;
}
</style>