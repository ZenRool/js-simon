const gridNum = document.getElementsByTagName("section")[0];
const ans = fiveNum ();
ans.forEach(num => {
    const box = document.createElement("div");
    box.classList.add("box");
    box.innerHTML = `<span>${num}</span>`
    gridNum.append(box);
    
});






function fiveNum() {
    const arr = [];

    while(arr.length < 5) {
        console.log(arr.length);
        let num = getRndInteger(0, 99);
        if (!arr.includes(num)) {
            arr.push(num);
        }
    }
    return arr;
}
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}