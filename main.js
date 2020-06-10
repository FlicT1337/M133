const jobUrl = 'https://sandbox.gibm.ch/berufe.php';
const classUrl = 'https://sandbox.gibm.ch/klassen.php';
const scheduleUrl = 'https://sandbox.gibm.ch/tafel.php';

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

$.getJSON(classUrl)
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
