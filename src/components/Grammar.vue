<template>
  <Module title="Grammar - The Language Structure">
    <div class="body">
      <strong>The Grammar describes how to use SoundScript properly. Examples provide a high level stucture of how keywords should be put together with their parameters. Asterisk symbols (+) mean that you can have one or more of that thing in this section of the example. Parenthesis can be ignored in the examples unless they are for Mathematical Order of Operations or Parameters (as is the case for Method Signifier) - there are no parenthesis around the method name, but you do need the parameter parenthesis afterwards.</strong>
    </div>
    <br />
    <v-expansion-panels multiple>
      <v-expansion-panel v-for="item in items" :key="item.title">
        <v-expansion-panel-header class="title">{{item.title}}</v-expansion-panel-header>
        <v-expansion-panel-content>
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
        title: "Action",
        description:
          "An Action makes the passed in Object perform the specified Action. There is only one Action in SoundScript: PLAY.",
        example: "play (OBJECT)",
        example2: 'See "Playing Notes and Rests" in Examples'
      },
      {
        title: "Conditional",
        description:
          "A Conditional is something that can be evaluated, such as  1 == 2 or 3 < 4. Conditional operators include ==, !=, >, <, >=, and <=. SoundScript does not allow boolean logic currently - true and false keywords have not been implemented.",
        example: "IF x == 4 (STATEMENT+) ELSE (STATEMENT+) END",
        example2: "REPEAT y > 0 (STATMENT+) y = y-1 END"
      },
      {
        title: "Logic",
        description:
          "Logic keywords allow the user to perform actions conditionally. There are four Logic keywords in SoundScript: IF, ELSE, REPEAT, END",
        example: "IF (CONDITIONAL) (STATEMENT+) ELSE (STATEMENT+) END",
        example2: "REPEAT (CONDITIONAL) (STATEMENT+) END"
      },
      {
        title: "Mathematical Operators",
        description:
          "SoundScript allows for use of basic Mathematical Operators, such as +, -, *, /, %, (, ), and =. Math follows order of operations.",
        example: "x = 9 + 3",
        example2: "y = 9 * 3 / 2"
      },
      {
        title: "Method Signifier",
        description:
          "The Method Signifier indicates where a method begins. This is done in SoundScript using the @ symbol. The empty parenthesis after the method name are necessary for both the Method Definition and Method Call.",
        example: "Method Definition: @ (String - Method Name) (Parameters)",
        example2: "Method Call: (String - Method NAME) (Parameters)"
      },
      {
        title: "Number",
        description:
          "Numbers allow you to provide values such as NOTE and REST LENGTH, FREQUENCY in Hz, BPM, or even Conditional Logic. ",
        example: "bpm 240",
        example2: "rest 1000"
      },
      {
        title: "Object",
        description:
          "Objects represent something that the PLAY Action can be performed on. There are only two Objects in SoundScript: NOTE and REST.",
        example: 'note (FREQUENCY) "(WAVE-TYPE)" (LENGTH)',
        example2: "rest (LENGTH)"
      },
      {
        title: "Parameters",
        description:
          'Parameters and SoundScript are like most other languages. In the Method Definition they are represented by a variable - no need for type assignment. In the Method Call they can simply be passed in. See "Parameters in Action" under the Examples tab',
        example: "Method Definition: @ (String - Method Name) (x)",
        example2: "Method Call: (String - Method NAME) (3)"
      },
      {
        title: "SoundScript",
        description:
          "A SoundScript is a collection of Statements which can be successfully run together to create interesting sounds and music combinations.",
        example: 'See "Twinkle Twinkle Little Star" in Examples',
        example2: 'See "Mary Had a Little Lamb" in Examples'
      },
      {
        title: "Statement",
        description:
          "A Statment is a grouping of SoundScript keywords, such as a keyword with it's given parameters. This could be as simple as a BPM defintion, an action followed by its object, or a method defintion. Any 'complete body of code' evaluates back to a Statement.",
        example: "bpm 500",
        example2: 'play note 293 "triangle" WHOLE'
      },
      {
        title: "String",
        description:
          "A String is a group of characters that do not make up a keyword in SoundScript. Strings do not have to be surrounded by quotes except in the case of the WAVE-TYPE in note defintion. The method name is an example of a String. Strings do not provide a lot of functionality in SoundScript and are rarely used outside of the previous two situations described",
        example: "@ exampleStringMethodName ()",
        example2: 'note 293 "square" QUARTER'
      },
      {
        title: "Variable",
        description:
          "SoundScript allows for Variable assignment. One of the best use cases is to assign notes of a scale to their respective note names. This also allows for easier Conditional evaluation and Mathematical operations",
        example: 'c4 = note 262 "sawtooth" SIXTEENTH',
        example2: "x = 36 - (10*3)"
      }
    ]
  })
};
</script>

<style scoped>
</style>