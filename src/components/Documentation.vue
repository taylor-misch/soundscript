<template>
  <Module title="Documentation">
    <!-- <v-expansion-panels multiple>
      <v-expansion-panel>
        <v-expansion-panel-header class="title">"hellow Test</v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-expansion-panels multiple>
            <v-expansion-panel>
              <v-expansion-panel-header class="title">Hello inners</v-expansion-panel-header>
              <v-expansion-panel-content>I'm small text</v-expansion-panel-content>
              <v-expansion-panel-header class="title">Hello inners 2</v-expansion-panel-header>
              <v-expansion-panel-content>I'm small text</v-expansion-panel-content>
              <v-expansion-panel-header class="title">Hello inners 3</v-expansion-panel-header>
              <v-expansion-panel-content>I'm small text</v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>-->

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
        parameters: "FREQUENCY, WAVE-TYPE, LENGTH",
        description:
          "The NOTE object is one of the building blocks of SoundScript.",
        example: 'note 261 "sine" QUARTER'
      },
      { title: "REST", type: "String", description: "a steady beat" },
      {
        title: "BPM",
        type: "Number",
        parameters: "",
        description:
          "The BPM designates the Beats Per Minute of your SoundScript code.",
        example: 'note 261 "sine" QUARTER'
      },
      {
        title: "PLAY",
        type: "String",
        parameters: "",
        description: "a steady beat",
        example: 'note 261 "sine" QUARTER'
      },
      {
        title: "REPEAT",
        type: "String",
        parameters: "",
        description: "this is a note",
        example: 'note 261 "sine" QUARTER'
      },
      {
        title: "IF",
        type: "String",
        description: "a steady beat",
        example: 'note 261 "sine" QUARTER'
      },
      {
        title: "ELSE",
        type: "String",
        parameters: "",
        description: "this is a note",
        example: 'note 261 "sine" QUARTER'
      },
      {
        title: "END",
        type: "String",
        parameters: "",
        description: "a steady beat",
        example: 'note 261 "sine" QUARTER'
      },
      {
        title: "PRINT",
        type: "String",
        parameters: "",
        description: "this is a note",
        example: 'note 261 "sine" QUARTER'
      },
      {
        title: "AT (@)",
        type: "String",
        parameters: "",
        description: "a steady beat",
        example: 'note 261 "sine" QUARTER'
      },
      {
        title: "FREQUENCY",
        type: "String",
        parameters: "",
        description: "a steady beat",
        example: 'note 261 "sine" QUARTER'
      },
      {
        title: "WAVE-TYPE",
        type: "String",
        parameters: "",
        description:
          'The WAVE-TYPE describes the pattern of the wave. There are four types: sine, square, sawtooth, triangle. When signifying a wave from in a note, you must surround it with quotes (" ")',
        example: 'note 261 "sine" QUARTER'
      },
      {
        title: "LENGTH",
        type: "String",
        parameters: "",
        description:
          "Object: The LENGTH of a note, as specified by the standard music notes: SIXTEENTH, EIGHTH, QUARTER, HALF, WHOLE",
        example: 'note 261 "sine" QUARTER'
      },
      {
        title: "SIXTEENTH",
        type: "Number",
        parameters: "",
        description:
          "The LENGTH of a note, as specified by the standard music notes: SIXTEENTH, EIGHTH, QUARTER, HALF, WHOLE",
        example: 'note 261 "sine" QUARTER'
      },
      {
        title: "EIGHTH",
        type: "Number",
        parameters: "",
        description:
          "The LENGTH of a note, as specified by the standard music notes: SIXTEENTH, EIGHTH, QUARTER, HALF, WHOLE",
        example: 'note 261 "sine" QUARTER'
      },
      {
        title: "QUARTER",
        type: "Number",
        parameters: "",
        description:
          "The LENGTH of a note, as specified by the standard music notes: SIXTEENTH, EIGHTH, QUARTER, HALF, WHOLE",
        example: 'note 261 "sine" QUARTER'
      },
      {
        title: "HALF",
        type: "Number",
        parameters: "",
        description:
          "The LENGTH of a note, as specified by the standard music notes: SIXTEENTH, EIGHTH, QUARTER, HALF, WHOLE",
        example: 'note 261 "sine" QUARTER'
      },
      {
        title: "WHOLE",
        type: "Number",
        parameters: "",
        description:
          "The LENGTH of a note, as specified by the standard music notes: SIXTEENTH, EIGHTH, QUARTER, HALF, WHOLE",
        example: 'note 261 "sine" QUARTER'
      }
    ]
  })
};
</script>

<style scoped>
</style>