<template>
  <Module title="Grammar - The Language Structure">
    <v-expansion-panels multiple>
      <v-expansion-panel v-for="item in items" :key="item.title">
        <v-expansion-panel-header class="title">{{item.title}}</v-expansion-panel-header>
        <v-expansion-panel-content>
          <strong>Description:</strong>
          {{item.description}}
          <br />
          <strong>Example:</strong>
          {{item.example}}
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
    <!-- <div class="body-1">
      <ul>
        <li>program : statement\* EOF</li>
      </ul>
      <br />
      <ul>
        <li>statement : NOTE expr expr expr</li>
        <li>REST expr</li>
        <li>BPM expr</li>
        <li>PLAY expr</li>
        <li>REPEAT expr statement* END</li>
        <li>IDENTIFIER ASSIGN expr</li>
        <li>IF expr statement* ELSE statement* END</li>
        <li>IF expr statement* ELSE statement* END</li>
        <li>@ IDENTIFIER LEFT_PARENTHESIS IDENTIFIER* RIGHT_PARENTHESIS statement* END</li>
        <li>IDENTIFIER LEFT_PARENTHESIS expr* RIGHT_PARENTHESIS</li>
      </ul>
      <br />
      <ul>
        <li>expr : INTEGER</li>
        <li>expr (ASTERISK|DIVIDE|MOD) expr</li>
        <li>expr (PLUS|MINUS) expr</li>
        <li>expr (MORE|MORE_OR_EQUAL|LESS_OR_EQUAL|EQUAL|NOT_EQUAL) expr</li>
      </ul>
    </div>-->
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
        title: "Object",
        description:
          "The NOTE object is one of the building blocks of SoundScript.",
        example: 'note 262 "sine" QUARTER'
      },
      {
        title: "Action",
        description:
          "The REST object allows you to create pauses in between the notes you play.",
        example: "rest QUARTER or rest 500"
      },
      {
        title: "Method Signifier",
        description:
          "The PLAY action allows the passed in note or rest value to render through sound. ",
        example: 'PLAY note 262 "sine" QUARTER or PLAY rest QUARTER'
      },
      {
        title: "Logic",
        description:
          "The PLAY action allows the passed in note or rest value to render through sound. ",
        example: 'PLAY note 262 "sine" QUARTER or PLAY rest QUARTER'
      },
      {
        title: "String",
        description:
          "The PLAY action allows the passed in note or rest value to render through sound. ",
        example: 'PLAY note 262 "sine" QUARTER or PLAY rest QUARTER'
      },
      {
        title: "Number",
        description:
          "The PLAY action allows the passed in note or rest value to render through sound. ",
        example: 'PLAY note 262 "sine" QUARTER or PLAY rest QUARTER'
      },
      {
        title: "Expression",
        description:
          "The PLAY action allows the passed in note or rest value to render through sound. ",
        example: 'PLAY note 262 "sine" QUARTER or PLAY rest QUARTER'
      },
      {
        title: "Statement",
        description:
          "The PLAY action allows the passed in note or rest value to render through sound. ",
        example: 'PLAY note 262 "sine" QUARTER or PLAY rest QUARTER'
      },
      {
        title: "Identifier",
        description:
          "The PLAY action allows the passed in note or rest value to render through sound. ",
        example: 'PLAY note 262 "sine" QUARTER or PLAY rest QUARTER'
      }
    ]
  })
};
</script>

<style scoped>
</style>