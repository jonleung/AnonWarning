var number;
var entered;
var picture;
var image_width = 70;
var image_height = 70;
var minutes;
var audio = new Audio("http://www.oringz.com/oringz-uploads/d0_oringz-pack-nine-06.mp3");
// var name = prompt("Target's name?")
// var message = prompt("Enter your message");
// sendSms(message);
// contacts = ["415-298-4987"];
function checkNum(e){
  if(e.which == 13) {
    entered = true;
    enterNum();
  }
}
function enterNum() {
  number = $('#victimNum').val();
  // console.log("num"+$('#victimNum').text())
  $('#victimNum').hide();
}
$('#victimNum').keypress(function(e) {
  checkNum(e);
});
$('#newMsg').keypress(function(e) {
  if(e.which == 13) {
    sendSms();
  }
});
maestro.Twilio.recieveSms(function(reply){
  audio.play();
  // var date = new Date();
  // fixMinutes(date);
  $('#messageIntro').append('<img style = "width: '+image_width+'px; height: '+image_height+'px;" src ="http://media3.giphy.com/media/nQ8XtX3ctBCkE/giphy.gif">'+'<p>'+(new Date()).toTimeString().substr(0,5)+'<p class = "you">'+'<b>'+'Victim: '+'</b>'+reply.Body+'</p></p>');
  $('#welcome').hide();
  // console.log("reply: "+reply.Body); //prints the number that sent a message to twilio-number
});
function sendSms(){
  if(!(entered)){
    enterNum();
  }
  var msg = $('#newMsg').val();
  maestro.Twilio.sendSms(number, msg);
  // var date = new Date();
  // fixMinutes(date);
  // contacts.push = number;
  // console.log("num: "+number+"msg: "+msg);
  // console.log("sent!");
  $('#messageIntro').append('<img style = "width: '+image_width+'px; height: '+image_height+'px;" src ="http://img.pandawhale.com/post-27657-crazy-hat-with-bread-on-head-g-Tnb2.gif">'+'<p>'+(new Date()).toTimeString().substr(0,5)+'<p class = "me"> <b>'+'Me: '+'</b>'+msg+'</p> </p>');
  $('#welcome').hide();
  $('#newMsg').val(" ");
}
/*
if(whoYouGonnaCall == "Next"){
  maestro.Twilio.callAndSay("925-487-2366", "Hi this is Sam from 31 Flavors, if you can name 31 Flavors in 31 seconds you can win 31 thousand dollars, ready go!! Brought to you by Pulkit Industries");
}
if(whoYouGonnaCall == "Ishaan"){
  var message = "Hello. The password is Bambi. I repeat, the password is Bambi.";
  maestro.Twilio.callAndSay("925-998-6703", message);
}
if(whoYouGonnaCall == "Ghostbusters"){
  var audio = new Audio("http://kollegedaily.typepad.com/product_shop_nyc/files/totally_80s_ghostbusters_theme.mp3").play();
  alert("What a smartass...");
}
if(whoYouGonnaCall == "Swag"){
    var audio = new Audio("http://a.tumblr.com/tumblr_m8icg27PnV1r9dtawo1.mp3");
    maestro.Twilio.callAndPlay("925-998-6703", "http://a.tumblr.com/tumblr_m8icg27PnV1r9dtawo1.mp3");
}
*/
