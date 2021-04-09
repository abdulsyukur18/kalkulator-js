
//tangkap semua element yg akan di butuhkan
let container = document.querySelector('.container');
let button = document.querySelectorAll('button');
let layar = document.querySelector('.bb');
let layarisi = '';


// ketika tombol di klik

for (tombol of button) {
    tombol.addEventListener('click', (el) => {
        let pencetTombol = el.target.innerText;
       
        //ketika tombol C di klik, maka layar akan dihapus
         if (pencetTombol =="C") {
            layarisi = "";
            layar.value = layarisi;
        }

        //ketika tombol (=) samadengan di klik maka akan menampilkan hasil
        else if (pencetTombol == "=") {
            layar.value = eval(layarisi);
        }
        
        //selain tombol (C) dan (=) maka tombol yang di klik akan tampil di layar
        else {
            layarisi += pencetTombol;
            layar.value = layarisi;
        }
    })
}

// ketika eror maka jalankan fungsi berikut
window.onerror = function(){
    alert("silahkan masukan angka");
    layarisi = "";
    layar.value = screenValue;
    console.clear();
}

