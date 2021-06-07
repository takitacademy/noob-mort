var slider = document.getElementById('slider');
var slider_2 = document.getElementById('slider_2');

//var output = document.getElementById('value');

//output.innerHTML = slider.value;

//slider.oninput = function(){
//    output.innerHTML = this.value
//}

slider.addEventListener('mousemove', function(){
    var x = slider.value;
    var color = `linear-gradient(90deg, blue ${x}%, gray ${x}%)`;
    slider.style.background = color;
})

slider_2.addEventListener('mousemove', function(){
    var x = slider_2.value;
    var color = `linear-gradient(90deg, blue ${x}%, gray ${x}%)`;
    slider_2.style.background = color;
})