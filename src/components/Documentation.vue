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
          <strong>Example 1:</strong>
          {{item.example}}
          <br />
          <strong>Example 2:</strong>
          {{item.example2}}
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
        example: 'note 262 "sine" QUARTER',
        example2: 'note 440 "square" 1000'
      },
      {
        title: "REST",
        type: "Object",
        parameters: "NUMBER (see LENGTH)",
        description:
          "The REST object allows you to create pauses in between the notes you play.",
        example: "rest QUARTER",
        example2: "rest 500"
      },

      {
        title: "PLAY",
        type: "Action",
        parameters: "NOTE or REST",
        description:
          "The PLAY action allows the passed in note or rest value to render through sound. ",
        example: 'play note 262 "sine" QUARTER ',
        example2: "play rest QUARTER"
      },
      {
        title: "@",
        type: "Method Signifier",
        parameters: "Method Name, Parameters",
        description:
          'The @ symbol - pronounced "AT" allows for the creation of simple methods - blocks of code that can be run by simply typing their name. All code following the method name defintion until the END keyword will be included as a part of the method. To call a method, simply type out the method name followed by "()"',
        example: "Method definition: @ twinkleTwinkleChorus ()",
        example2: "Method Call: twinkleTwinkleChorus ()"
      },
      {
        title: "REPEAT",
        type: "Logic",
        parameters: "Expression (see Grammar), Statement (see Grammar)",
        description:
          "The REPEAT action is SoundScripts version of a while loop. It allows the code to repeat sections based on a conditional that you evaluate by. In the example below, the code is repeated 3 times because x is decremented by 1 each time it runs.",
        example: 'x = 3 repeat x > 0 play note 262 "sine" QUARTER x = x -1 end',
        example2: 'see "Repeat Loops" in Examples'
      },
      {
        title: "IF",
        type: "Logic",
        parameters: "Expression (see Grammar), Statement (see Grammar)",
        description:
          "The IF Logic gate allows you to enter certain areas of your code only if a condition is met",
        example:
          'IF 3 == 3 play note 262 "sine" QUARTER else play note 293 "sine" QUARTER end',
        example2: 'see "IF/ELSE Blocks" in Examples'
      },
      {
        title: "ELSE",
        type: "Logic",
        parameters: "Statement (see Grammar)",
        description:
          "The ELSE logic gate signifies what will happen if the condition in the IF logic gate isn't successful",
        example:
          'IF y == 3 play note 262 "sine" QUARTER else play note 293 "sine" QUARTER end',
        example2: 'see "IF/ELSE Blocks" in Examples'
      },
      {
        title: "END",
        type: "Logic",
        parameters: "N/A",
        description:
          "The END logic gate is used to signify the stopping point of either an IF/ELSE statement, a REPEAT or an @ method",
        example:
          'IF  x >= 2 play note 262 "sine" QUARTER else play note 293 "sine" QUARTER end',
        example2: 'x = 3 repeat x > 0 play note 262 "sine" QUARTER x = x -1 end'
      },
      {
        title: "WAVE-TYPE",
        type: "String",
        parameters: "N/A",
        description:
          'The WAVE-TYPE describes the pattern of the wave. There are four types: sine, square, sawtooth, triangle. When signifying a wave from in a note, you must surround it with quotes (" "). WAVE-TYPE is the 2nd parameter in a note object. In the example below, the note is using a sine wave. The sine and triangle are the smoother sounds where as the sawtooth and square have a heavier "bite" to them',
        example: 'note 262 "sine" QUARTER',
        example2: 'note 330 "sawtooth" 250'
      },
      {
        title: "FREQUENCY",
        type: "Number",
        parameters: "N/A",
        description:
          "The frequency of the sound determines the pitch that you will hear when the note is played - the higher the frequency, the higher the sound. For example, middle C on a piano is 262 Hz. FREQUENCY is the 1st parameter in a note object. In the example below, we are creating a note that has the same frequency as middle C.",
        example: 'note 262 "triangle" QUARTER',
        example2: 'note 440 "square" 1000'
      },
      {
        title: "BPM",
        type: "Number",
        parameters: "NUMBER",
        description:
          "The BPM designates the Beats Per Minute of your SoundScript code. In base SoundScript, the standard beats per minute is 120 - meaning you could play 120 QUARTER length notes in a minute. Be aware, if you set a note to a variable prior to changing the BPM, it will remain unchanged and will not reflect the change in BPM.",
        example: "bpm 240",
        example2: 'see "Changing the BPM" in examples'
      },

      {
        title: "LENGTH",
        type: "Number",
        parameters: "N/A",
        description:
          "Object: The LENGTH of a note, as specified by the standard music notes: SIXTEENTH, EIGHTH, QUARTER, HALF, WHOLE. The LENGTH is the 3rd parameter of the NOTE object and the 1st parameter in the REST object. In the example below, 500 is the length of the note and 250 is the length of the rest.",
        example: 'note 262 "sine" 500',
        example2: "rest 250"
      },
      {
        title: "SIXTEENTH",
        type: "Number",
        parameters: "N/A",
        description:
          "The LENGTH of a note, as specified by the standard music notes: SIXTEENTH, EIGHTH, QUARTER, HALF, WHOLE. This is a constant value determined by your BPM. A SIXTEENTH note will always be one quarter the length of a QUARTER note - or 1/4 beats. In base SoundScript, without the BPM changed a SIXTEENTH note is the same as the value 125.",
        example: 'note 294 "sine" SIXTEENTH',
        example2: "rest SIXTEENTH"
      },
      {
        title: "EIGHTH",
        type: "Number",
        parameters: "N/A",
        description:
          "The LENGTH of a note, as specified by the standard music notes: SIXTEENTH, EIGHTH, QUARTER, HALF, WHOLE. This is a constant value determined by your BPM. An EIGHTH note will always be half the length of a QUARTER note - or 1/2 beats. In base SoundScript, without the BPM changed an EIGHTH note is the same as the value 250.",
        example: 'note 262 "square" EIGHTH',
        example2: "rest EIGHTH"
      },
      {
        title: "QUARTER",
        type: "Number",
        parameters: "N/A",
        description:
          "The LENGTH of a note, as specified by the standard music notes: SIXTEENTH, EIGHTH, QUARTER, HALF, WHOLE. This is a constant value determined by your BPM. A QUARTER note will always represent a single beat. In base SoundScript, without the BPM changed a QUARTER note is the same as the value 500.",
        example: 'note 330 "triangle" QUARTER',
        example2: "rest QUARTER"
      },
      {
        title: "HALF",
        type: "Number",
        parameters: "N/A",
        description:
          "The LENGTH of a note, as specified by the standard music notes: SIXTEENTH, EIGHTH, QUARTER, HALF, WHOLE. This is a constant value determined by your BPM. A HALF note will always be twice the length of a QUARTER note - or 2 beats. In base SoundScript, without the BPM changed a HALF note is the same as the value 1000.",
        example: 'note 440 "sawtooth" HALF',
        example2: "rest HALF"
      },
      {
        title: "WHOLE",
        type: "Number",
        parameters: "N/A",
        description:
          "The LENGTH of a note, as specified by the standard music notes: SIXTEENTH, EIGHTH, QUARTER, HALF, WHOLE. This is a constant value determined by your BPM. A WHOLE note will always be four times the length of a QUARTER note - or 4 beats. In base SoundScript, without the BPM changed a WHOLE note is the same as the value 2000.",
        example: 'note 262 "sine" WHOLE',
        example2: "rest WHOLE"
      }
    ]
  })
};
</script>

<style scoped>
</style>