var kol=document.getElementById('kol');
const outputNode=document.querySelector('.js-output');
var konf=document.getElementById('konf');
const inputs=document.querySelectorAll('input,select');
const radioDost=document.querySelectorAll('input[name="dost"]');
const chek2=document.querySelectorAll('input[name="check2"]');
const check = document.getElementById('chek');
const selector= document.getElementById('tipm');
function calculate(elem0,elem){
    var cena=elem.querySelector(':checked').getAttribute('data-price'),
    kol1=elem0.value;
    totalPrice=cena*kol1;
    for (const radio of radioDost){
        if(radio.checked===true){
            
            if (radio.value === '100') {
                selector.style.display = 'none';
                check.style.display = 'none';
                totalPrice+=parseInt(radio.value);
            }
            else if(radio.value === '0'){
                selector.style.display = 'block';
                check.style.display = 'none';
                totalPrice+=parseInt(radio.value);
                totalPrice+=parseInt(selector.querySelector(':checked').getAttribute('data-price'));
            }
            else if(radio.value === '200'){
                selector.style.display = 'none';
                check.style.display = 'block'; 
                totalPrice+=parseInt(radio.value);
                for (const chek of chek2){
                    if(chek.checked===true){
                        totalPrice*=parseFloat(chek.value);
                    }
                }
            }
        }
    }
}
for(const input of inputs){
    input.addEventListener('input',function(){
        calculate(kol,konf);
        var regex = /^\d+(\.\d+)?$/;
        if (!regex.test(totalPrice)) {
            outputNode.innerHTML = "Недопустимые символы";
          } else {
        outputNode.innerHTML="ИТОГО:"+totalPrice;}
    });
}

