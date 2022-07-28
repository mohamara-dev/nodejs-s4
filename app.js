let carParking = false
let criticalFineCounter = 0
const fines = []

class fine {
    title
    cost

    constructor (titleFromOutside, costFromOutside) {
        this.title = titleFromOutside
        this.cost = costFromOutside
    }

    addToFines () {
        fines.push(this)
    }
}

function fineHim(title , cost) {
   new fine(title, cost).addToFines()
}

// const fines = [fine1, fine2, fine3, fine4, fine5 ]

// console.log(fine1.title)
function queryFines() {
    for (let i = 0; i < fines.length; i++){
        if (fines[i].cost > 300) {
            criticalFineCounter++
        }
    }  
}
function makeDecision() {
    if (criticalFineCounter > 2) {
        carParking = true
    }

}

fineHim('parking', 100)
fineHim('parking', 100)
fineHim('overSpeed', 400)
fineHim('overSpeed', 400)
fineHim('overSpeed', 400)
 
queryFines()
makeDecision()

console.log(fines)
