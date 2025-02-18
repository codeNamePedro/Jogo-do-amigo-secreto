let nomeAmigo
let listaAmigo = [];

function exibirNome(tag, texto) {
    let campo = document.querySelector(tag);
            let item = document.createElement("li"); 
            item.textContent = texto;
            campo.appendChild(item); // Adiciona o nome na lista
}

function adicionarAmigo(){
     nomeAmigo = document.getElementById('amigo').value;
     if(nomeAmigo === ''){
        alert("Por favor digite um nome!");
     }else{
        listaAmigo.push(nomeAmigo);
        exibirNome('#listaAmigos', nomeAmigo);
       limparCampo();
     }    
}

function sortearAmigo(){
   let indiceSorteado = Math.floor(Math.random() * listaAmigo.length);
   let nomeSorteado = listaAmigo[indiceSorteado];

   exibirNome('#resultado', `O seu amigo secreto é ${nomeSorteado}`);
}

function limparCampo(){
   document.getElementById('amigo').value = '';
}