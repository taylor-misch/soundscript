<template>
  <Module title="Grammar">
    <div class="body-1">
      <ul>
        <li>program : statement\* EOF</li>
      </ul>
      <br />
      <ul>
        <li>statement : NOTE expr expr expr</li>
        <li>REST expr</li>
        <li>BPM expr</li>
        <li>PRINT expr</li>
        <li>PRINT expr</li>
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