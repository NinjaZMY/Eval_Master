regex.puzzle.bat

"broken.regex":
"
(\\s*>(\\s*>)*|>*|//|#|<!--|;|/\\*|^|^\\s*(-|\\d+.))
\\s*
(\\s*(\\[))
*((\\s*(\\[)*)
(*\\s*(\\[])))*
(\\s*($TAGS)(\\s*($TAGS))*\\s*)
(\\s*(\\])*(\\s*(\\]))*\\s*)*
" 
, 

"also same broken regex, full form": 
"(\\s*>(\\s*>)*|>*|//|#|<!--|;|/\\*|^|^\\s*(-|\\d+.))\\s*(\\s*(\\[))*((\\s*(\\[)*)(*\\s*(\\[])))*(\\s*($TAGS)(\\s*($TAGS))*\\s*)(\\s*(\\])*(\\s*(\\]))*\\s*)*"

--- Supposed to be Functional (might be using broken regex) Final Form -----

"todo-tree.regex.regexCaseSensitive" : false, 
"todo-tree.regex.regex": "(\\s*>(\\s*>)*|>*|//|#|<!--|;|/\\*|^|^\\s*(-|\\d+.))\\s*(\\s*(\\[))*((\\s*(\\[)*)(*\\s*(\\[])))*(\\s*($TAGS)(\\s*($TAGS))*\\s*) (\\s*(\\])*(\\s*(\\]))*\\s*)*"
,

"todo-tree.general.tags": [
        "BUG",
        "HACK",
        "FIXME",
        "TODO",
        "wtf",
        // ".{\\s*.}",
        // "[x]",
        // "[ ]",
        "x",
        "s",
        "h",
        "g",
        "e",
        "r",
        "i",
        "u",
        "a",
        "b",
        "y", 
        "c",
        "k",
        "_",
        "-",
        "0",
        "1",
        "2",
        "3", 
        "4",
        "f",
        "5",
        "u",
        "end",
        "o",
        "log",
        ">",
        "<",
        "6",
        "7",
        "8",
        "9",
        ""
      ], 

