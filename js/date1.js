export default class Date1 {
    constructor(dd,mm,rrrr) {

        if (dd == null) {
            var today = new Date ();
            this.dd = today.getDate();
            this.mm = today.getMonth() + 1;
            this.rrrr = today.getFullYear();    
        } else {
            this.dd = dd;
            this.mm = mm;
            this.rrrr = rrrr;   
        }

        this.addZero();

    }
    addZero() {
        if (this.dd < 10) {
            this.dd = "0" + this.dd;
        }

        if (this.mm < 10) {
            this.mm = "0" + this.mm;
        }
    }
    checkSunday() {

        var today = new Date ();
        var thisYear = today.getFullYear();  
        console.log("Starting from " + this.rrrr);  

        for (var year = this.rrrr; year <= thisYear; year++)
        {
            var d = new Date(year, 0, 1);
            if ( d.getDay() === 1 )
                console.log("1st January is being a Monday  "+year);
        }
    }
    render(element) {
        element.innerHTML += "<br/>" + this.dd + "/" + this.mm + "/" + this.rrrr;
    }
}