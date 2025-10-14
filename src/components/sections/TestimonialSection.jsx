import Section from "../layout/Section";
import useTestimonials from "../../hooks/useTestimonials";

const TestimonialSection = () =>{
    const {loading, error, testimonials} = useTestimonials();
    console.log(testimonials)
    return (
        <Section title={"Depoimentos"} subtitle={"Veja o que meus clientes dizem a respeito dos meus serviços."} id="depoimentos">
            
        </Section>
    );
}

export default TestimonialSection;