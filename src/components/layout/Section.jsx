const Section = ({children}) => {
    return (
        <section className="w-full max-w-screen min-h-screen flex flex-col items-center justify-center">
            {children}
        </section>
    );
}

export default Section;