let map;

$(document).ready(() => {
  //materialize elements
  $('.modal').modal();
  $('.button-collapse').sideNav();
  $('.slider').slider({ full_width: true });
  $('.parallax').parallax();

  //smooth scroll
  $('.scrollspy').click((e) => {
    let linkHref = $(this).attr('href');
    $('html, body').animate({
      scrollTop: $(linkHref).offset().top
    }, 1000);
    e.preventDefault(); //removes section name from url
  });

  //Fb Retrieve data search JSON
  $('#submitSearch').click((e) => {
    e.preventDefault();
    let search = $("#search").val();
    $.ajax({
      url: `/search/${search}`,
      method: "GET"
    })
      .done((data) => {
        data = JSON.parse(data);
        console.log(data.events);
        for (let i in data.events) {
          $('#tableBody').append(`
            <tr>
                <td><a name="event" data-name="${data.events[i].name}" data-email="${data.events[i].venue.emails}" data-venue="${data.events[i].venue.name}" data-image="${data.events[i].profilePicture}" data-desc="${data.events[i].description}" data-street="${data.events[i].venue.location.street}" data-town="${data.events[i].venue.location.city}" data-zip="${data.events[i].venue.location.zip}" data-date="${moment(data.events[i].startTime).format('DD-MMM-YYYY')}" data-time="${moment(data.events[i].startTime).format('h:mm A')}" data-target="#modal1" href="#modal1">${data.events[i].name}</a></td>
                <td>${data.events[i].venue.name}</td>
                <td>${moment(data.events[i].startTime).format('DD-MMM-YY')}</td>
            </tr>`);

          let pos = new google.maps.LatLng(data.events[i].venue.location.latitude, data.events[i].venue.location.longitude);
          createMarker(pos, data.events[i]);
        }
      });
  });

  $('body').on('click', (event) => {
    console.log(event.target.name);
    if (event.target.name === "event"){
      let name = $(event.target).attr('data-name');
      let image = $(event.target).attr('data-image');
      let street = $(event.target).attr('data-street');
      let town = $(event.target).attr('data-town');
      let zip = $(event.target).attr('data-zip');
      let desc = $(event.target).attr('data-desc');
      let venue = $(event.target).attr('data-venue');
      let eventDate = $(event.target).attr('data-date');
      let eventTime = $(event.target).attr('data-time');
      let email = $(event.target).attr('data-email');

      modalView(name, image, street, town, zip, desc, eventDate, eventTime, venue, email);
    }
  });
});

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: 51.5074, lng: 0.1278 },
    zoom: 5
  });
}

//marker 
function createMarker(pos, obj) {
  var marker = new google.maps.Marker({
    position: pos,
    map: map,  // google.maps.Map 
  });

  //infowindow information
  let contentName = `<h5>${obj.name}</h5>`;
  let infowindow = new google.maps.InfoWindow({
    content: contentName
  });

  //open and close info window
  google.maps.event.addListener(marker, 'click', () => {
    infowindow.open(map, marker);
    setTimeout(() => { infowindow.close(); }, 3000);
  });

  return marker;
}

// modal view
function modalView(name,image,street, town, zip, desc, eventDate, eventTime, venue, email) {

  $('#modalHeader').html(`<h4>${name}</h4>`);
  $('#modalText').html(`
  <div class="row">
    <div class="col s12 m12 l6"><img class="modalImg" src="${image}"/></div>
     <div class="col s12 m12 l6">
      <p><img class="modalIcons" src="images/marker.png"/>${street} , ${town}, ${zip}</p>
      <p><img class="modalIcons" src="images/venue.png"/>${venue}</p>
      <p><img class="modalIcons" src="images/calender.png"/>${eventDate}, ${eventTime}</p>
      <p><img class="modalIcons" src="images/calender.png"/>${email}</p>
     </div>
     </div>
    <h5>Description</h5>
     <p>${desc}</p>
     `);

}

