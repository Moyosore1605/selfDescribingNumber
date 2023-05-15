// function saveString() {
    //     Number2 = Number(document.getElementById('inputOfNumber').value);
    //     console.log(Number2.charAt(4));
    // }

    let display_answer = document.getElementById('displayAnswer')
function checkDescribing() {
    let stringNumber = document.getElementById('inputOfNumber').value;
    let arrayNum = stringNumber.split("")
    // for (let index = 0; index < arrayNum.length; index++) {
    //     let indexArray = arrayNum.filter(element => element == index)
    //     if (arrayNum[index] == indexArray.length) {
    //     }
    // }
    for (let index in arrayNum) {
        let indexArray = arrayNum.filter(element => element == index)
        if (arrayNum[index] == indexArray.length) {
            index++;
            if (index == arrayNum.length - 1) {
                display_answer.innerHTML = `The number ${stringNumber} is self-describing`
                break
            }
        }
        else {
            display_answer.innerHTML = `The number ${stringNumber} is not self-describing`
            break
        }
    }
}