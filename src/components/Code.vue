<template>
  <Module title="Coding Playground">
    <div
      class="mb-3 text-uppercase title"
    >Warning! Sounds play very loud, make sure you're volume is low when running code. The language is only supported by the Chrome browser and does not run asynchronously, so your browser will hang up till the song is completed.</div>
    <v-layout>
      <v-flex lg6 md8 xs12>
        <v-textarea
          v-model="code"
          filled
          background-color="white"
          label="Input"
          no-resize
          rows="15"
        ></v-textarea>
      </v-flex>
    </v-layout>
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