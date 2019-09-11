export function Block(statements) {
  console.log("I'm in BLOCK");
  console.log(statements);
  this.evaluate = function(env) {
    console.log("I'm in BLOCK 2");
    statements.forEach(statement => {
      console.log("I'm in BLOCK");
      statement.evaluate(env);
    });
  };
}

export function StatementNote(frequency, oscillatorType, noteLength) {
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
}

export function stopOscillator(osc) {
  osc.stop();
}

export function StatementRest(restLength) {
  return new StatementNote(
    new ExpressionIntegerLiteral(parseInt(0)),
    new ExpressionString("sine"),
    restLength
  );
}

export function StatementBPM(bpmExpr) {
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
}

export function StatementRepeat(condition, block) {
  this.evaluate = function(env) {
    while (condition.evaluate(env) != 0) {
      block.evaluate(env);
    }
  };
}

export function StatementPlay(object) {
  this.evaluate = function(env) {
    var obj = object.evaluate(env);

    window.AudioContext = window.AudioContext || window.webkitAudioContext;
    var context = new AudioContext();
    var oscillator = context.createOscillator();

    oscillator.frequency.value = obj.frequency;
    oscillator.type = obj.oscillatorType;
    oscillator.connect(context.destination);

    oscillator.start();
    sleep(obj.noteLength);
    stopOscillator(oscillator);
  };
}

export function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if (new Date().getTime() - start > milliseconds) {
      break;
    }
  }
}

export function StatementPrint(message) {
  this.evaluate = function(env) {
    var m = message.evaluate(env);
    document.getElementById("console").innerHTML =
      document.getElementById("console").innerHTML + m + "\n";
  };
}

export function StatementAssignment(id, expr) {
  this.evaluate = function(env) {
    env[id] = expr.evaluate(env);
  };
}

export function StatementAt(name, formals, block) {
  this.evaluate = function(env) {
    env[name] = { name: name, formals: formals, block: block };
  };
}

export function StatementAtCall(name, actuals) {
  this.evaluate = function(env) {
    var f = env[name];
    var innerScope = env;

    actuals.forEach((actual, i) => {
      var formal = f.formals[i];
      innerScope[formal] = actual.evaluate(env);
    });

    f.block.evaluate(innerScope);
  };
}

// Expressions

export function ExpressionIntegerLiteral(literal) {
  console.log("in Expression integer literal");
  console.log(literal);

  this.evaluate = function() {
    return literal;
  };
}

// we should have an error in case the variable isn't set/doesn't exist
export function ExpressionVariableRef(id) {
  console.log("in Expression Variable ref");
  console.log(id);

  this.evaluate = function(env) {
    console.log("hello");

    return env[id];
  };
}

export function ExpressionString(string) {
  this.evaluate = function() {
    return string.substring(1, string.length - 1);
  };
}

export function ExpressionAdd(lExpr, rExpr) {
  this.evaluate = function(env) {
    return lExpr.evaluate(env) + rExpr.evaluate(env);
  };
}

export function ExpressionSubtract(lExpr, rExpr) {
  this.evaluate = function(env) {
    return lExpr.evaluate(env) - rExpr.evaluate(env);
  };
}

export function ExpressionMultiply(fst, snd) {
  this.evaluate = function(env) {
    var fstVal = fst.evaluate(env);
    var sndVal = snd.evaluate(env);
    return fstVal * sndVal;
  };
}

export function ExpressionDivide(fst, snd) {
  this.evaluate = function(env) {
    var fstVal = fst.evaluate(env);
    var sndVal = snd.evaluate(env);
    return fstVal / sndVal;
  };
}

export function ExpressionMod(fst, snd) {
  this.evaluate = function(env) {
    var fstVal = fst.evaluate(env);
    var sndVal = snd.evaluate(env);
    return fstVal % sndVal;
  };
}

export function ExpressionMore(left, right) {
  this.evaluate = function(env) {
    var lVal = left.evaluate(env);
    var rVal = right.evaluate(env);
    return lVal > rVal;
  };
}

export function ExpressionMoreOrEqual(left, right) {
  this.evaluate = function(env) {
    var lVal = left.evaluate(env);
    var rVal = right.evaluate(env);
    return lVal >= rVal;
  };
}

export function ExpressionLess(left, right) {
  this.evaluate = function(env) {
    var lVal = left.evaluate(env);
    var rVal = right.evaluate(env);
    return lVal < rVal;
  };
}

export function ExpressionLessOrEqual(left, right) {
  this.evaluate = function(env) {
    var lVal = left.evaluate(env);
    var rVal = right.evaluate(env);
    return lVal <= rVal;
  };
}

export function ExpressionEqual(left, right) {
  this.evaluate = function(env) {
    var lVal = left.evaluate(env);
    var rVal = right.evaluate(env);
    return lVal == rVal;
  };
}

export function ExpressionNotEqual(left, right) {
  this.evaluate = function(env) {
    var lVal = left.evaluate(env);
    var rVal = right.evaluate(env);
    return lVal != rVal;
  };
}

export function ExpressionIf(condition, thenBlock, elseBlock) {
  this.evaluate = function(env) {
    var val = condition.evaluate(env);
    if (val != 0) {
      thenBlock.evaluate(env);
    } else {
      elseBlock.evaluate(env);
    }
  };
}
