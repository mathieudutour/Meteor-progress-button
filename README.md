A nifty progress button from [Codrops](http://tympanus.net/codrops/2014/04/09/how-to-create-a-circular-progress-button/)

Installation
============

    $ meteor add matdutour:progress-button

Usage
=====


	{{#progress_button class="myClass" id="myId" type="submit"}}
		Login
	{{/progress_button}}

	// to animate the button add the corresponding class

	$("#myId").addClass("loading");
	$("#myId").addClass("error");
    $("#myId").addClass("success");
    
    // for example :
    
    $("#myId").addClass("loading");
    Meteor.loginWithPassword(email, password, function (err) {
      $("#myId").removeClass("loading");
      if (err) {
        console.log(err);
        $("#myId").addClass('error');
        Meteor.setTimeout(function () { $("#myId").removeClass('error'); }, 1200 );
      } else {
        $("#myId").addClass('success');
        Meteor.setTimeout(function () { $("#myId").removeClass('success'); }, 1200 );
      }
    });
