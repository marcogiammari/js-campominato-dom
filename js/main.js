// INIT
const gridContainer = document.getElementById("grid");
const playBtn = document.getElementById("play-btn");
let bombs = [];

// associo la funzione al bottone
playBtn.addEventListener("click", function () {
    let gridNum = document.querySelector("select").value;
    createGrid(gridNum);
    placeBombs(16, gridNum);
    startGame(gridNum);
});

function createGrid(gridNum) {
    // svuoto il contenuto della griglia
    gridContainer.innerHTML = "";
    gridContainer.style.display = "grid"
    // opzione alternativa con radice quadrata per gestire il numero di colonne
    gridContainer.style.gridTemplateColumns = `repeat(${Math.sqrt(gridNum)}, 1fr)`;
}

function placeBombs(num, gridNum) {
    bombs = [];
    for (let i = 0; i < num; i++) {
        let bomb = Math.floor(Math.random() * gridNum) + 1;
        if (!bombs.includes(bomb)) {
            bombs.push(bomb)
        } 
        else {
            i -= 1;
        }
    }
}

// definisco startGame
function startGame(difficulty) {
    for (let i = 1; i <= difficulty; i++) {
        let el = document.createElement("div");
        el.classList.add("square");
        el.innerText = i;
        el.addEventListener("click", function () {
            console.log(bombs)
            hasBomb = false;
            for (let j = 0; j < bombs.length; j++) {
                const bomb = bombs[j];
                if (bomb == (this.innerText)) {
                    hasBomb = true;
                } 
            }
            if (hasBomb) {
                this.classList.add("exploded");
            } else {
                this.classList.toggle("clicked");
            }
        })
        gridContainer.appendChild(el);
    }
}
