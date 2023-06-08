var i,j;
let checkboxValue = [];

document.addEventListener('keydown', function() {
    document.querySelectorAll('[type ="checkbox"]').forEach(item => {
        if(item.checked === true) {
            checkboxValue.push(item.value);
            i = checkboxValue[0];
            j = checkboxValue[checkboxValue.length-1];
            console.log(i,j);
            for (let k = i; k <= j; k++) {
                document.getElementById(k).checked = true;
            }
        }
    });
    
})