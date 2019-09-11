<template>
  <Module title="Coding Playground">
    <div
      class="mb-3 text-uppercase title"
    >Warning! Sounds play very loud, make sure you're volume is low when running code.</div>
    <div class="hidden-sm-and-down">
      <v-layout>
        <v-flex xs6>
          <v-textarea filled background-color="white" label="Input" no-resize rows="30"></v-textarea>
        </v-flex>
        <v-flex xs6>
          <v-textarea
            filled
            background-color="white"
            label="Console (Read-Only)"
            auto-grow
            readonly
          ></v-textarea>
        </v-flex>
      </v-layout>
    </div>
    <div class="hidden-md-and-up">
      <v-layout>
        <v-flex xs12>
          <v-textarea filled background-color="white" label="Input" auto-grow></v-textarea>
          <v-textarea
            filled
            background-color="white"
            label="Console (Read-Only)"
            auto-grow
            readonly
          ></v-textarea>
        </v-flex>
      </v-layout>
    </div>
    <v-btn @click="runCode">Run Code</v-btn>
  </Module>
</template>

<script>
import Module from "@/components/Module";
export default {
  components: {
    Module
  },
  data() {
    return {
      code: 'play note 392 "sine" HALF'
    };
  },
  watch: function() {
    console.log(this.code);
  },
  methods: {
    runCode() {
      console.log(this.code);
      console.log("hello");
      this.$emit("run", this.code);
    }
  }
};
</script>

<style scoped>
</style>