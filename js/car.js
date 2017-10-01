export default function Car(name) {
    this.name = name;
}

Car.prototype.getName = function() {
    return this.name;
}