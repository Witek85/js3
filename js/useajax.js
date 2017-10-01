export default function useAjax(url) {

    var query;
    query = new XMLHttpRequest();
    query.onreadystatechange = function() {
        if(query.readyState === 4 && query.status === 200) {

            var arr = JSON.parse(this.responseText);
            var output = "";

            for(var i = 0; i < arr.length; i++) {
                output += arr[i].name + '<br>';
            }
            document.querySelector("#ajax1 .container").innerHTML += "<br/>" + output;

        }
    }

    query.open("GET", url, true);
    query.send();
} 