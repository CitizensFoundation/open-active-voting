(function(document) {
  'use strict';

  // Create IE + others compatible event handler
  var eventMethod = window.addEventListener ? "addEventListener" : "attachEvent";
  var eventer = window[eventMethod];
  var messageEvent = eventMethod == "attachEvent" ? "onmessage" : "message";

  console.log("Have created event listener");

  alert("Event listerner created");
// Listen to message from child window
  eventer(messageEvent,function(e) {
    alert("YES!!!");
    if (e.data=='samlLogin' && window.appUser) {
      window.appUser.loginFromSaml();
      console.log("Have contacted app user 2");
    }
  },false);

  function receiveMessage(event)
  {
    alert("Second recieve");
  }
  window.addEventListener("message", receiveMessage, false);
  alert("Second create");

})(document);