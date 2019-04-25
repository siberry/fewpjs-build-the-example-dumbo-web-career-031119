// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

document.addEventListener('click', (event) => {
  mimicServerCall().then(()=>{
    if (event.target.tagName === "SPAN") {
      if (event.target.className === "like-glyph") {
        event.target.className = "activated-heart"
        event.target.innerText = FULL_HEART
      }
      else {
        event.target.className = "like-glyph"
        event.target.innerText = EMPTY_HEART
      }
    }
  })
  .catch((error) => {
    document.getElementById('modal').className = ''
    setTimeout(() => {document.getElementById('modal').className = "hidden"}, 1000)
  })
}
)


//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
