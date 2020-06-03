var serverUrl = 'https://sandbox.gibm.ch/berufe.php';
//get data from url
$.getJSON(serverUrl)
  //if successful return the data into $data
  .done(function (data) {
    console.log(data);
    //empty message (no problem with api call)
    $('warningMessage').empty;
    //append drop down box
    $.each(data, function (i, beruf) {
      $('<option value="' + beruf.beruf_id + '">' + beruf.beruf_name + '</option>').appendTo($('#jobs'));
    });
  })
  .fail(function () {
    $('warningMessage').html('No Connection to Server :(');
  });
