var $title = $('#title');
var $body = $('#body');
//create object w/ input fields
function Idea(title, body) {
  this.id = Date.now();
  this.title = title;
  this.body = body;
  this.quality = 'swill';
}
//on save, run functions that save new idea to storage,
//and function that creates new card
$('.save').on('click', function(e){
  var title = $title.val();
  var body = $body.val();
  var idea = new Idea(title, body);
  //call on storeIdea prototype
  //call on function that displays new ideas
  createCard(title, body);
  $title.val("");
  $body.val("");
});

$("#ideas").on("click", "#delete-btn", function(){
  $(this).closest("article").remove();
});

//save new idea to local storage
Idea.prototype.storeIdea = function(idea) {
  //get all ideas from local storage (JSON parse)
  //push new idea to end of ideas array from local storage at end of array
  //set new local storage JSON stringify
}

function localStorage() {
var emptyArray = [];
array.push(idea);
var myJSONString = JSON.stringify(array);
}

function createCard(title, body) {
  var title = title;
  var body = body;
  $('#ideas').append('<article class="newIdea">\
  <h1>'+title+'</h1>\
  <button id="delete-btn">delete</button>\
  <p>'+body+'</p>\
  <button id="up-btn">up</button>\
  <button id="down-btn">down</button>\
  <h2>quality</h2>\
</article>')
};
