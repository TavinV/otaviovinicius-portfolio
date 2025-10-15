import Section from '../layout/Section';
import ServiceCard from '../ui/ServiceCard';
import useServices from '../../hooks/useServices';

const ServicesSection = () => {
    const { services, loading, error } = useServices();

    if (loading) {
        return (
            <Section id="servicos" title="Serviços" subtitle="Conheça o que posso oferecer para o seu negócio">
                <div className="flex justify-center items-center py-12">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#4595FF]"></div>
                </div>
            </Section>
        );
    }

    if (error) {
        return (
            <Section id="servicos" title="Serviços" subtitle="Conheça o que posso oferecer para o seu negócio">
                <div className="text-center py-12">
                    <p className="text-red-400">Erro ao carregar serviços: {error.message}</p>
                </div>
            </Section>
        );
    }

    return (
        <Section
            id="serviços"
            title="Serviços"
            subtitle="💼 Conheça o que posso oferecer para o seu negócio"
        >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
                {services.map((service) => (
                    <ServiceCard
                        key={service.id}
                        title={service.title}
                        description={service.description}
                        icon={service.icon}
                        features={service.features}
                    />
                ))}
            </div>
        </Section>
    );
};

export default ServicesSection;