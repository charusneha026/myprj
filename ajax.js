let data;
let budget_status;
function loadDoc() {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {

        if (this.readyState == 4 && this.status == 200) {
            data = this.responseText;
            document.getElementById("status").innerHTML = "Status: " + data;
        }
    }
    xhttp.open("GET", "status.txt", true);
    xhttp.send();

    budget_status = data;

    writeValues();
}
function writeValues() {
    if (budget_status !== undefined) {
        budget_status = budget_status.split(" ");
        document.getElementById("budget").innerHTML = budget_status[0];
        document.getElementById("cost").innerHTML = budget_status[1];
        document.getElementById("remain").innerHTML = budget_status[2];
    }
}