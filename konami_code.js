const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

var idx = 0;

function init() {
  
}

function onKeyDownHandler(e) {
  if (e.key === codes[idx]) {
    idx += 1;

    if (idx === codes.length) {
       alert("Hurray");
       idx = 0;
    }    
  }
  else {
    idx = 0;
  }

}
