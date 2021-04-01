
function AirHumidifier(name, type, volume, color, power) {
    this.name = name;
    this.type = type;
    this.volume = volume + ' л.';
    this.color = color;
    this.power = power;
    this.workTime = function (water, power) {
        if(pow > this.power) {
            alert('Такой мощности нет');
        } else  {
            this.workTime = (Math.floor(water / 0.3)) / power + ' ч.';
            alert(`Время работы ${this.workTime}`);
        }
        
    }
}

const airHumidifier = new AirHumidifier('Xiaomi', 'ultrasonic', 4, 'white', 2);


let water = prompt(`Введите объем воды в литрах: \nМаксимальный объем ${airHumidifier.volume} воды`,`0`);
let pow = prompt(`Введите скорость от 1 до ${airHumidifier.power}`,'');

console.log(airHumidifier);
airHumidifier.workTime(water, pow);