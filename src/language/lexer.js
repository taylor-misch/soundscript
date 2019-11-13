import { variables } from "@/language/variables.js";

export default {
  lex(source) {
    var tokens = [];
    var tokenSoFar = "";
    var i = 0;

    function has(regex) {
      return source.charAt(i).match(regex);
    }

    function next() {
      tokenSoFar += source.charAt(i);
      i += 1;
    }

    function store(type) {
      tokens.push({
        type: type,
        source: tokenSoFar
      });
      tokenSoFar = "";
    }

    while (i < source.length) {
      if (has(/\+/)) {
        //start math operators
        next();
        store(variables.PLUS);
      } else if (has(/-/)) {
        next();
        store(variables.MINUS);
      } else if (has(/\//)) {
        next();
        if (has(/\//)) {
          //for comments
          while (has(/[^\n]/)) {
            next();
          }
          tokenSoFar = "";
        } else {
          store(variables.DIVIDE);
        }
      } else if (has(/\//)) {
        next();
        store(variables.DIVIDE);
      } else if (has(/\*/)) {
        next();
        store(variables.ASTERISK);
      } else if (has(/%/)) {
        next();
        store(variables.MOD); //end math operators
      } else if (has(/!/)) {
        //start comparison operators
        next();
        if (has(/=/)) {
          next();
          store(variables.NOT_EQUAL);
        } else {
          throw "Error: expected '=' after '!'";
          //document.getElementById("errors").innerHTML = document.getElementById("errors").innerHTML + "Error: expected \'=\' after \'!\'" + "\n";
        }
      } else if (has(/=/)) {
        next();
        if (has(/=/)) {
          next();
          store(variables.EQUAL);
        } else {
          store(variables.ASSIGN);
        }
      } else if (has(/</)) {
        next();
        if (has(/=/)) {
          next();
          store(variables.LESS_OR_EQUAL);
        } else {
          store(variables.LESS);
        }
      } else if (has(/>/)) {
        next();
        if (has(/=/)) {
          next();
          store(variables.MORE_OR_EQUAL);
        } else {
          store(variables.MORE);
        } //end comparison operators
      } else if (has(/\(/)) {
        //start formatting operators
        next();
        store(variables.LEFT_PARENTHESIS);
      } else if (has(/\)/)) {
        next();
        store(variables.RIGHT_PARENTHESIS);
      } else if (has(/,/)) {
        next();
        store(variables.COMMA); //end formatting operators
      } else if (has(/\d/)) {
        while (has(/\d/)) {
          next();
        }
        store(variables.INTEGER);
      } else if (has(/"/)) {
        next();
        while (!has(/"/)) {
          next();
        }
        next();
        store(variables.STRING);
      } else if (has(/[a-zA-Z@]/)) {
        while (has(/[a-zA-Z0-9@]/)) {
          next();
        }

        if (tokenSoFar.toLowerCase() == "note") {
          store(variables.NOTE);
        } else if (tokenSoFar.toLowerCase() == "rest") {
          store(variables.REST);
        } else if (tokenSoFar.toLowerCase() == "bpm") {
          store(variables.BPM);
        } else if (tokenSoFar.toLowerCase() == "play") {
          store(variables.PLAY);
        } else if (tokenSoFar.toLowerCase() == "repeat") {
          store(variables.REPEAT);
        } else if (tokenSoFar.toLowerCase() == "if") {
          store(variables.IF);
        } else if (tokenSoFar.toLowerCase() == "else") {
          store(variables.ELSE);
        } else if (tokenSoFar.toLowerCase() == "end") {
          store(variables.END);
        } else if (tokenSoFar.toLowerCase() == "print") {
          store(variables.PRINT);
        } else if (tokenSoFar.toLowerCase() == "@") {
          store(variables.AT);
        } else {
          store(variables.IDENTIFIER);
        }
      } else if (has(/\s/)) {
        next();
        tokenSoFar = "";
      } else {
        var nonsense = next();
        tokenSoFar = nonsense;
        throw "Error: token [" + tokenSoFar + "] not recognized.";
      }
    }

    store(variables.EOF);
    return tokens;
  }
};
