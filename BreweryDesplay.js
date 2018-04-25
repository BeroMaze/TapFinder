$( document ).ready(function() {
  console.log('hello');
  $.post('/breweryInfo', {name:'Milwaukee Brewing Company'}, function(data) {
  }).done(function(data) {
    console.log(data);
  });
});
