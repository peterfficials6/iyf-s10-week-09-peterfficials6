import useForm from '../Hooks/useForm';

function ContactForm() {
    const validate = (values) => {
        const errors = {};
        if (!values.email.includes('@')) {
            errors.email = 'Invalid email';
        }
        if (values.name.length < 2) {
            errors.name = 'Name too short';
        }
        return errors;
    };

    const { values, errors, touched, handleChange, handleBlur, reset } = 
        useForm({ name: '', email: '', message: '' }, validate);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(values);
        alert('Message sent!');
        reset();
    };

    return (
        <form className="contact-form" onSubmit={handleSubmit}>
            <h3>Contact Us</h3>
            
            <input
                name="name"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Your name"
            />
            {touched.name && errors.name && <span className="error-text">{errors.name}</span>}
            
            <input
                name="email"
                type="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Your email"
            />
            {touched.email && errors.email && <span className="error-text">{errors.email}</span>}
            
            <textarea
                name="message"
                value={values.message}
                onChange={handleChange}
                placeholder="Your message"
                rows="4"
            />
            
            <button type="submit">Send</button>
        </form>
    );
}

export default ContactForm;