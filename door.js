// main variables
let doorClicks = 0
let cpc = 1
let cps = 0

// If Then variables
let Reached10000 = 0

//Html Elements Variables
let doorIMG = document.getElementById("DoorIMG")
let cpcEL = document.getElementById("cpc")
let cpsEL = document.getElementById("cps")
let doorEl = document.getElementById("clicks")
let cpcItembar = document.getElementById("CpcItemBar")
let cpsItembar = document.getElementById("CpsItemBar")
let cpcItembarBtn = document.getElementById("CpcItemBarBtn")
let cpsItembarBtn = document.getElementById("CpsItemBarBtn")
let gotoCpsBtn = document.getElementById("GotoCpsBtn")
let gotoCpcBtn = document.getElementById("GotoCpcBtn")

function submitToWorld() {
    let name = prompt("Enter your name:");
    if (!name) return;

    fetch(`http://dreamlo.com/lb/rOEHHT_BtUq3NDNmfiTCFQ2Or3kawmuEeShufdaJnvNw/add/${name}/${doorClicks}`)
    .then(() => {
        alert("Score submitted! Refresh to see it but be mindfull your progress doeesn't save!");
        fetch(`https://dreamlo.com/6a0163d18f40bc10683f8f2d/pipe/5`)
        displayWorldScores() 
    });
}
function displayWorldScores() {
    const list = document.getElementById("scoreList");
    if (!list) return;

    const publicKey = "6a0163d18f40bc10683f8f2d";
    const url = `https://dreamlo.com{publicKey}/pipe/5?t=${Date.now()}`;

        fetch(url, { cache: 'no-store' })
        .then(response => response.text())
        .then(data => {
            list.innerHTML = ""; // Clear old scores
            if (!data || data.trim() === "") return;

            let lines = data.split(/\r?\n/);
            lines.forEach(line => {
                let parts = line.split("|");
                if (parts.length >= 2) {
                    let li = document.createElement("li");
                    // parts[0] is the Name, parts[1] is the Score
                    li.innerText = `${parts[0]}: ${parts[1]} clicks`;
                    list.appendChild(li);
                }
            });
        })
        .catch(err => console.error("Leaderboard error:", err));
}

function buyWood() {
    if (doorClicks>100000) {
        cps = cps + 1
        doorClicks = doorClicks - 100000
        refresh()
    } else {
        alert("Not Enough Clicks")
    }
}

setInterval(() => {
    if (cps > 0) {
        doorClicks = doorClicks + cps;
        console.log("test")
        refresh();
    }
}, 1000);



function refresh() {
    cpcEL.innerText = cpc
    cpsEL.innerText = cps
    doorEl.innerText = doorClicks
    Check10000()
    displayWorldScores()
}


async function poop() {
    doorClicks = doorClicks + cpc
    doorEl.innerText = doorClicks
    console.log(doorClicks)
    doorIMG.src = "open-door.png"
    const sleep = ms => new Promise(res => setTimeout(res, ms));
    await sleep(500);
    doorIMG.src = "door.png"
}
function buyHandle() {
    refresh()
    if (doorClicks>=250) {
        doorClicks = doorClicks - 250
        if (cpc === 1) {
            cpc = 5
            refresh()
        } else {
            cpc = cpc + 5
            refresh()
        }
    } else {
        alert("Not Enough Clicks!");
    }
}
function buyKey() {
    refresh()
    if (doorClicks>=1000) {
        doorClicks = doorClicks - 1000
        if (cpc === 1) {
            cpc = 25
            refresh()
        } else {
            cpc = cpc + 25
            refresh()
        }
    } else {
        alert("Not Enough Clicks!");
    }
}
function buyLock() {
    refresh()
    if (doorClicks>=10000) {
        doorClicks = doorClicks - 10000
        if (cpc === 1) {
            cpc = 300
            refresh()
        } else {
            cpc = cpc + 300
            refresh()
        }
    } else {
        alert("Not Enough Clicks!");
    }
}

if (doorClicks>1000000){
        if (cpcUnlockBtnView===0) {
        refresh()
    }
}
// CPS & CPC Item bar functions 

function CPSitembar() {
    if (Reached10000>0){
        cpsItembar.style.display = "block"
        cpcItembar.style.display = "none"
        gotoCpsBtn.style.display = "block"
        gotoCpcBtn.style.display = "none"
    }
}
function CPCitembar() {
    cpcItembar.style.display = "block"
    cpsItembar.style.display = "none"
    gotoCpsBtn.style.display = "block"
    gotoCpcBtn.style.display = "none"
}
function Check10000() {
    if (doorClicks>10000) {
        Reached10000 = 1
        gotoCpsBtn.style.display = "block"
    }
}
function CpsItemBarBtnhide() {
    gotoCpsBtn.style.display = "none"
}
function init() {
    CpsItemBarBtnhide()
    CpsItemBarBtnhide()
    CPCitembar()
    refresh()
}

init()