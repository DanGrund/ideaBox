var ideaArray = [];
var $title = $('#title');
var $body = $('#body');

$('.save').on('click', function(e){
  var title = $title.val();
  var body = $body.val();
  var idea = new Idea(title, body);
  storeIdea(idea);
  createCard(title, body);
  $title.val("");
  $body.val("");
});

$("#ideas").on("click", "#delete-btn", function(){
  $(this).closest("article").remove();
});

function Idea(title, body) {
  this.id = Date.now();
  this.title = title;
  this.body = body;
  this.quality = 'swill';
}

function storeIdea (idea) {
  // localStorage.setItem('ideaArray', ideaArray);
  // JSON.parse(localStorage.getItem(ideaArray));
  ideaArray.push(idea.id, idea);
  localStorage.setItem("ideaArray", JSON.stringify(ideaArray));
};

function createCard(title, body) {
  var title = title;
  var body = body;
  $('#ideas').prepend('<article class="newIdea">\
  <h1>'+title+'</h1>\
  <button id="delete-btn">delete</button>\
  <p>'+body+'</p>\
  <button id="up-btn">up</button>\
  <button id="down-btn">down</button>\
  <h2>quality</h2>\
</article>')
};


//ROUGH DRAFT FOR QUALITY RATINGS
// $('up').on('click', function(){
// var quality = function() {
//
//   this.upQuality =  {
//     "genius": "genius",
//     "plausible": "genius",
//     "swill": "plausible"
//   }
// }
//
//   this.downQuality = {
//     "swill": "swill",
//     "plausible": "swill",
//     "genius": "plausible"
//   }
// }
//
// upQuality[currentValue]
// downQuality[currentValue]
