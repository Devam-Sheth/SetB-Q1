var checkbox = document.querySelectorAll("input[type = 'checkbox']");
var i,j;
let checkboxValue = []; 

document.addEventListener('keydown', function() {
    checkbox.forEach(item => {
        if (item.checked === true) {
            checkboxValue.push(item.value); 
            i = checkboxValue[0];
            j = checkboxValue[checkboxValue.length-1];
            for ( let k = i; k <= j; k++) {
                document.getElementById(k).checked = true;
            }           
        } else {
            m= item.value;
            let firstCheckedBox = parseInt(i);
            let lastCheckedBox = parseInt(j);
            let uncheckedValues = parseInt(m);
            let total = firstCheckedBox+lastCheckedBox;
            if(uncheckedValues < 6  && total >= uncheckedValues && firstCheckedBox!==lastCheckedBox) {
                console.log(firstCheckedBox,lastCheckedBox, uncheckedValues);
                for (let f = i; f < m; f++) {
                    console.log(document.getElementById(f));
                    document.getElementById(f).checked = false;
                    console.log(document.getElementById(f).checked);   
                }
            }
            console.log(document.getElementById(2).checked);
        }
    })
})