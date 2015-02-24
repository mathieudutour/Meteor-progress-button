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

    var button = new ProgressButton("myId", {duration : 1200});
	button.loading();
	button.error();
    button.success();
    
    // for example :
    
    var button = new ProgressButton("myId");
    Meteor.loginWithPassword(email, password, function (err) {
      if (err) {
        console.log(err);
        button.error();
      } else {
        button.success();
      }
    });
