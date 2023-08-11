// var n1 = document.getElementById("n1");
// var n2 = document.getElementById("n2");
// n1.addEventListener('click',()=>{
   
// })

var test = document.getElementById('test')
var nut = document.getElementsByClassName('nut1');
for (let i = 0; i < nut.length; i++) {
    nut[i].addEventListener('click',()=>{
        if(nut[i]===nut[0]){
            nut[0].classList.add('active');
            nut[0].style.width = '100%';
            nut[1].style.display = 'none';
            test.style.display = 'none';
        }
        else{
            nut[1].classList.add('active');
            nut[1].style.width = '100%';
            nut[0].style.display = 'none';
            test.style.display = 'none';
        }
    });
    
  
}
