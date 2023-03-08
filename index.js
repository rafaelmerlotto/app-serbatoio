
function serbatoio() {

    // HTMLElement salvate nelle costanti
    const livello = document.getElementById('livello');
    const riempire = document.getElementById('riempire');
    const svuotare = document.getElementById('svuotare');
    const avvisi = document.querySelector('.avvisi');

    //oggetto con le 3 proprietà per selezionare il tipo di carico
    const schermo = {
        acqua: document.getElementById('acqua'),
        latte: document.getElementById('latte'),
        succo: document.getElementById('succo'),
    }

    //SCHERMO ACQUA
    schermo.acqua.addEventListener('click', () => {  //evento per selezionare il tipo di carico
        schermo.acqua.style.backgroundColor = '#00BFFF';
        avvisi.innerHTML = `<p style="color: #00BFFF;"> ACQUA</p>`;

        // evento verrà eseguito soltanto se il tipo di carico è gia stato scelto
        riempire.addEventListener('click', (event) => {
            event.preventDefault();
            if (riempire.style.backgroundColor = 'green') {
                svuotare.style.backgroundColor = '';
                avvisi.innerHTML = `<p style="color: #00BFFF;">CARICO ACQUA</p>`;
            }
            setTimeout(() => {
                livello.style.backgroundColor = '#00BFFF';
                livello.style.transition = 'ease-in-out 10s';
            }, 3000);
        })
    });

    //SCHERMO LATTE
    schermo.latte.addEventListener('click', () => {
        schermo.latte.style.backgroundColor = '#FFFFF0';
        avvisi.innerHTML = `<p style="color: #FFFFF0;">LATTE</p>`;
        riempire.addEventListener('click', (event) => {
            event.preventDefault();
            if (riempire.style.backgroundColor = 'green') {
                svuotare.style.backgroundColor = '';
                avvisi.innerHTML = `<p style="color: #FFFFF0;">CARICO LATTE</p>`;
            }
            setTimeout(() => {
                livello.style.backgroundColor = '#FFFFF0';
                livello.style.transition = 'ease-in-out 10s';
            }, 4000);
        })
    });

    //SCHERMO SUCCO
    schermo.succo.addEventListener('click', () => {
        schermo.succo.style.backgroundColor = '#FFA500';
        avvisi.innerHTML = `<p style="color: #FFA500;">SUCCO</p>`;
        riempire.addEventListener('click', (event) => {
            event.preventDefault();
            if (riempire.style.backgroundColor = 'green') {
                svuotare.style.backgroundColor = '';
                avvisi.innerHTML = `<p style="color: #FFA500;">CARICO SUCCO</p>`;
            }  
            setTimeout(() => {
               livello.style.backgroundColor = '#FFA500';
              livello.style.transition = 'ease-in-out 10s';
                
            },5000);
           
        })
    });

    svuotare.addEventListener('click', (event) => { //evento per svuotare il serbatorio 
        event.preventDefault();
        if (svuotare.style.backgroundColor = 'red') {
            riempire.style.backgroundColor = ''
        }
        avvisi.innerHTML = `<p style="color: red;">SVUOTARE</p>`;
        setTimeout(() => {
            livello.style.backgroundColor = '';
            window.location.reload();
        }, 3000);
    });

    //funzione con una costanti che prende la checkbox e fa la verifica con le condizioni if else
    function checkValvola() {
        const valvola = document.getElementById('cb');
        valvola.addEventListener('click', () => {

            if (valvola.checked) {
                svuotare.style.visibility = 'hidden';
                riempire.style.visibility = 'visible';
                avvisi.innerHTML = '<p style="color: green;" >VALVOLA CHIUSA</p>';
            } else {
                svuotare.style.visibility = 'visible';
                riempire.style.visibility = 'hidden';
                avvisi.innerHTML = '<p style="color: red;">VALVOLA APERTA</p>';
            }
        });
    }
    checkValvola();
}
serbatoio();

