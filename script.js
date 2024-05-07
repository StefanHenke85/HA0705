

function SchaltjahrChecker() {
    let year = parseInt(document.getElementById("yearInput").value);
    let result = document.getElementById("result");
    
    if (isNaN(year)) {
        result.textContent = "Bitte geben Sie ein gültiges Jahr ein.";
        return;
    }

    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        result.textContent = `Das Jahr  ${year} ist ein Schaltjahr.Hoffentlich fahren sie mindesten´s ein Fahrzeug mit 5 Gang`;
    } else {
        result.textContent = `Das Jahr ${year} ist kein Schaltjahr.Bitte kaufen sie sich ein Automatik Fahrzeug`;
    }
}






document.addEventListener("DOMContentLoaded", function() {
    var yearInput = document.getElementById("yearInput");
    yearInput.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            SchaltjahrChecker();
        }
    });
});

document.getElementById("switch").addEventListener("click", () => {
    document.body.classList.toggle("whitemode")
})

