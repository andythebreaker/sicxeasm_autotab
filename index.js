console.log("<3");
function ooo() {
    console.log($("#w3review").val());//document.getElementById("w3review").textContent);
}
function download(filename, text) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}
var y = "";
function oooo() {
    console.log("^^");
    //console.log(xxx);
    const regex = /\n([a-zA-Z\d]*)[ \t\n]+([\@\+\#\-\*a-zA-Z\d]+)[ \t\n]+([,\@\=\+\#\-\*\'a-zA-Z\d]+)/gm;

    // Alternative syntax using RegExp constructor
    // const regex = new RegExp('\\n([a-zA-Z\\d]*)[ \\t\\n]+([\\@\\+\\#\\-\\*a-zA-Z\\d]+)[ \\t\\n]+([,\\@\\=\\+\\#\\-\\*\\\'a-zA-Z\\d]+)', 'gm')

    const str = $("#w3review").val()/*String(document.getElementById("w3review").textContent)//`.
.  File: P 4-5
.  Date: (A) Creation - 2000/00/00     (B) Modified - 2000/00/00
.  Notes:
.  (1) This program is ***
.  (2) This file is intended to be an example program for SIC Assembler
.  (3) The fixed format of each line:
.          COL. 1       - . (the entire line is comment)
.          COL. 1 ~ 8   - Label (optional)
.          COL. 9       - Blank
.          COL. 10 ~ 15 - Operation code mnemonic or assembler directive
.          COL. 16 ~ 17 - Blank
.          COL. 18 ~ 35 - Operand(s)
.          COL. 36 ~ 66 - Comment (optional)
.  Usage:
.  (A) Rename this file to SRCFILE
.  (B) Execute SIC assembler
.
.0       1         2         3         4         5         6         7
.23456789012345678901234567890123456789012345678901234567890123456789012
.
.OPY     START   1000              Copy file from INPUT to OUTPUT
COPY     START   1000              Copy file from INPUT to OUTPUT
FIRST    STL     RETADR
.CLOOP RDBUFF F1,BUFFER,LENGTH
CLOOP    CLEAR   X
       CLEAR A
       CLEAR	S
       +LDT	#4096
       TD	=X'F1'
       JEQ	*-3
       RD	=X'F1'
       COMPR	A,S
       JEQ *+11
       STCH BUFFER,X
       TIXR T
       JLT *-19
       STX LENGTH
       LDA LENGTH
       COMP #0
       JEQ ENDFIL
       .WRBUFF 05,BUFFER,LENGTH
       CLEAR X
       LDT LENGTH
       LDCH BUFFER,X
       TD =X'05'
       JEQ *-3
       WD =X'05'
       TIXR T
       JLT *-14
       J CLOOP
.ENDFIL WRBUFF 05,EOF,THREE
ENDFIL	CLEAR X
       LDT THREE
       LDCH EOF,X
       TD =X'05'
       JEQ *-3
       WD =X'05'
       TIXR T
       JLT *-14
       J @RETADR
EOF				BYTE C'EOF'
THREE		WORD 3
RETADR	RESW 1
LENGTH	RESW 1
BUFFER	RESB 4096
       END FIRST`;*/
    let m;

    while ((m = regex.exec(str)) !== null) {
        // This is necessary to avoid infinite loops with zero-width matches
        if (m.index === regex.lastIndex) {
            regex.lastIndex++;
        }

        // The result can be accessed through the `m`-variable.
        m.forEach((match, groupIndex) => {
            console.log(`Found match, group ${groupIndex}: ${match}`);
            var tmp_p = 0;
            if ((groupIndex === 1 || groupIndex === 2 || groupIndex === 3) &&
                (match.startsWith('#') || match.startsWith('@') || match.startsWith('=') || match.startsWith('+'))) {
                y = y.substring(0, y.length - 1);
                tmp_p = 1;
            }
            if (groupIndex === 1) {
                y += match.padEnd((8 - 1 + 1) + 1 + tmp_p, ' ');
            } else if (groupIndex === 2) {
                y += match.padEnd((15 - 10 + 1) + 2 + tmp_p, ' ');
            } else if (groupIndex === 3) {
                y += match.padEnd((35 - 18 + 1) + tmp_p, ' ');
            } else {
                console.log("[NO!]");
            }
        });
        y += "\n";

    }
    document.getElementById("y").innerText = y;
    console.log(y);
    download("x.txt", y);
}

