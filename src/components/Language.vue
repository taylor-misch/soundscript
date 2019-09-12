<template>
  <Module title="Language Description">
    <div
      class="body-1"
    >Welcome to SoundScript. Coding with SoundScript in this digital sandbox allows the programmer to create sounds and musical patterns through the use of built in notes and self-made functions. The language is built on top of JavaScript and makes use of its built-in sound and AudioContext object.</div>
    <br />
    <div
      class="body-1"
    >This language contains many of the basic features of popular languages like loops and if statements, but we have added specific types like the NOTE and REST types that act as the core of the language. When the user sets the beats per minute for the music, identifiers for quarter notes, half notes, whole notes, eigth notes, and sixteenth notes will automatically be created and set to the correct number of milliseconds for the note. Using these basic types the programmer is free to make musical patterns that are as simple or complex as they see fit.</div>
  </Module>
</template>

<script>
import Module from "@/components/Module";
export default {
  components: {
    Module
  }
};
</script>

<style scoped>
</style>