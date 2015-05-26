"use strict"

// Stolen from https://developer.mozilla.org/en-US/docs/Web/API/notification
var notifyMe = function () {
  // Let's check if the browser supports notifications
  if (!("Notification" in window)) {
    alert("This browser does not support desktop notification");
  }

  // Let's check whether notification permissions have already been granted
  else if (Notification.permission === "granted") {
    // If it's okay let's create a notification
    var notification = new Notification("Hi there!");
  }

  // Otherwise, we need to ask the user for permission
  else if (Notification.permission !== "denied") {
    Notification.requestPermission(function (permission) {
      // If the user accepts, let's create a notification
      if (permission === "granted") {
        var notification = new Notification("Hi there!");
      }
    });
  }

  // At last, if the user has denied notifications, and you 
  // want to be respectful there is no need to bother them any more.
};

document.getElementById("w3c-notification").addEventListener("click", notifyMe, false);

var notify = function() {
  var options = {
    body: "Click me please!",
    icon: "../../../img/tizen-profiles-small.png",
    sound: "../../../sound/greeting.m4a",
    tag: "whatwg",
  };
  var n = new Notification('Greetings from Zhiqiang!', options);
  n.onclick = function() {
    alert("You have clicked the notification!");
  };
};

var notifyMeSound = function () {
  if (!("Notification" in window)) {
    alert("This browser does not support desktop notification");
  } else if (Notification.permission === "granted") {
    notify();
  } else if (Notification.permission !== "denied") {
    Notification.requestPermission(function (permission) {
      if (permission === "granted") {
        notify();
      }
    });
  }
};

document.getElementById("whatwg-notification").addEventListener("click", notifyMeSound, false);