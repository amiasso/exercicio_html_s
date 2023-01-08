

function soma(){
    let input1 = document.getElementById('input1').value;
    let conteudo =document.getElementById('conteudo');
    let data = new Date();
    let ano = data.getFullYear();
    let anoNascimento = ano  - input1;
    if (anoNascimento <= 15 ){
        conteudo.innerHTML = 'Você não idade para votar';
    }else if(anoNascimento >15 || anoNascimento <= 60){
        conteudo.innerHTML = 'Você  tem idade para votar';
}
}
