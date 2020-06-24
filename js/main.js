//grabs berufe from the api
const jobUrl = "https://sandbox.gibm.ch/berufe.php";

$.getJSON(jobUrl).done(function (data) {
  $.each(data, function (i, berufe) {
    $(
      '<option value="' +
        berufe.beruf_id +
        '">' +
        berufe.beruf_name +
        "</option>"
    ).appendTo($("#berufe"));
  });
});
//grabs klassen from the api
function getClass(klasse_id) {
  let klassen_url = "http://sandbox.gibm.ch/klassen.php?beruf_id=" + klasse_id;
  $("#klassen").html("");
  $.getJSON(klassen_url).done(function (data) {
    $.each(data, function (i, klassen) {
      $(
        '<option value="' +
          klassen.klasse_id +
          '">' +
          klassen.klasse_name +
          "</option>"
      ).appendTo($("#klassen"));
    });
  });
}
//sets the local storage
function setLocalStorage() {
  localStorage.setItem("job", $("#berufe option:selected").val());
  localStorage.setItem("class", $("#klassen option:selected").val());

  initializeCalendar();
}
