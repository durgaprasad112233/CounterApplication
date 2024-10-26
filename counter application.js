let counterelement = document.getElementById("countervalue");
console.log(counterelement);

function onDecrease() {
    let previouscountervalue = counterelement.textContent;
    let UpdatedCounterValue = parseInt(previouscountervalue) - 1;
    counterelement.textContent = UpdatedCounterValue;

    if (UpdatedCounterValue > 0) {
        counterelement.style.color = "green";
    } else if (UpdatedCounterValue < 0) {
        counterelement.style.color = "red";
    } else {
        counterelement.style.color = "black";
    }
}

function onReset() {
    let UpdatedCounterValue = 0;
    counterelement.textContent = UpdatedCounterValue;
    counterelement.style.color = "black";
}

function onIncrease() {
    let previouscountervalue = counterelement.textContent;
    let UpdatedCounterValue = parseInt(previouscountervalue) + 1;
    counterelement.textContent = UpdatedCounterValue;

    if (UpdatedCounterValue > 0) {
        counterelement.style.color = "green";
    } else if (UpdatedCounterValue < 0) {
        counterelement.style.color = "red";
    } else {
        counterelement.style.color = "black";
    }
}