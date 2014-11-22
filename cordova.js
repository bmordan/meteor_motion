if (Meteor.isClient) {

  Template.area.rendered = function(){
    var el = this.find('section')
    Hammer(el).on('press', function(e){
      $('samp').text(e.type)
      console.log('press')
    })
  }
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}