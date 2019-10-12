export const variables = {
  PLUS: "PLUS",
  MINUS: "MINUS",
  DIVIDE: "DIVIDE",
  ASTERISK: "ASTERISK",
  MOD: "MOD",
  MORE_OR_EQUAL: "MORE_OR_EQUAL",
  MORE: "MORE",
  LESS_OR_EQUAL: "LESS_OR_EQUAL",
  LESS: "LESS",
  EQUAL: "EQUAL",
  NOT_EQUAL: "NOT_EQUAL",
  //Types (identifier/integer)
  IDENTIFIER: "IDENTIFIER",
  INTEGER: "INTEGER",
  STRING: "STRING",
  //Statements specific to sound
  NOTE: "NOTE",
  REST: "REST",
  BPM: "BPM",
  PLAY: "PLAY",
  //Formatting operators
  EOF: "EOF",
  LEFT_PARENTHESIS: "LEFT_PARENTHESIS",
  RIGHT_PARENTHESIS: "RIGHT_PARENTHESIS",
  COMMA: "COMMA",
  //Conditionals and Loops
  REPEAT: "REPEAT",
  IF: "IF",
  ELSE: "ELSE",
  END: "END",
  //Print, assign, and functions
  PRINT: "PRINT",
  ASSIGN: "ASSIGN",
  AT: "AT",
  env: {
    SIXTEENTH: 60000 / 120 / 4,
    EIGHTH: 60000 / 120 / 2,
    QUARTER: 60000 / 120,
    HALF: (60000 / 120) * 2,
    WHOLE: (60000 / 120) * 4
  }
};
