<template>
  <div class="container">
    <div class="field">
      <label for class="label">Food name and description:</label>
      <div class="control">
        <input type="text" class="input" v-model.trim="input.name" />
        <p v-if="!$v.input.name.required" class="help is-danger">Required</p>
      </div>
    </div>
    <div class="field">
      <label for class="label">Type of food:</label>
    </div>
    <div class="field">
      <div class="control is-expanded">
        <div class="select w-100">
          <select class="w-100" v-model="input.input_data.foodType">
            <option v-for="type in getFoodTypes" :key="type" :value="type">{{type}}</option>
          </select>
        </div>
      </div>
    </div>
    <div class="field">
      <label class="label">How much food:</label>
    </div>
    <div class="field has-addons">
      <div class="control is-expanded">
        <input type="text" class="input" v-model="input.input_data.quantity" />
        <p v-if="!$v.input.input_data.quantity.numeric" class="help is-danger">Needs to be numeric</p>
      </div>
      <p class="control">
        <a class="button is-static">grams</a>
      </p>
    </div>
    <div class="field">
      <label class="label">Calories:</label>
      <div class="control">
        <input type="text" class="input" v-model.number="input.value" />
        <p v-if="!$v.input.value.required" class="help is-danger">Required</p>
        <p v-if="!$v.input.value.numeric" class="help is-danger">Needs to be numeric</p>
      </div>
    </div>
    <div class="field is-grouped is-grouped-right">
      <label class="checkbox">
        <input type="checkbox" v-model="share" />
        Share this accomplishment
      </label>
    </div>
    <div class="field is-grouped is-grouped-centered">
      <div class="control">
        <button
          :disabled="$v.input.$invalid"
          class="button is-link"
          @click="addButtonClick()"
        >Add to your daily intake</button>
      </div>
    </div>
  
  </div>
</template>

<script>

import { mapGetters, mapActions } from "vuex";
import { required, numeric } from "vuelidate/lib/validators";
export default {
  name: "FoodInputComponent",
  data() {
    return {
      input: {
        _id: null,
        type: "FoodInput",
        name: "",
        value: null,
        input_data: {
          foodType: null,
          quantity: null
        }
      },
      share: false,
      shareModalVisible: false,
      infoModalData: {
        visible: false,
        modalColor: "is-success",
        title: "",
        text: ""
      }
    };
  },
  validations: {
    input: {
      name: {
        required
      },
      value: {
        required,
        numeric
      },
      input_data: {
        quantity: {
          numeric
        }
      }
    }
  },
  computed: {
    ...mapGetters(["getPostVisibility", "getFoodTypes"])
  },
  methods: {
    ...mapActions(["addInput","addNewFoodPost"]),
    async addButtonClick() {
      if (!this.$v.input.$invalid) {
          this.addNewFoodPost(this.input)
      }
    },
    clearForm() {
      this.input._id = null;
      this.input.name = "";
      this.input.value = null;
      this.input.input_data.foodType = null;
      this.input.input_data.quantity = null;
    },
 
  }
};
</script>

<style>
.w-100 {
  width: 100%;
}
</style>