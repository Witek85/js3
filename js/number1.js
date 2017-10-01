export default class Number1 {
    constructor(num) {
        this.num = num;
    }
    render(element) {
        element.innerHTML += "<br/>" + this.num;
    }
}