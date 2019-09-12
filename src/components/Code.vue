<template>
  <Module title="Coding Playground">
    <div
      class="mb-3 text-uppercase title"
    >Warning! Sounds play very loud, make sure you're volume is low when running code.</div>
    <div class="hidden-sm-and-down">
      <v-layout>
        <v-flex xs6>
          <v-textarea
            v-model="code"
            filled
            background-color="white"
            label="Input"
            no-resize
            rows="15"
          ></v-textarea>
        </v-flex>
        <v-flex xs6>
          <v-textarea
            filled
            background-color="white"
            label="Console (Read-Only)"
            no-resize
            rows="15"
            readonly
          ></v-textarea>
        </v-flex>
      </v-layout>
    </div>
    <div class="hidden-md-and-up">
      <v-layout>
        <v-flex xs12>
          <v-textarea
            filled
            background-color="white"
            label="Input"
            v-model="code"
            no-resize
            rows="15"
          ></v-textarea>
          <v-textarea
            filled
            background-color="white"
            label="Console (Read-Only)"
            no-resize
            rows="15"
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
      code: ""
    };
  },
  methods: {
    runCode() {
      this.$emit("run", this.code);
    }
  }
};
</script>

<style scoped>
</style>