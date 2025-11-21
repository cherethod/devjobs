import { useId } from "react";

export function ContactPage() {
  const contactNameId = useId();
  const contactEmailId = useId();
  const contactMessageId = useId();

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const formInfo = {
      name: formData.get(contactNameId),
      email: formData.get(contactEmailId),
      message: formData.get(contactMessageId),
    };

    console.log(
      `Gracias por contactar con nosostros ${
        formInfo.name.split(" ")[0]
      }. \nSu formulario de contacto ha sido enviado exitosamente con el correo asociado: ${
        formInfo.email
      }.\nPronto lo recibiremos y uno de nuestros agentes te atenderá. Gracias por ponerte en contacto con nosotros.`
    );
  };

  return (
    <main>
      <h2 className="contact-title">¿Quieres contactar con nosotros?</h2>
      <p className="contact-description">
        En DevJobs, valoramos la comunicación con nuestros usuarios. Si tienes
        alguna pregunta, sugerencia o simplemente quieres saludar, no dudes en
        ponerte en contacto con nosotros.
      </p>
      <form action="" role="form" id="contact-form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nombre:</label>
          <input type="text" id="name" name={contactNameId} required />
        </div>
        <div>
          <label htmlFor="email">Correo Electrónico:</label>
          <input type="email" id="email" name={contactEmailId} required />
        </div>
        <div>
          <label htmlFor="message">Mensaje:</label>
          <textarea
            id="message"
            name={contactMessageId}
            rows="5"
            required
          ></textarea>
        </div>
        <button type="submit">Enviar</button>
      </form>
    </main>
  );
}
