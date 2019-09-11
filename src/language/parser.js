import { variables } from "@/language/variables.js";
export default {
  parse(tokens) {
    console.log(tokens);
    console.log(variables.NOTE);
    // var i = 0;
    //
    // function statement() {
    //   if (has(AT)) {
    //     return define();
    //   } else if (has(NOTE)) {
    //     next();
    //     var frequency = expression();
    //     var oscillatorType = atom();
    //     var noteLength = expression();
    //     return new StatementNote(frequency, oscillatorType, noteLength);
    //   } else if (has(REST)) {
    //     next();
    //     var restLength = expression();
    //     return new StatementRest(restLength);
    //   } else if (has(BPM)) {
    //     next();
    //     var beatsPerMinute = expression();
    //     return new StatementBPM(beatsPerMinute);
    //   } else if (has(PRINT)) {
    //     next();
    //     var message = expression();
    //     return new StatementPrint(message);
    //   } else if (has(PLAY)) {
    //     next();
    //     var object = expression();
    //     return new StatementPlay(object);
    //   } else if (has(REPEAT)) {
    //     return loop();
    //   } else if (has(IF)) {
    //     return conditional();
    //   } else if (has(IDENTIFIER)) {
    //     var idToken = next();

    //     if (has(ASSIGN)) {
    //       next();
    //       var rhs = expression();
    //       return new StatementAssignment(idToken.source, rhs);
    //     } else if (has(LEFT_PARENTHESIS)) {
    //       next();
    //       var actuals = [];
    //       while (!has(RIGHT_PARENTHESIS)) {
    //         actuals.push(expression());
    //       }
    //       next(); // eat )
    //       return new StatementAtCall(idToken.source, actuals);
    //     } else if (!has(ASSIGN)) {
    //       throw "Error: Invalid Input " + tokens[i].source;
    //     }
    //   } else {
    //     throw "Error: [" + tokens[i].source + "] not recognized. ";
    //   }
    // }

    // function has(tokenType) {
    //   return i < tokens.length && tokens[i].type == tokenType;
    // }

    // function next() {
    //   var token = tokens[i];
    //   i++;
    //   return token;
    // }

    // function program() {
    //   var statements = [];
    //   while (!has(EOF)) {
    //     statements.push(statement());
    //   }
    //   return new Block(statements);
    // }

    // function conditional() {
    //   next();
    //   var condition = expression();
    //   var thenStatements = [];

    //   while (i < tokens.length && !has(ELSE) && !has(END)) {
    //     thenStatements.push(statement());
    //   }

    //   var elseStatements = [];

    //   if (has(ELSE)) {
    //     next();
    //     while (i < tokens.length && !has(END)) {
    //       elseStatements.push(statement());
    //     }
    //   }

    //   if (!has(END)) {
    //     throw "Error: You started a conditional block without concluding it with an 'end' token";
    //   }
    //   next(); // eat end

    //   var thenBlock = new Block(thenStatements);
    //   var elseBlock = new Block(elseStatements);

    //   return new ExpressionIf(condition, thenBlock, elseBlock);
    // }

    // function loop() {
    //   next();
    //   var condition = expression();
    //   var statements = [];
    //   while (!has(END)) {
    //     statements.push(statement());
    //     if (has(EOF)) {
    //       if (!has(END)) {
    //         throw "Error: You started a repeat loop without concluding it with an 'end' token";
    //       }
    //     }
    //   }

    //   next();
    //   return new StatementRepeat(condition, new Block(statements));
    // }

    // function define() {
    //   next();
    //   var nameToken = next();
    //   next();
    //   var formals = [];
    //   while (!has(RIGHT_PARENTHESIS)) {
    //     var formalToken = next();
    //     formals.push(formalToken.source);
    //   }
    //   next();
    //   var statements = [];
    //   while (!has(END)) {
    //     statements.push(statement());
    //     if (has(EOF)) {
    //       if (!has(END)) {
    //         throw "Error: You started a function without concluding it with an 'end' token";
    //       }
    //     }
    //   }
    //   next();
    //   return new StatementAt(nameToken.source, formals, new Block(statements));
    // }

    // function expression() {
    //   return relational();
    // }

    // function relational() {
    //   var a = additive();
    //   while (
    //     has(MORE_OR_EQUAL) ||
    //     has(MORE) ||
    //     has(LESS_OR_EQUAL) ||
    //     has(LESS) ||
    //     has(EQUAL) ||
    //     has(NOT_EQUAL)
    //   ) {
    //     var operator = tokens[i];
    //     next(); // eat operator
    //     var b = additive();
    //     if (operator.type == MORE_OR_EQUAL) {
    //       a = new ExpressionMoreOrEqual(a, b);
    //     } else if (operator.type == MORE) {
    //       a = new ExpressionMore(a, b);
    //     } else if (operator.type == LESS_OR_EQUAL) {
    //       a = new ExpressionLessOrEqual(a, b);
    //     } else if (operator.type == LESS) {
    //       a = new ExpressionLess(a, b);
    //     } else if (operator.type == EQUAL) {
    //       a = new ExpressionEqual(a, b);
    //     } else {
    //       a = new ExpressionNotEqual(a, b);
    //     }
    //   }
    //   return a;
    // }

    // function additive() {
    //   var l = multiplicative();
    //   while (has(PLUS) || has(MINUS)) {
    //     var operatorToken = next();
    //     var r = multiplicative();
    //     if (operatorToken.type == PLUS) {
    //       l = new ExpressionAdd(l, r);
    //     } else {
    //       l = new ExpressionSubtract(l, r);
    //     }
    //   }

    //   return l;
    // }

    // function multiplicative() {
    //   var a = atom();
    //   while (has(ASTERISK) || has(DIVIDE) || has(MOD)) {
    //     var operator = tokens[i];
    //     next(); // eat operator
    //     var b = atom();
    //     if (operator.type == ASTERISK) {
    //       a = new ExpressionMultiply(a, b);
    //     } else if (operator.type == MOD) {
    //       a = new ExpressionMod(a, b);
    //     } else {
    //       a = new ExpressionDivide(a, b);
    //     }
    //   }
    //   return a;
    // }

    // function atom() {
    //   if (has(INTEGER)) {
    //     var token = next();
    //     return new ExpressionIntegerLiteral(parseInt(token.source));
    //   } else if (has(STRING)) {
    //     var token = next();
    //     return new ExpressionString(token.source);
    //   } else if (has(NOTE)) {
    //     return statement();
    //   } else if (has(REST)) {
    //     return statement();
    //   } else if (has(IDENTIFIER)) {
    //     var token = next();
    //     return new ExpressionVariableRef(String(token.source));
    //   } else if (has(LEFT_PARENTHESIS)) {
    //     next();
    //     var e = expression();
    //     if (!has(RIGHT_PARENTHESIS)) {
    //       throw "Error: Missing Right Parenthesis";
    //     }
    //     next();
    //     return e;
    //   } else {
    //     throw "Error: I expected an expression, but instead I found '" +
    //       tokens[i].source +
    //       "'. Check for missing attributes for keywords and/or misspelled keywords";
    //   }
    // }

    // return program();
  }
};
