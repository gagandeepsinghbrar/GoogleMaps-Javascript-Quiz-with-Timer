//timer tools
var totalcen = 0;

//<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>

function setTime(){
  ++totalcen;
  mili.innerHTML = pad(parseInt(totalcen % 100));
  sec.innerHTML = pad(parseInt((totalcen/100)) % 60);
  min.innerHTML = pad(parseInt((totalcen/6000))%60);  
}
//<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>
function pad(value){
  var valstr = value + "";
  if(valstr.length < 2){
    return "0"+valstr;
  }
  
  else{
    return valstr;
  }
}
//<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>
min = document.getElementById("minutes");
 sec = document.getElementById("seconds");
 mili = document.getElementById("milisec");
//<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>
     /* timer ends here*/
//<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>
 //<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>
 


    var correctAnswers=0;
    var myarr= ["2. What about B4 Lot?","3. How about Sierra Hall?","4. Do you know where Live oak is?","5. Admissions aka Bayramian hall?"]
    var counter=0;


    function doAnimation(){
      if(correctAnswers>=4){
         $('#questions').append(`<p id="animateMeDude" style="color:#648e30;font-size:20px"> Excellent ! Your score is ${correctAnswers} out of 5 </p>`)
      }
      else{
      $('#questions').append(`<p id="animateMeDude" style="color:#ad3f29;"> Your score is ${correctAnswers} out of 5 </p>`)
    }
      $('#animateMeDude').addClass('animated bounceIn infinite');

    }



    // adds text to the div on demand
    function adder(){
     
        textToInject= myarr[counter];
       
        if(textToInject){
        $('#questions').append(`<div class="questionbox" style="background-color:#adbccc"> <i>${textToInject} </i> </div>`)
        }
      if(!textToInject){
              clearInterval(a);
              $('.timer').addClass('animated bounceIn');
        

}
// moving the index forward
      counter++;

    }
     var myStyle = [
       {
         featureType: "administrative",
         elementType: "labels",
         stylers: [
           { visibility: "off" }
         ]
       },{
         featureType: "poi",
         elementType: "labels",
         stylers: [
           { visibility: "off" }
         ]
       },{
         featureType: "water",
         elementType: "labels",
         stylers: [
           { visibility: "off" }
         ]
       },{
         featureType: "road",
         elementType: "labels",
         stylers: [
           { visibility: "off" }
         ]
       }
     ];

     var map = new google.maps.Map(document.getElementById('map'), {
       mapTypeControlOptions: {
         mapTypeIds: ['mystyle', google.maps.MapTypeId.ROADMAP, google.maps.MapTypeId.TERRAIN]
       },
       center: new google.maps.LatLng(34.239982, -118.529345),
       zoom: 16.4,
       mapTypeId: 'mystyle',
       scrollwheel: false,
    navigationControl: false,
    mapTypeControl: false,
    scaleControl: false,
    draggable: false,
     disableDefaultUI: true
     });

     map.mapTypes.set('mystyle', new google.maps.StyledMapType(myStyle, { name: 'My Style' }));
     // works when double clicked anywhere
    google.maps.event.addListener(map, 'dblclick', function(event) {
// counter starts in beginning
      if(counter==0){a = setInterval(setTime,10);}
      //console.log(counter)
      if(counter<=4){
     if(boundArr[counter].contains(event.latLng)){
       if(counter%2==0){
      $('#questions').append(`<div class="questionbox" style="color:#39772e"> Correct !  </div>`);
      $('#map').addClass('animated bounceIn');
    }
    else{
        $('#questions').append(`<div class="questionbox" style="color:#39772e"> Good Job Matador!  </div>`);
        $('#map').addClass('animated bounceInDown');
    }
      boundNameArr[counter].fillColor='green';
      boundNameArr[counter].strokeColor='green';
      boundNameArr[counter].setVisible(true);
     
      correctAnswers++;
      console.log("correct answers are "+ correctAnswers)
     
     }
     else{
      if(counter%2==0){
      $('#questions').append(`<div class="questionbox" style="color:#cc4b20"> Wrong Answer  </div>`)
      $('#map').addClass('animated shake');
    }
    else if(counter==3){
      $('#questions').append(`<div class="questionbox" style="color:#cc4b20"> Oops you need to have around more!  </div>`)
       $('#map').addClass('animated wobble');
    }
    else{
           $('#questions').append(`<div class="questionbox" style="color:#cc4b20"> Oops!  </div>`)
            $('#map').addClass('animated swing');
    }
      
      boundNameArr[counter].setVisible(true)
     }
    if(counter==4){
      doAnimation();
    }
  // alert( 'Latitude is : ' + event.latLng.lat() + ' and Longitude is: ' + event.latLng.lng() );
  adder();
    }
});
  /* --------------------------------------------------*/


  //<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>
  //<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>
  //<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>


   var admissions = new google.maps.Rectangle({
    strokeColor: '#FF0000',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#FF0000',
    fillOpacity: 0.35,
    map: map,
    visible:false,
    bounds: {
     
      north:34.2407,
      south:34.2398,
      east:-118.5301,
      west:-118.5316
    }
  });
  var sequoia = new google.maps.Rectangle({
    strokeColor: '#FF0000',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#FF0000',
    fillOpacity: 0.35,
    visible:false,
    map: map,

    
    bounds: {
      north:34.2408,
      south:34.2400,
      east:-118.5274,
      west:-118.5285
    }
  });
  var lotb4 = new google.maps.Rectangle({
    strokeColor: '#FF0000',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#FF0000',
    fillOpacity: 0.35,
    map: map,
    visible:false,
    bounds: {
     
      north:34.2408,
      south:34.2391,
      east:-118.5324,
      west:-118.5339
    }
  });
  
   var liveoak = new google.maps.Rectangle({
    strokeColor: '#FF0000',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#FF0000',
    fillOpacity: 0.35,
    map: map,
    visible:false,
    bounds: {
     
      north:34.2384,
      south:34.2380,
      east:-118.5275,
      west:-118.5289
    }
  });
   var sierra = new google.maps.Rectangle({
    strokeColor: '#FF0000',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#FF0000',
    fillOpacity: 0.35,
    visible:false,
    map: map,
    bounds: {
     
      north:34.2385,
      south: 34.2380,
      east:-118.5300,
      west:-118.5314
    }
  });
   //<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>
   //<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>
   //<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>
   
  var boundArr=[sequoia.getBounds(),lotb4.getBounds(),sierra.getBounds(),liveoak.getBounds(),admissions.getBounds()];
  var boundNameArr=[sequoia,lotb4,sierra,liveoak,admissions];