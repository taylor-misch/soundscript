import { variables } from "@/language/variables.js";
import {
  StatementNote,
  StatementRest,
  StatementBPM,
  StatementPrint,
  StatementPlay,
  StatementAssignment,
  StatementAtCall,
  Block,
  ExpressionIf,
  StatementRepeat,
  StatementAt,
  ExpressionMoreOrEqual,
  ExpressionMore,
  ExpressionLessOrEqual,
  ExpressionLess,
  ExpressionNotEqual,
  ExpressionEqual,
  ExpressionAdd,
  ExpressionSubtract,
  ExpressionMultiply,
  ExpressionMod,
  ExpressionDivide,
  ExpressionIntegerLiteral,
  ExpressionString,
  ExpressionVariableRef
} from "@/language/ast.js";

export default {
  parse(tokens) {
    console.log(tokens);
    var i = 0;

    function statement() {
      console.log("I'm in statement");

      if (has(variables.AT)) {
        console.log("in @");

        return define();
      } else if (has(variables.NOTE)) {
        console.log("in NOTE");
        next();
        var frequency = expression();
        console.log(frequency);

        var oscillatorType = atom();
        console.log(oscillatorType);

        var noteLength = expression();
        console.log(noteLength);

        return new StatementNote(frequency, oscillatorType, noteLength);
      } else if (has(variables.REST)) {
        next();
        var restLength = expression();
        return new StatementRest(restLength);
      } else if (has(variables.BPM)) {
        next();
        var beatsPerMinute = expression();
        return new StatementBPM(beatsPerMinute);
      } else if (has(variables.PRINT)) {
        next();
        var message = expression();
        return new StatementPrint(message);
      } else if (has(variables.PLAY)) {
        console.log("in PLAY");
        next();
        var object = expression();
        return new StatementPlay(object);
      } else if (has(variables.REPEAT)) {
        return loop();
      } else if (has(variables.IF)) {
        return conditional();
      } else if (has(variables.IDENTIFIER)) {
        var idToken = next();

        if (has(variables.ASSIGN)) {
          next();
          var rhs = expression();
          return new StatementAssignment(idToken.source, rhs);
        } else if (has(variables.LEFT_PARENTHESIS)) {
          next();
          var actuals = [];
          while (!has(variables.RIGHT_PARENTHESIS)) {
            actuals.push(expression());
          }
          next(); // eat )
          return new StatementAtCall(idToken.source, actuals);
        } else if (!has(variables.ASSIGN)) {
          throw "Error: Invalid Input " + tokens[i].source;
        }
      } else {
        throw "Error: [" + tokens[i].source + "] not recognized. ";
      }
    }

    function has(tokenType) {
      return i < tokens.length && tokens[i].type == tokenType;
    }

    function next() {
      var token = tokens[i];
      i++;
      return token;
    }

    function program() {
      var statements = [];
      console.log(statements);

      while (!has(variables.EOF)) {
        console.log("I'm in");

        statements.push(statement());
      }
      console.log(statements);

      console.log("In program: " + statements);
      return new Block(statements);
    }

    function conditional() {
      next();
      var condition = expression();
      var thenStatements = [];

      while (i < tokens.length && !has(variables.ELSE) && !has(variables.END)) {
        thenStatements.push(statement());
      }

      var elseStatements = [];

      if (has(variables.ELSE)) {
        next();
        while (i < tokens.length && !has(variables.END)) {
          elseStatements.push(statement());
        }
      }

      if (!has(variables.END)) {
        throw "Error: You started a conditional block without concluding it with an 'end' token";
      }
      next(); // eat end

      var thenBlock = new Block(thenStatements);
      var elseBlock = new Block(elseStatements);

      return new ExpressionIf(condition, thenBlock, elseBlock);
    }

    function loop() {
      next();
      var condition = expression();
      var statements = [];
      while (!has(variables.END)) {
        statements.push(statement());
        if (has(variables.EOF)) {
          if (!has(variables.END)) {
            throw "Error: You started a repeat loop without concluding it with an 'end' token";
          }
        }
      }

      next();
      return new StatementRepeat(condition, new Block(statements));
    }

    function define() {
      next();
      var nameToken = next();
      next();
      var formals = [];
      while (!has(variables.RIGHT_PARENTHESIS)) {
        var formalToken = next();
        formals.push(formalToken.source);
      }
      next();
      var statements = [];
      while (!has(variables.END)) {
        statements.push(statement());
        if (has(variables.EOF)) {
          if (!has(variables.END)) {
            throw "Error: You started a function without concluding it with an 'end' token";
          }
        }
      }
      next();
      return new StatementAt(nameToken.source, formals, new Block(statements));
    }

    function expression() {
      console.log("In Expression");

      return relational();
    }

    function relational() {
      console.log("in Relational");

      var a = additive();
      while (
        has(variables.MORE_OR_EQUAL) ||
        has(variables.MORE) ||
        has(variables.LESS_OR_EQUAL) ||
        has(variables.LESS) ||
        has(variables.EQUAL) ||
        has(variables.NOT_EQUAL)
      ) {
        var operator = tokens[i];
        next(); // eat operator
        var b = additive();
        if (operator.type == variables.MORE_OR_EQUAL) {
          a = new ExpressionMoreOrEqual(a, b);
        } else if (operator.type == variables.MORE) {
          a = new ExpressionMore(a, b);
        } else if (operator.type == variables.LESS_OR_EQUAL) {
          a = new ExpressionLessOrEqual(a, b);
        } else if (operator.type == variables.LESS) {
          a = new ExpressionLess(a, b);
        } else if (operator.type == variables.EQUAL) {
          a = new ExpressionEqual(a, b);
        } else {
          a = new ExpressionNotEqual(a, b);
        }
      }
      return a;
    }

    function additive() {
      console.log("in additive");

      var l = multiplicative();
      while (has(variables.PLUS) || has(variables.MINUS)) {
        var operatorToken = next();
        var r = multiplicative();
        if (operatorToken.type == variables.PLUS) {
          l = new ExpressionAdd(l, r);
        } else {
          l = new ExpressionSubtract(l, r);
        }
      }

      return l;
    }

    function multiplicative() {
      console.log("in multiplicative");

      var a = atom();
      while (
        has(variables.ASTERISK) ||
        has(variables.DIVIDE) ||
        has(variables.MOD)
      ) {
        var operator = tokens[i];
        next(); // eat operator
        var b = atom();
        if (operator.type == variables.ASTERISK) {
          a = new ExpressionMultiply(a, b);
        } else if (operator.type == variables.MOD) {
          a = new ExpressionMod(a, b);
        } else {
          a = new ExpressionDivide(a, b);
        }
      }
      return a;
    }

    function atom() {
      console.log("in atom");

      if (has(variables.INTEGER)) {
        console.log("in integer");

        let token = next();
        return new ExpressionIntegerLiteral(parseInt(token.source));
      } else if (has(variables.STRING)) {
        console.log("in string");
        let token = next();
        return new ExpressionString(token.source);
      } else if (has(variables.NOTE)) {
        console.log("in note");
        return statement();
      } else if (has(variables.REST)) {
        console.log("in rest");
        return statement();
      } else if (has(variables.IDENTIFIER)) {
        console.log("in identifier");
        let token = next();
        return new ExpressionVariableRef(String(token.source));
      } else if (has(variables.LEFT_PARENTHESIS)) {
        next();
        var e = expression();
        if (!has(variables.RIGHT_PARENTHESIS)) {
          throw "Error: Missing Right Parenthesis";
        }
        next();
        return e;
      } else {
        throw "Error: I expected an expression, but instead I found '" +
          tokens[i].source +
          "'. Check for missing attributes for keywords and/or misspelled keywords";
      }
    }

    return program();
  }
};
