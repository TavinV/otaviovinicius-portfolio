// hooks/useServices.js
import { useState, useEffect } from 'react';

const servicesData = [
    {
        id: 1,
        title: "Sites Institucionais",
        description: "Desenvolvimento de websites profissionais para empresas, com design moderno e responsivo que transmite credibilidade e reforça a identidade visual da sua marca.",
        icon: "Globe",
        features: ["Design responsivo", "SEO otimizado", "Integração com redes sociais", "Painel administrativo"]
    },
    {
        id: 2,
        title: "Sites Estáticos",
        description: "Sites rápidos e seguros desenvolvidos com as melhores tecnologias modernas, ideais para portfolios, landing pages e projetos que exigem alto desempenho.",
        icon: "Lightning",
        features: ["Alta performance", "Segurança reforçada", "Baixo custo de hospedagem", "Deploy contínuo"]
    },
    {
        id: 3,
        title: "Sistemas Diversos",
        description: "Soluções personalizadas para automação de processos, incluindo controle de estoque, gestão comercial e muito mais.",
        icon: "Gear",
        features: ["Sob medida", "Relatórios detalhados", "Multi-usuário", "Backup em nuvem"]
    },
    {
        id: 4,
        title: "Hospedagem de Sites",
        description: "Suporte para hospedagem de sites com alta disponibilidade, garantindo que seu site esteja sempre online e acessível para seus clientes.",
        icon: "Server",
        features: ["99.9% uptime", "SSL gratuito", "Backup diário", "Suporte 24/7"]
    },
    {
        id: 5,
        title: "E-commerce",
        description: "Lojas virtuais completas com catálogo de produtos, gestão de pedidos, controle de estoque e muito mais.",
        icon: "Cart",
        features: ["Gateway de pagamento", "Gestão de estoque", "Relatórios de vendas", "Mobile first"]
    },
    {
        id: 6,
        title: "Consultoria em TI",
        description: "Orientação estratégica para implementação de soluções tecnológicas, migração para nuvem e otimização de processos digitais.",
        icon: "Graph",
        features: ["Análise de processos", "Plano de implementação", "Treinamento de equipe", "Suporte contínuo"]
    }
];

const useServices = () => {
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        try {
            setTimeout(() => {
                setServices(servicesData);
                setLoading(false);
            }, 500);
        } catch (err) {
            setError(err);
            setLoading(false);
        }
    }, []);

    return { services, loading, error };
};

export default useServices;