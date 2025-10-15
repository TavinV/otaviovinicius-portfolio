import { contactForBusiness, contactForService } from "../services/whatsapp";

const useWhatsApp = () => {

    const contactAboutService = (serviceName) => {
        contactForService(serviceName);
    };

    const contactAboutBusiness = (businessName) => {
        contactForBusiness(businessName);
    };

    return {
        contactAboutService,
        contactAboutBusiness,
    };
};

export default useWhatsApp;