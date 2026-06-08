import { ContactForm } from "@/components/contact/contact-form";
const contact = () => {
    return (
        <section className="flex flex-col items-center">
            <h2 className="font-bold text-2xl my-5">GET IN TOUCH</h2>
            <ContactForm />
        </section>
    );
};

export default contact;
