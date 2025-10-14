import { useState, useEffect } from "react";

const useTestimonials = () => {
    const [testimonials, setTestimonials] = useState(null);
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(()=>{
        const fetchTestimonials = async() => {
            setLoading(true);
            try {
                const response = await fetch("/data/depoimentos.json");
                if (!response.ok){
                    setError("Falha ao carregar depoimentos")
                }
                const data = await response.json();
                setTestimonials(data);
                
            } catch (error) {
                setError(error)
            } finally{
                setLoading(false)
            }
        }
        fetchTestimonials();
    },
    [])

    return {testimonials, loading, error}
}

export default useTestimonials;