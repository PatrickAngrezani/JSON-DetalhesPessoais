function verificar() {
  const object = [
    {
      nome: "Patrick Angrezani",
      idade: 22,
      estaTrabalhando: true,
      profissão: "Gerente Técnico",
      empresa: "RadioSparx",
      hobbies: ["Estudar", " praticar esportes", " sair com amigos"],
    },
    {
      nome: "Pedro",
      idade: 27,
      estaTrabalhando: false,
      profissão: null,
      empresa: null,
      hobbies: ["Jogos", " academia"],
    },
  ];
  const name = document.querySelector("#inputName").value;

  if (name == "Patrick Angrezani") {
    namePerson.innerHTML = `${name}`;
    document.querySelector("#ageList").innerHTML = `${object[0].idade} anos`;
    document.querySelector("#hobby").innerHTML = `Possui como hobbies: ${object[0].hobbies}`
    document.querySelector(
      "#isWorking"
    ).innerHTML = `Está trabalhando atualmente`;
    document.querySelector("#profissao").innerHTML = `${object[0].profissão} na empresa ${object
    [0].empresa}`;
  }

  if (name == "Pedro") {
    namePerson.innerHTML = `${name}`;
    document.querySelector("#ageList").innerHTML = `${object[1].idade} anos`;
    document.querySelector(
      "#isWorking"
    ).innerHTML = `Não está trabalhando atualmente`;
    document.querySelector("#hobby").innerHTML = `Possui como hobbies: ${object[1].hobbies}`
    document.querySelector("#profissao").remove()
  }

  if (name != "Patrick Angrezani" && name != "Pedro"){
    document.querySelector('#tituloInfo').innerHTML = `Informações não encontradas`
    document.querySelector("#ageList").remove()
    document.querySelector(
      "#isWorking"
    ).remove()
    document.querySelector("#hobby").remove()
    document.querySelector("#profissao").remove()
  }
}
