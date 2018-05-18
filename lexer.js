//Math operators
var PLUS = 'PLUS';
var MINUS = 'MINUS';
var DIVIDE = 'DIVIDE';
var ASTERISK = 'ASTERISK';
var MOD = 'MOD';

//Comparison Operators
var MORE_OR_EQUAL = 'MORE_OR_EQUAL';
var MORE = 'MORE';
var LESS_OR_EQUAL = 'LESS_OR_EQUAL';
var LESS = 'LESS';
var EQUAL = 'EQUAL';
var NOT_EQUAL = 'NOT_EQUAL';

//Types (identifier/integer)
var IDENTIFIER = 'IDENTIFIER';
var INTEGER = 'INTEGER';
var STRING = 'STRING';

//Statements specific to sound
var NOTE = 'NOTE';
var REST = 'REST';
var BPM = 'BPM';
var PLAY = 'PLAY';

//Formatting operators
var EOF = 'EOF';
var LEFT_PARENTHESIS = 'LEFT_PARENTHESIS';
var RIGHT_PARENTHESIS = 'RIGHT_PARENTHESIS';
var COMMA = 'COMMA';

//Conditionals and Loops
var REPEAT = 'REPEAT';
var IF = 'IF';
var ELSE = 'ELSE';
var END = 'END';

//Print, assign, and functions
var PRINT = 'PRINT';
var ASSIGN = 'ASSIGN';
var AT = 'AT';

function lex(source) {

	var tokens = [];
	var tokenSoFar = '';
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
			type : type,
			source : tokenSoFar
		});
		tokenSoFar = '';
	}

	while (i < source.length) {
		if (has(/\+/)) { //start math operators
			next();
			store(PLUS);
		} else if (has(/-/)) {
			next();
			store(MINUS);
		} else if (has(/\//)) {
			next();
			if (has(/\//)) { //for comments
				while (has(/[^\n]/)) {
					next();
				}
				tokenSoFar = '';
			} else {
				store(DIVIDE);
			}
		} else if (has(/\//)) {
			next();
			store(DIVIDE);
		} else if (has(/\*/)) {
			next();
			store(ASTERISK);
		} else if (has(/%/)) {
			next();
			store(MOD); //end math operators
		} else if (has(/!/)) { //start comparison operators
			next();
			if (has(/=/)) {
				next();
				store(NOT_EQUAL);
			} else {
				throw 'Error: expected \'=\' after \'!\'';
                //document.getElementById("errors").innerHTML = document.getElementById("errors").innerHTML + "Error: expected \'=\' after \'!\'" + "\n";
			}
		} else if (has(/=/)) {
			next();
			if (has(/=/)) {
				next();
				store(EQUAL);
			} else {
				store(ASSIGN);
			}
		} else if (has(/</)) {
			next();
			if (has(/=/)) {
				next();
				store(LESS_OR_EQUAL);
			} else {
				store(LESS);
			}
		} else if (has(/>/)) {
			next();
			if (has(/=/)) {
				next();
				store(MORE_OR_EQUAL);
			} else {
				store(MORE);
			} //end comparison operators
		} else if (has(/\(/)) { //start formatting operators
			next();
			store(LEFT_PARENTHESIS);
		} else if (has(/\)/)) {
			next();
			store(RIGHT_PARENTHESIS);
		} else if (has(/,/)) {
			next();
			store(COMMA); //end formatting operators
		} else if (has(/\d/)) {
			while (has(/\d/)) {
				next();
			}
			store(INTEGER);
		} else if (has(/"/)) {
			next();
			while (!has(/"/)) {
				next();
			}
			next();
			store(STRING);
		} else if (has(/[a-zA-Z@]/)) {
			while (has(/[a-zA-Z0-9@]/)) {
				next();
			}

			if (tokenSoFar == 'note') {
				store(NOTE);
			} else if (tokenSoFar == 'rest') {
				store(REST);
			} else if (tokenSoFar == 'bpm') {
				store(BPM);
			} else if (tokenSoFar == 'play') {
				store(PLAY);
			} else if (tokenSoFar == 'repeat') {
				store(REPEAT);
			} else if (tokenSoFar == 'if') {
				store(IF);
			} else if (tokenSoFar == 'else') {
				store(ELSE);
			} else if (tokenSoFar == 'end') {
				store(END);
			} else if (tokenSoFar == 'print') {
				store(PRINT);
			} else if (tokenSoFar == '@') {
				store(AT);
			} else {
				store(IDENTIFIER);
			}

		} else if (has(/\s/)) {
			next();
			tokenSoFar = '';
		} else {
            var nonsense = next();
            tokenSoFar = nonsense;
			throw 'Error: token [' + tokenSoFar + '] not recognized.';
		}

	}

	store(EOF);
	return tokens;
}
