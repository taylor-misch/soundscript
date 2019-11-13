<template>
  <Module title="Examples">
    <div class="body">
      <strong>Here are some samples that demonstrates the core functionality of SoundScript. Copy and paste it into the playground to hear the music.</strong>
    </div>
    <br />
    <v-expansion-panels>
      <v-expansion-panel v-for="item in items" :key="item.title">
        <v-expansion-panel-header class="title">{{item.title}}</v-expansion-panel-header>
        <v-expansion-panel-content v-for="line in item.lines" :key="line.index">{{line.lineText}}</v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </Module>
</template>

<script>
import Module from "@/components/Module";
export default {
  components: {
    Module
  },
  data: () => ({
    items: [
      {
        title: "Twinkle Twinkle Little Star",
        description: "",
        lines: [
          { lineText: 'c4 = note 262 "sine" QUARTER' },
          { lineText: 'd4 = note 294 "sine" QUARTER' },
          { lineText: 'e4 = note 330 "sine" QUARTER' },
          { lineText: 'f4 = note 350 "sine" QUARTER' },
          { lineText: 'g4 = note 393 "sine" QUARTER' },
          { lineText: 'a4 = note 440 "sine" QUARTER' },
          { lineText: "@ twinkleTwinkleChorus ()" },
          { lineText: "play c4" },
          { lineText: "play c4" },
          { lineText: "play g4" },
          { lineText: "play g4" },
          { lineText: "play a4" },
          { lineText: "play a4" },
          { lineText: 'play note 393 "sine" HALF' },
          { lineText: "play f4" },
          { lineText: "play f4" },
          { lineText: "play e4" },
          { lineText: "play e4" },
          { lineText: "play d4" },
          { lineText: "play d4" },
          { lineText: 'play note 262 "sine" HALF' },
          { lineText: "end" },
          { lineText: "@ twinkleTwinkleVerse1 ()" },
          { lineText: "play g4" },
          { lineText: "play g4" },
          { lineText: "play f4" },
          { lineText: "play f4" },
          { lineText: "play e4" },
          { lineText: "play e4" },
          { lineText: 'play note 294 "sine" HALF' },
          { lineText: "end" },
          { lineText: "@ twinkleTwinkleVerse2 ()" },
          { lineText: "play g4" },
          { lineText: "play g4" },
          { lineText: "play f4" },
          { lineText: "play f4" },
          { lineText: "play e4" },
          { lineText: 'play note 330 "sine" SIXTEENTH' },
          { lineText: 'play note 350 "sine" SIXTEENTH' },
          { lineText: 'play note 330 "sine" SIXTEENTH' },
          { lineText: "play e4" },
          { lineText: "play d4" },
          { lineText: "end" },
          { lineText: "twinkleTwinkleChorus ()" },
          { lineText: "twinkleTwinkleVerse1 ()" },
          { lineText: "twinkleTwinkleVerse2 ()" },
          { lineText: "twinkleTwinkleChorus ()" }
        ]
      },
      {
        title: "Mary Had a Little Lamb",
        description: "",
        lines: [
          { lineText: "g4Frequency = 393" },
          { lineText: "a4Frequency = 440" },
          { lineText: "b4Frequency = 494" },
          { lineText: "d5Frequency = 587" },
          { lineText: 'g4 = note g4Frequency "sine" QUARTER' },
          { lineText: 'a4 = note a4Frequency "sine" QUARTER' },
          { lineText: 'b4 = note b4Frequency "sine" QUARTER' },
          { lineText: 'd5 = note d5Frequency "sine" QUARTER' },
          { lineText: "@ start ()" },
          { lineText: "play b4" },
          { lineText: "play a4" },
          { lineText: "play g4" },
          { lineText: "play a4" },
          { lineText: "play b4" },
          { lineText: "end" },
          { lineText: "@ middle ()" },
          { lineText: "play b4" },
          { lineText: 'play note b4Frequency "sine" HALF' },
          { lineText: "play a4" },
          { lineText: "play a4" },
          { lineText: 'play note a4Frequency "sine" HALF' },
          { lineText: "play b4" },
          { lineText: "play d5" },
          { lineText: 'play note d5Frequency "sine" HALF' },
          { lineText: "end" },
          { lineText: "@ finish ()" },
          { lineText: "play b4" },
          { lineText: "play b4" },
          { lineText: "play b4" },
          { lineText: "play a4" },
          { lineText: "play a4" },
          { lineText: "play b4" },
          { lineText: "play a4" },
          { lineText: 'play note g4Frequency "sine" HALF' },
          { lineText: "end" },
          { lineText: "start ()" },
          { lineText: "middle ()" },
          { lineText: "start ()" },
          { lineText: "finish ()" }
        ]
      },
      {
        title: "Parameters in Action",
        lines: [
          { lineText: "@ parameterSuccess (x)" },
          { lineText: 'if x == 3 play note 440 "triangle" QUARTER end' },
          { lineText: "end" },
          { lineText: "@ parameterFailure (x)" },
          { lineText: 'if x !=3 play note 393 "triangle" QUARTER end' },
          { lineText: "end" },
          { lineText: "parameterSuccess (3)" },
          { lineText: "parameterFailure (3)" }
        ]
      },
      {
        title: "Repeat Loops",
        lines: [
          { lineText: "x = 3" },
          { lineText: "repeat x > 0" },
          { lineText: 'play note 262 "triangle" HALF' },
          { lineText: 'play note 294 "sine" HALF' },
          { lineText: "x = x -1" },
          { lineText: "end" }
        ]
      },
      {
        title: "If/Else Blocks",
        lines: [
          { lineText: "x = 4" },
          { lineText: "repeat x > 0" },
          { lineText: "if x != 3" },
          { lineText: 'play note 262 "sine" QUARTER' },
          { lineText: 'play note 440 "sine" QUARTER' },
          { lineText: "if x == 1" },
          { lineText: 'play note 523 "sine" HALF' },
          { lineText: "end" },
          { lineText: "play rest 500" },
          { lineText: "else" },
          { lineText: 'play note 393 "square" HALF' },
          { lineText: "play rest 500" },
          { lineText: "end" },
          { lineText: "x = x -1" },
          { lineText: "end" }
        ]
      },
      {
        title: "Methods",
        lines: [
          { lineText: 'c4 = note 262 "sine" QUARTER' },
          { lineText: 'd4 = note 294 "sine" QUARTER' },
          { lineText: 'e4 = note 330 "sine" QUARTER' },
          { lineText: 'f4 = note 350 "sine" QUARTER' },
          { lineText: 'g4 = note 393 "sine" QUARTER' },
          { lineText: 'a4 = note 440 "sine" QUARTER' },
          { lineText: 'b4 = note 494 "sine" QUARTER' },
          { lineText: 'c5 = note 523 "sine" QUARTER' },
          { lineText: "@ scaleUp ()" },
          { lineText: "play c4" },
          { lineText: "play d4" },
          { lineText: "play e4" },
          { lineText: "play f4" },
          { lineText: "play g4" },
          { lineText: "play a4" },
          { lineText: "play b4" },
          { lineText: "play c5" },
          { lineText: "end" },
          { lineText: "@ scaleDown ()" },
          { lineText: "play c5" },
          { lineText: "play b4" },
          { lineText: "play a4" },
          { lineText: "play g4" },
          { lineText: "play f4" },
          { lineText: "play e4" },
          { lineText: "play d4" },
          { lineText: "play c4" },
          { lineText: "end" },
          { lineText: "@ restForGivenLength (length)" },
          { lineText: "play rest length" },
          { lineText: "end" },
          { lineText: "@ playNoteWithGivenFrequency (frequency)" },
          { lineText: 'play note frequency "sine" QUARTER' },
          { lineText: "end" },
          { lineText: "scaleUp ()" },
          { lineText: "scaleDown ()" },
          { lineText: "restForGivenLength (1000)" },
          { lineText: "playNoteWithGivenFrequency (523)" }
        ]
      },
      {
        title: "Playing Notes and Rests",
        lines: [
          { lineText: 'c4 = note 262 "sine" QUARTER' },
          { lineText: "play c4" },
          { lineText: "play rest QUARTER" },
          { lineText: 'play note 262 "sine" QUARTER' },
          { lineText: "play rest 500" },
          { lineText: 'play note 262 "square" QUARTER' },
          { lineText: 'play note 262 "triangle" QUARTER' },
          { lineText: 'play note 262 "sawtooth" QUARTER' },
          { lineText: 'play note 262 "sine" QUARTER' },
          { lineText: "play rest WHOLE" },
          { lineText: 'play note 523 "sine" WHOLE' },
          { lineText: 'play note 523 "sine" 2000' }
        ]
      },
      {
        title: "Changing the BPM",
        lines: [
          { lineText: 'c4 = note 262 "sine" HALF' },
          { lineText: "play c4" },
          { lineText: 'play note 294 "sine" HALF' },
          { lineText: "bpm 240" },
          { lineText: "play c4" },
          { lineText: 'play note 294 "sine" HALF' }
        ]
      }
    ]
  })
};
</script>

