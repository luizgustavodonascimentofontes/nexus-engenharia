// Atualiza o ano automaticamente
document.getElementById("ano").textContent =
    new Date().getFullYear();


// WhatsApp
function abrirWhatsApp() {

    // TROQUE PELO NÚMERO DO CLIENTE
    const numero = "5527988346158";

    const mensagem =
        "Olá! Gostaria de solicitar um orçamento.";

    const url =
        "https://wa.me/" +
        numero +
        "?text=" +
        encodeURIComponent(mensagem);

    window.open(url, "_blank");
}