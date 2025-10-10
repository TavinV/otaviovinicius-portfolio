const Section = ({children}) => {
    return () => {
        <section className="w-screen min-h-screen flex items-center justify-center">
            {children}
        </section>
    }
}

export default Section;