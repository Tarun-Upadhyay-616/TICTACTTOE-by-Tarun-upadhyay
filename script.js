let slots = document.querySelectorAll(".items");
let selec = document.getElementsByClassName("items");
let uppermsg = document.querySelector(".msg");

winpat = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]
const checkwin = () => {
    for (pattern of winpat) {
        place1 = slots[pattern[0]].innerText
        place1w = slots[pattern[0]]
        place2 = slots[pattern[1]].innerText
        place2w = slots[pattern[1]]
        place3 = slots[pattern[2]].innerText
        place3w = slots[pattern[2]]
        if (place1 != "" || place2 != "" || place3 != "") {

            if (place1 == place2 && place2 == place3) {
                place1w.style.backgroundColor = "yellow"
                place2w.style.backgroundColor = "yellow"
                place3w.style.backgroundColor = "yellow"
                uppermsg.innerText = "You have Won";
                slots.forEach((slot) => {
                    slot.disabled = true;

                })

            }

        }
    }
}
function checkdraw() {
    let board = Array.from(slots).map(items => items.innerText);
    if (board.includes("")) {
        return false
    }
    if (checkwin()) {
        return false
    }
    uppermsg.innerText = "Game Draw"
}

let turn = true;
slots.forEach((slot) => {
    slot.addEventListener("click", () => {
        if (turn == true) {
            slot.innerText = "X";
            turn = false;
            uppermsg.innerText = "Turn for O"
            slot.disabled = true
            checkwin()
            checkdraw()
        } else {
            slot.innerText = "O";
            turn = true;
            uppermsg.innerText = "Turn for X"
            slot.disabled = true
            checkwin()
            checkdraw()
        }
    })

})

const reset = () => {
    slots.forEach((slot) => {
        slot.style.backgroundColor = "#28abcf"
        slot.innerText = ""
        slot.disabled = false
        turn = true
        uppermsg.innerText = "Turn for X"

    })

}


