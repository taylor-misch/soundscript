<template>
  <Module title="Example">
    <div class="body">
      <strong>Here is a sample song that demonstrates the core functionality of SoundScript. Copy and paste it into the playground to hear the music.</strong>
    </div>
    <div class="body-4">
      <br />c4 = note 261 "sine" QUARTER
      <br />d4 = note 293 "sine" QUARTER
      <br />e4 = note 329 "sine" QUARTER
      <br />f4 = note 349 "sine" QUARTER
      <br />g4 = note 392 "sine" QUARTER
      <br />a4 = note 440 "sine" QUARTER
      <br />@ twinkleTwinkleChorus ()
      <br />play c4
      <br />play c4
      <br />play g4
      <br />play g4
      <br />play a4
      <br />play a4
      <br />play note 392 "sine" HALF
      <br />play f4
      <br />play f4
      <br />play e4
      <br />play e4
      <br />play d4
      <br />play d4
      <br />play note 261 "sine" HALF
      <br />end
      <br />@ twinkleTwinkleVerse1 ()
      <br />play g4
      <br />play g4
      <br />play f4
      <br />play f4
      <br />play e4
      <br />play e4
      <br />play note 293 "sine" HALF
      <br />end
      <br />@ twinkleTwinkleVerse2 ()
      <br />play g4
      <br />play g4
      <br />play f4
      <br />play f4
      <br />play e4
      <br />play note 329 "sine" SIXTEENTH
      <br />play note 349 "sine" SIXTEENTH
      <br />play note 329 "sine" SIXTEENTH
      <br />play e4
      <br />play d4
      <br />end
      <br />twinkleTwinkleChorus ()
      <br />twinkleTwinkleVerse1 ()
      <br />twinkleTwinkleVerse2 ()
      <br />twinkleTwinkleChorus ()
    </div>
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