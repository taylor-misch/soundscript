<template>
  <Module title="Language Description">
    <div
      class="body-1"
    >Welcome to SoundScript. Coding with SoundScript in this digital sandbox allows the programmer to create sounds and musical patterns through the use of built in notes and self-made functions. The language is built on top of JavaScript and makes use of its built-in sound and AudioContext object.</div>
    <br />
    <div
      class="body-1"
    >This language contains many of the basic features of popular languages like variable assignments, loops (using the REPEAT keyword), if statements, and the ability to perform basic mathematical operations. What sets the language apart are the NOTE and REST types that act as the core of the language. With the NOTE and REST objects, a user can create an endless amount of musical patterns all while just writing a few lines of code. The language also features the ability to change the tempo by chaning the BPM (beats per minute) for the music. Standard note length identifiers for QUARTER notes, HALF notes, WHOLE notes, EIGHTH notes, and SIXTEENTH notes already exist for people familiar with music theory as well as the idea of REPEATs (with a little conditional logic). Using the keywords, grammar, and examples outlined below anyone is free to make musical patterns that are as simple or complex as they see fit. Even if you don't know how to code, with SoundScript, learning the basics can be fun - now it's time to make some music!</div>
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