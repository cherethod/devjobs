import { useState, useId } from "react";
import { Alert } from "../components/Alert";

export function ContactPage() {
  const [isSendSuccess, setIsSendSuccess] = useState(false);
  const [missingFields, setMissingFields] = useState({
    name: false,
    email: false,
    message: false
  });
  const contactNameId = useId();
  const contactEmailId = useId();
  const contactMessageId = useId();

  const handleSubmit = (event) => {
    event.preventDefault();
    
    const formData = new FormData(event.target);
    const formInfo = {
      name: formData.get(contactNameId) || "",
      email: formData.get(contactEmailId) || "",
      message: formData.get(contactMessageId) || "",
    };
    console.log('data recived', formInfo);
   function chekMissingFields() {
     const newMissingFields = {
      name: false,
      email: false,
      message: false
    };
      if (formInfo.name === "")    newMissingFields.name = true; 
      if (formInfo.email === "")   newMissingFields.email = true; 
      if (formInfo.message === "")   newMissingFields.message = true; 
      setMissingFields(newMissingFields);

      if (newMissingFields.name || newMissingFields.email || newMissingFields.message) {
        return true;
      } else {
        return false;
      }
    }
      
      console.log('missing fields setted', missingFields);

    if (!chekMissingFields()) {
      console.log('no missing fields');
      
        setIsSendSuccess(true);

      console.log(
        `Gracias por contactar con nosostros ${
          formInfo.name.split(" ")[0]
        }. \nSu formulario de contacto ha sido enviado exitosamente con el correo asociado: ${
          formInfo.email
        }.\nPronto lo recibiremos y uno de nuestros agentes te atenderá. Gracias por ponerte en contacto con nosotros.`
      );

      setTimeout(() => {
        setIsSendSuccess(false);
      }, 5000);
    }
    else {
     setTimeout(() => {
       setMissingFields({
        name: false,
        email: false,
        message: false
      });
      }, 5000);
    }
    console.log('end of function');
    
  };

  return (
    <main>
      <title>DevJobs - Contacto</title>
      <meta name="description" content="Contacta con nosotros para cualquier pregunta o sugerencia." />
      <h2 className="contact-title">¿Quieres contactar con nosotros?</h2>
      <p className="contact-description">
        En DevJobs, valoramos la comunicación con nuestros usuarios. Si tienes
        alguna pregunta, sugerencia o simplemente quieres saludar, no dudes en
        ponerte en contacto con nosotros.
      </p>
      <form action="" role="form" id="contact-form" onSubmit={handleSubmit}>
        <div className={missingFields.name ? "form-group missing-field" : "form-group"}>
          <label htmlFor="name">Nombre:</label>
          <input type="text" id="name" name={contactNameId}  />
        </div>
        <div className={missingFields.email ? "form-group missing-field" : "form-group"}>
          <label htmlFor="email">Correo Electrónico:</label>
          <input type="email" id="email" name={contactEmailId}  />
        </div>
        <div className={missingFields.message ? "form-group missing-field" : "form-group"}>
          <label htmlFor="message">Mensaje:</label>
          <textarea
            id="message"
            name={contactMessageId}
            rows="5"
          ></textarea>
        </div>
        <button type="submit">Enviar</button>
      </form>
      {isSendSuccess && (
        <Alert type="info">
          ¡Gracias por contactarnos! Hemos recibido tu mensaje y nos pondremos
          en contacto contigo pronto.
        </Alert>
      )}
      {
        (missingFields.name || missingFields.email || missingFields.message) && (
          <Alert type="error">
            Por favor, completa todos los campos obligatorios antes de enviar el formulario.
            <br />
            {missingFields.name && <p>- El campo 'Nombre' es obligatorio.</p>}
            {missingFields.email && <p>- El campo 'Correo Electrónico' es obligatorio.</p>}
            {missingFields.message && <p>- El campo 'Mensaje' es obligatorio.</p>}

          </Alert>
        )
      }
    </main>
  );
}
