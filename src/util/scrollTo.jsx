export function scrollTo(id) {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({
            behavior: "smooth",
            block: "start", // ou "center" / "end"
        });
    } else {
        console.warn(`Elemento com id "${id}" não encontrado.`);
    }
}

