
$('.slider-principal').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 2000
});

$(document).ready(function () {
    $('#tabela').DataTable();
});

function get(url) {
    let request = new XMLHttpRequest()
    request.open("GET", url, false)
    request.send()
    return request.responseText
}

function main() {
    let data = get("https://localhost:44351/api/Colaborador");
    let colaboradores = JSON.parse(data);
    let tabela = document.getElementById("tabela");
    colaboradores.forEach(element => {
        let linha = criaLinha(element);
        console.log('meuJson', linha)
        tabela.appendChild(linha);
    });
}

function criaLinha(colaborador) {
    linha = document.createElement("tr");
    tdCpf = document.createElement("td");
    tdMatricula = document.createElement("td");
    tdNome = document.createElement("td");
    tdData_admissao = document.createElement("td");
    tdStatus = document.createElement("td");
    tdDepartamento = document.createElement("td");
    tdCpf.innerHTML = colaborador.cpf
    tdMatricula.innerHTML = colaborador.matricula
    tdNome.innerHTML = colaborador.nome_completo
    tdData_admissao.innerHTML = colaborador.data_admissao
    if (colaborador.status_contrato == 1) {
        tdStatus.innerHTML = "Ativo";
    } else {
        tdStatus.innerHTML = "Desligado";
    }
    tdDepartamento.innerHTML = colaborador.cargo

    linha.appendChild(tdCpf);
    linha.appendChild(tdMatricula);
    linha.appendChild(tdNome);
    linha.appendChild(tdData_admissao);
    linha.appendChild(tdStatus);
    linha.appendChild(tdDepartamento);

    return linha;

}

main()

// //funçao botoes colaborador
// function Criar() {
//     document.write("Fui clicado");
// }
// function Deletar() {
//     document.write("Fui clicado");
// }
// function Atualizar() {
//     document.write("Fui clicado");
// }
// function Pesquisar() {
//     document.write("Fui clicado");
// }



