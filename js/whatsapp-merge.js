//Algorithm coded by Lucas Amates on April 15th 2022

function createlink() {

    custName = document.getElementById("custName").value
    custCompany = document.getElementById("custCompany").value
    custService = document.getElementById("sortServices").value
    custPhone = document.getElementById("phone").value
    custEmail = document.getElementById("email").value
    message = document.getElementById("message").value

    if (custName == "" || custService == "" || custPhone == "") {
        document.getElementById("submitMessage").innerHTML = "Insira todos os dados."
    } else {
        generate();
    }
}

function generate() {

    whatsappLink = "https://wa.me/5511988559107?text="
    text = "Nome: " + custName

    if (custCompany != "") {
        text += ". Empresa: " + custCompany
    }

    text += ". Assunto: " + custService
    text += ". Contato: " + custPhone

    if (custEmail != "") {
        text += ". E-mail: " + custEmail
    }

    if (message != "") {
        text += ". Mensagem: " + message
    }

    whatsappLink += text
    access();
}

function access() {
    window.open(whatsappLink);
}