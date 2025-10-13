import SectionTitle from "../ui/SectionTitle";

const Section = ({title, id, subtitle, children}) => {
    return (
        <section id={id} className="w-full max-w-screen min-h-screen flex flex-col mt-12">
            <SectionTitle title={title} subtitle={subtitle} />
            <div className="flex flex-col p-4">
                {children}
            </div>
        </section>
    );
}

export default Section;