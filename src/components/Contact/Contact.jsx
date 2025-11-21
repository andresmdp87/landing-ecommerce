import { useState } from "react"
import styles from "./Contact.module.css"

const Contact = () => {
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>
        {!sent ? (
          <>
            <div className={styles.icon}>📩</div>
            <h2 className={styles.title}>Contacto</h2>
            <p className={styles.subtitle}>
              Envianos tu consulta y te respondemos a la brevedad.
            </p>

            <form onSubmit={handleSubmit}>
              <input
                type="text"
                className="form-control mb-3"
                placeholder="Tu nombre"
                required
              />
              <input
                type="email"
                className="form-control mb-3"
                placeholder="Tu correo"
                required
              />
              <textarea
                className="form-control mb-3"
                rows="4"
                placeholder="Escribí tu mensaje..."
                required
              ></textarea>

              <button type="submit" className={styles.sendBtn}>
                Enviar Mensaje
              </button>
            </form>
          </>
        ) : (
          <>
            <div className={styles.icon}>✅</div>
            <h2 className={styles.title}>Mensaje enviado</h2>
            <p className={styles.subtitle}>
              Gracias por contactarte con nosotros.  
              Te responderemos lo antes posible.
            </p>
          </>
        )}
      </div>
    </div>
  )
}

export default Contact
