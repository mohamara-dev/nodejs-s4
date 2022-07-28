
function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

class car {
    speed = 0 // -30 - 240
    engineOn = false // true - false
    a = 15

    engine() {
        this.engineOn = !this.engineOn
    }

    pushGasPedal(time) {
        for (let i = 0; i < time; i++){
            if (this.speed < 240) {
                const nowSpeed = this.a * i + this.speed
                if (nowSpeed < 240) {
                    this.speed = nowSpeed
                }
            }
        }
    }

    pushBreakPedal(time) {
        for (let i = 0; i < time; i++) {
            if (this.speed > 0) {
                const nowSpeed = -1 * (this.a * i) + this.speed
                if (nowSpeed > 0 ) {
                    this.speed = nowSpeed
                }
            }
        }
    }

    drive(place) {
        let t
        let type

        if (place == 'highway') {
            type = 'accelerate'
            t = randomIntFromInterval(150, 300)
        } else if (place == 'st') {
            type = 'accelerate'
            t = randomIntFromInterval(1, 30)
        } else if (place == 'park') {
            type = 'break'
            t = randomIntFromInterval(150, 300)
        }
        if (this.engineOn) {
            this.speedController(type, t)
        }
        
    }

    speedController(type, t) {
        if (type == 'accelerate') {
            this.pushGasPedal(t)
        } else {
            this.pushBreakPedal(t)
        }
    }

}

const pedramCar = new car

pedramCar.engine()

pedramCar.drive('st')
console.log('st', pedramCar.speed)
pedramCar.drive('highway')
console.log('highway1', pedramCar.speed)
pedramCar.drive('highway')
console.log('highway2', pedramCar.speed)
pedramCar.drive('st')
console.log('st', pedramCar.speed)
pedramCar.drive('park')
console.log('park', pedramCar.speed)
