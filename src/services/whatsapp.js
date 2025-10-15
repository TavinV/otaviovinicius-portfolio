/**
 * Abre o WhatsApp com uma mensagem personalizada sobre um serviço específico.
 * @param {string} serviceName - Nome do serviço (ex: "Consultoria em T.I").
 */
export const contactForService = (serviceName) => {
    const phoneNumber = "5511950231230"; // 
    const message = `Olá! 👋\nTenho interesse em saber mais sobre *${serviceName}* e gostaria de conversar sobre isso.`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");
};

/**
 * Abre o WhatsApp com uma mensagem genérica de interesse em negócios.
 */
export const contactForBusiness = () => {
    const phoneNumber = "5511950231230";
    const message = `Olá! 👋\nTenho interesse em conversar sobre possíveis negócios.`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");
};
