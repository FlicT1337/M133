const jobUrl = 'https://sandbox.gibm.ch/berufe.php';
//get data from url
$.getJSON(jobUrl)
  //if successful return the data into $data
  .done(function (data) {
    console.log(data);
    //empty message (no problem with api call)
    $('warningMessage').empty;
    //append drop down box
    $.each(data, function (i, berufe) {
      $('<option value="' + berufe.beruf_id + '">' + berufe.beruf_name + '</option>').appendTo($('#berufe'));
    });
  })
  .fail(function () {
    $('warningMessage').html('No Connection to Server :(');
  });

function getClass(klasse_id) {
  let klassen_url = 'http://sandbox.gibm.ch/klassen.php?beruf_id=' + klasse_id;
  $('#klassen').html('');
  $.getJSON(klassen_url)
    //if successful return the data into $data
    .done(function (data) {
      console.log(data);
      //empty message (no problem with api call)
      $('warningMessage').empty;
      //append drop down box
      $.each(data, function (i, klassen) {
        $('<option value="' + klassen.klasse_id + '">' + klassen.klasse_name + '</option>').appendTo($('#klassen'));
      });
    })
    .fail(function () {
      $('warningMessage').html('No Connection to Server :(');
    });
}

function setLocalStorage() {
    
  localStorage.setItem('job', $("#berufe option:selected").val());
  localStorage.setItem('class', $("#klassen option:selected").val());

  initializeCalendar();
  console.log("initializeCalendar");

}
 
