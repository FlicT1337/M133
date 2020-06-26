//Full Calendar Settings und Event eintragen
const scheduleUrl = "https://sandbox.gibm.ch/tafel.php";
var calendarEl = document.getElementById("calendar");
var events = [];

var calendar = new FullCalendar.Calendar(calendarEl, {
  plugins: ["timeGrid", "bootstrap"],
  defaultView: "timeGridWeek",
  handleWindowResize: true,
  height: "auto",
  weekends: false,
  allDaySlot: false,
  nowIndicator: true,
  locale: "de",
  timeZone: "UTC+2",
  minTime: "07:00:00",
  maxTime: "20:00:00",
  themeSystem: "bootstrap",
  footer: false,
  header: {
    left: "prevDate, nextDate",
    center: "title",
    right: "openModal,todayB",
  },
  //costum buttons for the calendar
  customButtons: {
    openModal: {
      text: "einstellungen",
      bootstrapFontAwesome: "fas fa-cog",
      click: function () {
        $("#myModal").modal("show");
      },
    },
    nextDate: {
      text: ">",
      bootstrapFontAwesome: "fas fa-step-forward",
      click: function () {
        calendar.next();
        initializeCalendar();
      },
    },
    prevDate: {
      text: "<",
      bootstrapFontAwesome: "fas fa-step-backward",
      click: function () {
        calendar.prev();
        initializeCalendar();
      },
    },
    todayB: {
      text: "today",
      bootstrapFontAwesome: "fas fa-calendar-day",
      click: function () {
        calendar.today();
        initializeCalendar();
      },
    },
  },
});
//initializes the calendar on load
window.onload = function () {
  $('.fc-toolbar.fc-header-toolbar').addClass('row col-lg-12');
  initializeCalendar();
};

//creats the events in the calendar
function initializeCalendar() {
  events = [];
  var now = moment(calendar.getDate());
  var week = now.format("ww-yyyy");
  const url = `${scheduleUrl}?klasse_id=${localStorage.getItem(
    "class"
  )}&woche=${week}`;
  $.getJSON(url, function (data) {
    for (var table of data) {
      var event = {
        title: table.tafel_longfach,
        start: table.tafel_datum + "T" + table.tafel_von,
        end: table.tafel_datum + "T" + table.tafel_bis,
        prof: table.tafel_lehrer,
        room: table.tafel_raum,
        comment: table.tafel_kommentar,
        allDay: false,
      };

      events.push(event);
    }
  }).done(function () {
    calendar.getEvents().forEach(removeEvents);
    function removeEvents(eventObject) {
      eventObject.remove();
    }
    calendar.getEvents().forEach((event) => event.remove());
    events.forEach((event) => calendar.addEvent(event));
  });

  //renders the calendar with the events
  calendar.render();
}
