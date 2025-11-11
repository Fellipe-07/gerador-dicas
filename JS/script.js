const dicas = [
      "Estude um pouco todo dia, em vez de deixar tudo pra última hora.",
      "Durma bem, o cérebro também precisa descansar pra guardar o que aprendeu.",
      "Faça resumos curtos e revise sempre que puder.",
      "Explique o conteúdo pra alguém — é o melhor jeito de ver se entendeu.",
      "Resolva questões antigas pra treinar e perder o medo da prova.",
      "Estude em um lugar silencioso e longe do celular.",
      "Defina metas pequenas pra não se sobrecarregar.",
      "Use cores nos resumos pra destacar o que é importante.",
      "Assista vídeos curtos sobre o tema antes de ler o texto.",
      "Faça pausas curtas entre os estudos pra manter o foco."
    ];

const dica = document.querySelector('#dica');
const btn = document.querySelector('#btn');

function gerarDica(){
    const randomizar = Math.floor(Math.random() * dicas.length);
    dica.innerText = dicas[randomizar];
}
btn.addEventListener('click', gerarDica);