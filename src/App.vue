<template>
  <v-app>
    <!-- <v-app-bar dark app>
      <v-toolbar-title class="headline red--text text--lighten-1">
        <span>
          <strong>SoundScript</strong>
        </span>
      </v-toolbar-title>
    </v-app-bar>-->

    <v-content app class="grey lighten-2">
      <Branding />
      <v-container>
        <v-layout>
          <v-flex xs12>
            <Language />
            <Code v-on:run="compileCode" />

            <v-tabs
              v-model="tab"
              class="elevation-2"
              dark
              :centered="centered"
              :grow="grow"
              :vertical="vertical"
              :right="right"
              :prev-icon="prevIcon ? 'mdi-arrow-left-bold-box-outline' : undefined"
              :next-icon="nextIcon ? 'mdi-arrow-right-bold-box-outline' : undefined"
              :icons-and-text="icons"
            >
              <v-tabs-slider></v-tabs-slider>
              <v-tab
                class="red--text text--lighten-1"
                v-for="tab in tabs"
                :key="tab.tabName"
                :href="`#${tab.tabName}`"
              >
                {{ tab.tabName }}
                <v-icon v-if="icons">mdi-phone</v-icon>
              </v-tab>
              <v-tab-item v-for="tab in tabs" :key="tab.tabName" :value="tab.tabName">
                <v-card flat tile color="grey lighten-3">
                  <div v-if="tab.tabName === 'Documentation'">
                    <Documentation />
                  </div>
                  <div v-else-if="tab.tabName === 'Grammar'">
                    <Grammar />
                  </div>
                  <div v-else-if="tab.tabName === 'Example'">
                    <Example />
                  </div>
                </v-card>
              </v-tab-item>
            </v-tabs>
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
import Documentation from "@/components/Documentation";
import Example from "@/components/Example";
import lexer from "@/language/lexer.js";
import parser from "@/language/parser.js";

export default {
  name: "App",
  components: {
    Code,
    Language,
    Grammar,
    Branding,
    Documentation,
    Example
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
  },
  data: () => ({
    tab: null,
    icons: false,
    centered: false,
    grow: false,
    vertical: false,
    prevIcon: false,
    nextIcon: false,
    right: false,
    tabs: [
      { tabName: "Documentation", module: "Documentation" },
      { tabName: "Grammar", module: "Grammar" },
      { tabName: "Example", module: "Example" }
    ]
  })
};
</script>
