/* creazione sessione per i dati inseriti nella form */

function saveData() {

    let inputDate = document.getElementById("date").value;
    let inputEndDateTitle = document.getElementById("end-date-title").value;
    let inputText = document.getElementById("text").value;

   sessionStorage.setItem("date", inputDate);
    sessionStorage.setItem("end-date-title", inputEndDateTitle);
   sessionStorage.setItem("text", inputText);

}