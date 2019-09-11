export default {
  StatementNote(frequency, oscillatorType, noteLength) {
    this.evaluate = function(env) {
      var freq = frequency.evaluate(env);
      var oscType = oscillatorType.evaluate(env);
      var noteLen = noteLength.evaluate(env);

      var noteObject = {
        frequency: freq,
        oscillatorType: oscType,
        noteLength: noteLen
      };

      return noteObject;
    };
  },

  Block(statements) {
    console.log("I'm in BLOCK");
    console.log(statements);
    this.evaluate = function(env) {
      console.log("I'm in BLOCK 2");
      statements.forEach(statement => {
        console.log("I'm in BLOCK");
        statement.evaluate(env);
      });
    };
  },
  stopOscillator(osc) {
    osc.stop();
  },

  StatementRest(restLength) {
    return this.StatementNote(
      this.ExpressionIntegerLiteral(parseInt(0)),
      this.ExpressionString("sine"),
      restLength
    );
  },

  StatementBPM(bpmExpr) {
    this.evaluate = function(env) {
      var bpm = bpmExpr.evaluate(env);

      // caclulates the length of time per beat
      var beat = 60000 / bpm;
      env["SIXTEENTH"] = beat / 4;
      env["EIGHTH"] = beat / 2;
      env["QUARTER"] = beat;
      env["HALF"] = beat * 2;
      env["WHOLE"] = beat * 4;
    };
  },

  StatementRepeat(condition, block) {
    this.evaluate = function(env) {
      while (condition.evaluate(env) != 0) {
        block.evaluate(env);
      }
    };
  },

  StatementPlay(object) {
    this.evaluate = function(env) {
      var obj = object.evaluate(env);

      window.AudioContext = window.AudioContext || window.webkitAudioContext;
      var context = new AudioContext();
      var oscillator = context.createOscillator();

      oscillator.frequency.value = obj.frequency;
      oscillator.type = obj.oscillatorType;
      oscillator.connect(context.destination);

      oscillator.start();
      this.sleep(obj.noteLength);
      this.stopOscillator(oscillator);
    };
  },

  sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
      if (new Date().getTime() - start > milliseconds) {
        break;
      }
    }
  },

  StatementPrint(message) {
    this.evaluate = function(env) {
      var m = message.evaluate(env);
      document.getElementById("console").innerHTML =
        document.getElementById("console").innerHTML + m + "\n";
    };
  },

  StatementAssignment(id, expr) {
    this.evaluate = function(env) {
      env[id] = expr.evaluate(env);
    };
  },

  StatementAt(name, formals, block) {
    this.evaluate = function(env) {
      env[name] = { name: name, formals: formals, block: block };
    };
  },

  StatementAtCall(name, actuals) {
    this.evaluate = function(env) {
      var f = env[name];
      var innerScope = env;

      actuals.forEach((actual, i) => {
        var formal = f.formals[i];
        innerScope[formal] = actual.evaluate(env);
      });

      f.block.evaluate(innerScope);
    };
  },

  // Expressions

  ExpressionIntegerLiteral(literal) {
    console.log("in Expression integer literal");
    console.log(literal);

    this.evaluate = function() {
      return literal;
    };
  },

  // we should have an error in case the variable isn't set/doesn't exist
  ExpressionVariableRef(id) {
    console.log("in Expression Variable ref");
    console.log(id);

    this.evaluate = function(env) {
      console.log("hello");

      return env[id];
    };
  },

  ExpressionString(string) {
    this.evaluate = function() {
      return string.substring(1, string.length - 1);
    };
  },

  ExpressionAdd(lExpr, rExpr) {
    this.evaluate = function(env) {
      return lExpr.evaluate(env) + rExpr.evaluate(env);
    };
  },

  ExpressionSubtract(lExpr, rExpr) {
    this.evaluate = function(env) {
      return lExpr.evaluate(env) - rExpr.evaluate(env);
    };
  },

  ExpressionMultiply(fst, snd) {
    this.evaluate = function(env) {
      var fstVal = fst.evaluate(env);
      var sndVal = snd.evaluate(env);
      return fstVal * sndVal;
    };
  },

  ExpressionDivide(fst, snd) {
    this.evaluate = function(env) {
      var fstVal = fst.evaluate(env);
      var sndVal = snd.evaluate(env);
      return fstVal / sndVal;
    };
  },

  ExpressionMod(fst, snd) {
    this.evaluate = function(env) {
      var fstVal = fst.evaluate(env);
      var sndVal = snd.evaluate(env);
      return fstVal % sndVal;
    };
  },

  ExpressionMore(left, right) {
    this.evaluate = function(env) {
      var lVal = left.evaluate(env);
      var rVal = right.evaluate(env);
      return lVal > rVal;
    };
  },

  ExpressionMoreOrEqual(left, right) {
    this.evaluate = function(env) {
      var lVal = left.evaluate(env);
      var rVal = right.evaluate(env);
      return lVal >= rVal;
    };
  },

  ExpressionLess(left, right) {
    this.evaluate = function(env) {
      var lVal = left.evaluate(env);
      var rVal = right.evaluate(env);
      return lVal < rVal;
    };
  },

  ExpressionLessOrEqual(left, right) {
    this.evaluate = function(env) {
      var lVal = left.evaluate(env);
      var rVal = right.evaluate(env);
      return lVal <= rVal;
    };
  },

  ExpressionEqual(left, right) {
    this.evaluate = function(env) {
      var lVal = left.evaluate(env);
      var rVal = right.evaluate(env);
      return lVal == rVal;
    };
  },

  ExpressionNotEqual(left, right) {
    this.evaluate = function(env) {
      var lVal = left.evaluate(env);
      var rVal = right.evaluate(env);
      return lVal != rVal;
    };
  },

  ExpressionIf(condition, thenBlock, elseBlock) {
    this.evaluate = function(env) {
      var val = condition.evaluate(env);
      if (val != 0) {
        thenBlock.evaluate(env);
      } else {
        elseBlock.evaluate(env);
      }
    };
  }
};
