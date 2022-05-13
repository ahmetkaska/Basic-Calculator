var btn = document.querySelectorAll('#btnNum');
var btnEkran = document.querySelector('#screen');
var sembol = document.querySelectorAll('.sembol');
var deger = 0;
var operator = "";
var operatorDurum = false;

btn.forEach(item => {
    item.addEventListener('click', ekranaYaz);
    function ekranaYaz(e) {

        if (btnEkran.textContent == '0' || operatorDurum) {
            btnEkran.textContent = '';
        }
        btnEkran.textContent += this.textContent;
        operatorDurum = false;
        e.preventDefault();
    }
});

sembol.forEach(smbl => {
    smbl.addEventListener('click', hesap);
    function hesap(e) {
        operatorDurum = true;
        var newOperator = this.textContent;
        switch (operator) {

            case "+":
                btnEkran.textContent = deger + Number(btnEkran.textContent);
                break;
            case '-':
                btnEkran.textContent = deger - Number(btnEkran.textContent);
                break;
            case '*':
                btnEkran.textContent = deger * Number(btnEkran.textContent);
                break;
            case '/':
                btnEkran.textContent = deger / Number(btnEkran.textContent);
                break;
            case '=':
                deger = Number(btnEkran.textContent);
                break;
            case "C":
                btnEkran.textContent = '';
                break;

        }
        deger = Number(btnEkran.textContent);
        operator = newOperator;
        e.preventDefault();

    }
});




