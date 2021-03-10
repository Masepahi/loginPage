$(document).ready(function () {
  $("#submitBtn").on("click", function () {
    $.ajax({
      type: "POST",
      url: "/signUp",
      success: function (success) {
    
      }
    });
  });
});

let rePass = $('#rePassword');
let password = $('#password');
let button = $('#submitBtn');

