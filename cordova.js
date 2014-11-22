if (Meteor.isClient) {

  var stream;

  Template.press.rendered = function(){
    var el = this.find('section')
    Hammer(el).on('press', function(e){
      stream = true
      $('samp').text(e.type)
    })
    Hammer(el).on('hammer.input', function(e){
      if(e.isFirst === false){
        stream = false
        reset()
      }
    })

    function reset(){
      $('cite').css('left', '0px').text('Tilt to Move')
      $('samp').text('Press & Hold')
    }

  };


  if(window.DeviceOrientationEvent){
    window.addEventListener('deviceorientation', function(o){
      if(stream) {
        var m = (o.gamma*10).toPrecision(4)
        $('cite').css('left', m+'px').text(m)
      }
    })
  };
  
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}