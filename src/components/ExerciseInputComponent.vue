<template>
  <div class="container">
    <div class="field">
      <label for class="label">Describe exercise:</label>
      <div class="control">
        <input type="text" class="input" v-model.trim="input.name" />
        <p v-if="!$v.input.name.required" class="help is-danger">Required</p>
      </div>
    </div>
    <b-field label="Type of exercise" class="w-100">
      <b-autocomplete
        v-model="exerciseTypeInput"
        :data="getFilteredExerciseTypes"
        placeholder="What exercise did you do?"
        @select="selectedExerciseType"
        :open-on-focus="true"
      />

    </b-field>
    <div class="field">
      <label for class="label">For how long:</label>
    </div>
    <div class="field has-addons">
      <div class="control is-expanded">
        <input
          type="text"
          class="input"
          v-model.trim="input.input_data.length"
          placeholder="For how long"
        />
        <p v-if="!$v.input.input_data.length.numeric" class="help is-danger">Needs to be a numeric</p>
      </div>
      <div class="control">
        <span class="select">
          <select v-model="input.lengthUnit">
            <option value="Hours">Hours</option>
            <option value="Minutes">Minutes</option>
            <option value="Seconds">Seconds</option>
          </select>
        </span>
      </div>
    </div>
    <div class="field">
      <label for class="label">Calories burnt:</label>
      <div class="control">
        <input type="text" class="input" v-model.number="input.value" />
        <p v-if="!$v.input.value.required" class="help is-danger">Required</p>
        <p v-if="!$v.input.value.numeric" class="help is-danger">Needs to be a numeric</p>
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
        >Add to your daily exercise</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { required, numeric } from "vuelidate/lib/validators";
export default {
  name: "ExerciseInputComponent",

  computed: {
    ...mapGetters(["getPostVisibility", "getExerciseTypes"]),
    getFilteredExerciseTypes(){
      return ["Cardio","HIT","Strength"]
    }
  },
  data() {
    return {
      //exerciseTypeInput is used to store text we type in autocomplete
      exerciseTypeInput: '',
          
      input: {
        _id: null,
        type: "ExerciseInput",
        name: "",
        value: null,
        input_data: {
          exerciseType: "",
          length: "",
        },
          lengthUnit: "Minutes",
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
        length: {
          numeric
        }
      }
    }
  },
  methods: {
    ...mapActions(["addInput", 'fetchExerciseTypes','addNewExercisePost']),
    selectedExerciseType(selectedType){
      this.input.input_data.exerciseType = selectedType
    },
    async addButtonClick() {
      if (!this.$v.input.$invalid) {
             this.addNewExercisePost(this.input)
      }
    },
    clearForm() {
      this.input._id = null
      this.input.name = "";
      this.input.value = null;
      this.input.input_data.exerciseType = "";
      this.input.input_data.length = "";
    },
  },

};
</script>

<style>
.w-100 {
  width: 100%;
}
</style>