<template>
  <Module title="Documentation">
    <v-expansion-panels multiple>
      <v-expansion-panel v-for="item in items" :key="item.title">
        <v-expansion-panel-header class="title">
          {{item.title}}&nbsp;-&nbsp;
          <i>({{item.type}})</i>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <strong>Parameters:</strong>
          {{item.parameters}}
          <br />
          <strong>Description:</strong>
          {{item.description}}
          <br />
          <strong>Example:</strong>
          {{item.example}}
        </v-expansion-panel-content>
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
        title: "NOTE",
        type: "Object",
        parameters: "FREQUENCY, WAVE-TYPE, NUMBER (see LENGTH)",
        description:
          "The NOTE object is one of the building blocks of SoundScript.",
        example: 'note 262 "sine" QUARTER'
      },
      {
        title: "REST",
        type: "Object - (Not working)",
        parameters: "NUMBER (see LENGTH)",
        description:
          "The REST object allows you to create pauses in between the notes you play.",
        example: "rest QUARTER or rest 500"
      },
      {
        title: "BPM",
        type: "Number (not working)",
        parameters: "NUMBER",
        description:
          "The BPM designates the Beats Per Minute of your SoundScript code. In base SoundScript, the standard beats per minute is 120 - meaning you could play 120 QUARTER length notes in a minute",
        example: "BPM 250"
      },
      {
        title: "PLAY",
        type: "Action",
        parameters: "NOTE",
        description:
          "The PLAY action allows the passed in note's value to render through sound. ",
        example: 'PLAY note 261 "sine" QUARTER'
      },
      {
        title: "REPEAT",
        type: "Action (Not working)",
        parameters: "",
        description: "this is a note",
        example: 'note 261 "sine" QUARTER'
      },
      {
        title: "IF",
        type: "LOGIC (Note working)",
        parameters: "N/A",
        description:
          "The IF Logic gate allows you to enter certain areas of your code only if a condition is met",
        example:
          'IF play note 262 "sine" QUARTER else play note 293 "sine" QUARTER end'
      },
      {
        title: "ELSE",
        type: "LOGIC (Note working)",
        parameters: "N/A",
        description:
          "The ELSE logic gate signifies what will happen if the condition in the IF logic gate isn't successful",
        example:
          'IF play note 262 "sine" QUARTER else play note 293 "sine" QUARTER end'
      },
      {
        title: "END",
        type: "LOGIC",
        parameters: "N/A",
        description:
          "The END logic gate is used to signify the stopping point of either an IF/ELSE statement or an @ method",
        example:
          'IF play note 262 "sine" QUARTER else play note 293 "sine" QUARTER end'
      },
      {
        title: "AT (@)",
        type: "METHOD SIGNIFIER",
        parameters: "method name",
        description:
          'The @ symbol - pronounced "AT" allows for the creation of simple methods - blocks of code that can be run by simply typing their name. All code following the method name defintion until the END keyword will be included as a part of the method. To call a method, simply type out the method name followed by "()"',
        example:
          "Method definition: @ twinkleTwinkleChorus (), Method Call: twinkleTwinkleChorus ()"
      },
      {
        title: "FREQUENCY",
        type: "Number",
        parameters: "N/A",
        description:
          "The frequency of the sound determines the pitch that you will hear when the note is played - the higher the frequency, the higher the sound. For example, middle C on a piano is 262 Hz. FREQUENCY is the 1st parameter in a note object. In the example below, we are creating a note that has the same frequency as middle C.",
        example: 'note 262 "sine" QUARTER'
      },
      {
        title: "WAVE-TYPE",
        type: "String",
        parameters: "N/A",
        description:
          'The WAVE-TYPE describes the pattern of the wave. There are four types: sine, square, sawtooth, triangle. When signifying a wave from in a note, you must surround it with quotes (" "). WAVE-TYPE is the 2nd parameter in a note object. In the example below, the note is using a sine wave. The sine and triangle are the smoother sounds where as the sawtooth and square have a heavier "bite" to them',
        example: 'note 262 "sine" QUARTER'
      },
      {
        title: "LENGTH",
        type: "Number",
        parameters: "N/A",
        description:
          "Object: The LENGTH of a note, as specified by the standard music notes: SIXTEENTH, EIGHTH, QUARTER, HALF, WHOLE. The LENGTH is the 3rd parameter of the NOTE object. In the example below, 500 is the length - which is equivalent to a QUARTER note in base SoundScript",
        example: 'note 262 "sine" 500'
      },
      {
        title: "SIXTEENTH",
        type: "Number",
        parameters: "N/A",
        description:
          "The LENGTH of a note, as specified by the standard music notes: SIXTEENTH, EIGHTH, QUARTER, HALF, WHOLE. This is a constant value determined by your BPM. A SIXTEENTH note will always be one quarter the length of a QUARTER note - or 1/4 beats. In base SoundScript, without the BPM changed a SIXTEENTH note is the same as the value 125.",
        example: 'note 262 "sine" SIXTEENTH'
      },
      {
        title: "EIGHTH",
        type: "Number",
        parameters: "N/A",
        description:
          "The LENGTH of a note, as specified by the standard music notes: SIXTEENTH, EIGHTH, QUARTER, HALF, WHOLE. This is a constant value determined by your BPM. An EIGHTH note will always be half the length of a QUARTER note - or 1/2 beats. In base SoundScript, without the BPM changed an EIGHTH note is the same as the value 250.",
        example: 'note 262 "sine" EIGHTH'
      },
      {
        title: "QUARTER",
        type: "Number",
        parameters: "N/A",
        description:
          "The LENGTH of a note, as specified by the standard music notes: SIXTEENTH, EIGHTH, QUARTER, HALF, WHOLE. This is a constant value determined by your BPM. A QUARTER note will always represent a single beat. In base SoundScript, without the BPM changed a QUARTER note is the same as the value 500.",
        example: 'note 262 "sine" QUARTER'
      },
      {
        title: "HALF",
        type: "Number",
        parameters: "N/A",
        description:
          "The LENGTH of a note, as specified by the standard music notes: SIXTEENTH, EIGHTH, QUARTER, HALF, WHOLE. This is a constant value determined by your BPM. A HALF note will always be twice the length of a QUARTER note - or 2 beats. In base SoundScript, without the BPM changed a HALF note is the same as the value 1000.",
        example: 'note 262 "sine" HALF'
      },
      {
        title: "WHOLE",
        type: "Number",
        parameters: "N/A",
        description:
          "The LENGTH of a note, as specified by the standard music notes: SIXTEENTH, EIGHTH, QUARTER, HALF, WHOLE. This is a constant value determined by your BPM. A WHOLE note will always be four times the length of a QUARTER note - or 4 beats. In base SoundScript, without the BPM changed a WHOLE note is the same as the value 2000.",
        example: 'note 262 "sine" WHOLE'
      }
    ]
  })
};
</script>

<style scoped>
</style>