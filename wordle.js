const palavra = "IKEDA";
let contadorLetra = 0;

const letra01 = (tecla) =>{
    console.log(tecla);
    if(tecla !== 'DEL' && tecla !== 'OK'){
        switch (contadorLetra) {
            case 0:
                document.getElementById("cellA").value = tecla;
                contadorLetra += 1;
                break;
            case 1:
                document.getElementById("cellB").value = tecla;
                contadorLetra += 1;
                break;
            case 2:
                document.getElementById("cellC").value = tecla;
                contadorLetra += 1;
                break;
            case 3:
                document.getElementById("cellD").value = tecla;
                contadorLetra += 1;
                break;
            case 4:
                document.getElementById("cellE").value = tecla;
                contadorLetra += 1;
                break;
            default:
                break;
        }
    } else if (tecla === 'DEL' && contadorLetra !== 0){
        switch (contadorLetra) {
            case 1:
                document.getElementById("cellA").value = '';
                contadorLetra -= 1;
                break;
            case 2:
                document.getElementById("cellB").value = '';
                contadorLetra -= 1;
                break;
            case 3:
                document.getElementById("cellC").value = '';
                contadorLetra -= 1;
                break;
            case 4:
                document.getElementById("cellD").value = '';
                contadorLetra -= 1;
                break;
            case 5:
                document.getElementById("cellE").value = '';
                contadorLetra -= 1;
                break;
            default:
                break;
        }
    }
}

const verificarPalavra = () =>{
    for(let i=0;i<palavra.length;i++){

    }
    //travar teclado - quando incorreto
    let a = `btn${tecla}`;
    document.getElementById(a).style.backgroundColor = "black";
    document.getElementById(a).style.color = "red";
    document.getElementById(a).style.fontWeight = "bold";
    document.getElementById(a).style.opacity = "0.5";
    document.getElementById(a).disabled = true;
    //-------------------
}