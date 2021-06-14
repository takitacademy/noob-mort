var slider = document.getElementById('slider');
var slider_2 = document.getElementById('slider_2');
var totalPay = document.getElementById('totalPay');
var openMenu = document.getElementById('openMenu');
var closeMenu = document.getElementById('closeMenu');
var menu = document.querySelector('.menu');

openMenu.addEventListener('click', function(){
    menu.style.display = 'block';
});
closeMenu.addEventListener('click', function(){
    menu.style.display = 'none'
})

//var output = document.getElementById('value');

//output.innerHTML = slider.value;

//slider.oninput = function(){
//    output.innerHTML = this.value
//}

slider.addEventListener('input', function(){
    var x = slider.value;
    var y = x * 5 / 100;
    var color = `linear-gradient(90deg, blue ${x}%, gray ${x}%)`;
    slider.style.background = color;
    slider_2.style.background = color;
    document.getElementById('val').innerHTML = `${x}`;
    //document.getElementById('val_2').innerHTML = `${y}`;
})

slider_2.addEventListener('input', function(){
    var x = slider_2.value;
    var y = x * 100 / 5;
    var color = `linear-gradient(90deg, blue ${x}%, gray ${x}%)`;
    slider.style.background = color;
    slider_2.style.background = color;
    //document.getElementById('val').innerHTML = `${y}`;
    document.getElementById('val_2').innerHTML = `${x}`;
})

const totalPayment = () =>{
    var p = slider.value;
    var r = 0.00354 ;
    var n = 360;
    m1 = 0.012632544;
    m2 = ((1.00354)**n) - 1
    m3 = m1/m2
    
    console.log(m1);
    console.log(m2);
    console.log(m3);

    M = p * m3
    totalPay.innerHTML = `${M.toFixed(4)}`

    //var M = p[r(1+r)**n/((1+r)**n)-1]
    console.log(p)
    
    console.log(`Your MOnthly Pay is ${M} USD on ${p} USD purchase price`)
}
slider.addEventListener('input', totalPayment);

const totalPayment_2 = () =>{
    var p = slider_2.value;
    v = p * 100 / 5;
    var r = 0.00354 ;
    var n = 360;
    m1 = 0.012632544;
    m2 = ((1.00354)**n) - 1
    m3 = m1/m2
    
    M = v * m3
    totalPay.innerHTML = `${M.toFixed(4)}`

    // M = p[r(1+r)**n/((1+r)**n)-1]
    console.log(p)
    
    console.log(`Your MOnthly Pay is ${M} USD on ${v} USD purchase price`)
}
slider_2.addEventListener('input', totalPayment_2);
