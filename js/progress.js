function move(length, id) {
  var element = document.getElementById(id);
  var pro = length - 1;
  var width = 1;
  var id = setInterval(frame,10);

    function frame() {
        if (width >= pro) {
            clearInterval(id);
        } else {
            width++;
            element.style.width = width + '%';    
        }
    }
}