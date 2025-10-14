import Section from "../layout/Section";
import useTestimonials from "../../hooks/useTestimonials";
import TestimonialCard from "../ui/TestimonialsCard";

const TestimonialSection = () =>{
    const {loading, error, testimonials} = useTestimonials();
    if (loading) {
        return <h1>Carregando...</h1>
    }
    if (error) {
        return <h1> Erro ao carregar depoimentos... {error}</h1>
    }


    if(testimonials){
        
        return (
            <Section title={"Depoimentos"} subtitle={"Veja o que meus clientes dizem a respeito dos meus serviços."} id="depoimentos">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 sm:gap-6 gap-30 mt-10">
                    {testimonials.map((item)=>{
                        return <TestimonialCard img={item.imageUrl} name={item.nome} key={item.nome} occupation={item.ocupacao} message={item.mensagem} />
                    })}
                </div>
            </Section>
        );
    }
}

export default TestimonialSection;