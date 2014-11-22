if (Meteor.isClient) {

  var stream;

  Template.press.rendered = function(){
    el = this.find('section')
    Hammer(el).on('press', function(e){
      stream = true
      $('samp').text(e.type)
    })
    Hammer(el).on('hammer.input', function(e){
      if(e.isFirst === false){
        stream = false
        $('cite').text('motion')
        $('samp').text('Press & Hold')
      }
    })
  };

  if(window.DeviceMotionEvent){
    window.addEventListener('devicemotion', function(m){
      var x  = m.acceleration.x
      if(stream) $('cite').text(x.toPrecision(4))
    })
  };

}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}