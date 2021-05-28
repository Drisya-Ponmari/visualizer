export function helperHighlight(Id, codeLength) {

    if (Id !== null) {
        for (let i = 1; i < codeLength; i++) {
            if (document.getElementById(i) != null)
                document.getElementById(i).className = ""
        }

        for (let i = 0; i < Id.length; i++) {

            if (document.getElementById(Id[i]) != null) {

                document.getElementById(Id[i]).className = "highlight"
            }
        }
    }
} 