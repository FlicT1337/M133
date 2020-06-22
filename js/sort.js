document.addEventListener("DOMContentLoaded", function () {
  $("#berufe").on("change", function () {
    getClass($("#berufe option:selected").val());
  });
});

$("#klassen").hide();

$("#berufe").on("change", function () {
  console.log("Etwas wurde geändert");
  retriveClass();

  $("#klassen").show();
});

$("#klassen").on("change", function () {
  console.log("Setting local storage");
  setLocalStorage();
});

function retriveClass() {
  getClass($("#berufe option:selected").val());
}

