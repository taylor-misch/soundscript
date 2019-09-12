<template>
  <v-app>
    <v-app-bar dark app>
      <v-toolbar-title class="headline red--text text--lighten-1">
        <span>
          <strong>SoundScript</strong>
        </span>
      </v-toolbar-title>
    </v-app-bar>

    <v-content app class="grey lighten-2">
      <Branding />
      <v-container>
        <v-layout>
          <v-flex xs12>
            <Language />
            <Grammar />
            <Code v-on:run="compileCode" />
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
    <v-footer app dark absolute>
      <v-col class="text-center" cols="12">
        {{ new Date().getFullYear() }} —
        Created by Taylor Misch and Rachel Korkowski
      </v-col>
    </v-footer>
  </v-app>
</template>

<script>
import Code from "@/components/Code";
import Language from "@/components/Language";
import Grammar from "@/components/Grammar";
import Branding from "@/components/Branding";
import lexer from "@/language/lexer.js";
import parser from "@/language/parser.js";

export default {
  name: "App",
  components: {
    Code,
    Language,
    Grammar,
    Branding
  },
  methods: {
    compileCode: function(code) {
      this.evaluate(code);
    },
    evaluate: function(code) {
      var source = code;
      var tokens = lexer.lex(source);
      var ast = parser.parse(tokens);
      //maybe set default lengths for each note here?
      var env = {
        SIXTEENTH: 60000 / 120 / 4,
        EIGHTH: 60000 / 120 / 2,
        QUARTER: 60000 / 120,
        HALF: (60000 / 120) * 2,
        WHOLE: (60000 / 120) * 4
      };
      ast.evaluate(env);
    }
  }
};
</script>
