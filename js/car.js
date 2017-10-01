export function Car(name) {
    this.name = name;
}

Car.prototype.getName = function() {
    return this.name;
}

export function Truck(name,capacity) {
Car.call( this, name );
this.capacity = capacity;
}

Truck.prototype = Object.create( Car.prototype );
// Beware! Now `Bar.prototype.constructor` is gone,
// and might need to be manually "fixed" if you're
// in the habit of relying on such properties!
Truck.prototype.getCapacity = function() {
return this.capacity;
};