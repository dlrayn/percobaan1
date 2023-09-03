var isMoving = true;
function setBackgroundMoving() {
    if(isMoving == true){
    setTimeout(function() {

        //background berjalan
        var bg = document.getElementById('board');
        bg.style.backgroundPosition = (parseInt(bg.style.backgroundPosition.replace('px', ''))-1) + 'px';

        //update live score
        document.getElementById('score').innerHTML = 
        parseInt(document.getElementById('score').innerHTML) +1;

        //panggil fungsinya terus menerus (recursive)
        setBackgroundMoving();
    },5)
}
}

//inisialisasi fungsi background berjalan
setBackgroundMoving();

function setHantuMoving() {
    var hantu = document.getElementById('hantu'),
        orang = document.getElementById('orang');

        setTimeout(function() {

        hantu.style.marginLeft = (parseInt(hantu.style.marginLeft.replace('px','')) - 1) + 'px';
        
        if(parseInt(hantu.style.marginLeft.replace('px','')) < -100){
            hantu.style.marginLeft = "600px";
        }

        if(orang.offsetTop + 50 >= hantu.offsetTop && orang.offsetLeft + 50 >= hantu.offsetLeft && orang.offsetTop + 50 <=  hantu.offsetTop +50 && orang.offsetLeft <= hantu.offsetLeft + 50) {
            alert('U org nabrak hantu maa~~, ur score : ' + document.getElementById('score').innerHTML);
            orang.setAttribute('class','freeze');
            isMoving = false;
        }else{
        
        //panggil fungsinya terus menerus (recursive)
        setHantuMoving();
        }

    },5)
}

//inisialisasi hantu bergerak
setHantuMoving();

window.addEventListener('keyup', function(e) {

    //untuk mendeteksi tombol spasi
    if(e.keyCode == 32) {

        //stting orang loncat
        document.getElementById('orang').style.marginTop = "15px";
        document.getElementById('orang').setAttribute('class','freeze');

        //kembalikan orang ke datar
        setTimeout(function() {
            document.getElementById('orang').style.marginTop = "150px";
            document.getElementById('orang').setAttribute('class','');
        }, 1000);
    }});