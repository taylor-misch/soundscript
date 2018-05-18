RACHEL KORKOWSKI
TAYLOR MISCH


LANGUAGE DESCRIPTION
Our language is called SoundScript. Programming in this language allows the programmer to 
create sounds and musical patterns through the use of built in notes and self-made functions.
The language is built on top of JavaScript and makes use of its built in sound and AudioContext 
object. This language contains many of the basic features of popular languages like loops and
if statements, but we have added specific types like the NOTE and REst types that act 
as the core of the language. When the user sets the beats per minute for the music, identifiers
for quarter notes, half notes, whole notes, eigth notes, and sixteenth notes will automatically be 
created and set to the correct number of milliseconds for the note. Using these basic types
the programmer is free to make musical patterns that are as simple or complex as they see fit. 

GRAMMAR

program 
	: statement* EOF

statement
	: NOTE expr expr expr 
	| REST expr
    | BPM expr
	| PRINT expr
	| PLAY expr
	| REPEAT expr statement* END 
	| IDENTIFIER ASSIGN expr
	| IF expr statement* ELSE statement* END
	| @ IDENTIFIER LEFT_PARENTHESIS IDENTIFIER* RIGHT_PARENTHESIS statement* END
	| IDENTIFIER LEFT_PARENTHESIS expr* RIGHT_PARENTHESIS

expr
	: INTEGER 
	| expr (ASTERISK|DIVIDE|MOD) expr
	| expr (PLUS|MINUS) expr
	| expr (MORE|MORE_OR_EQUAL|LESS_OR_EQUAL|EQUAL|NOT_EQUAL) expr


