import styles from "./Cupones.module.css"

const Cupones = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>

        <h2 className={styles.title}>Promociones & Cupones 💸</h2>

        <p className={styles.subtitle}>
          Por el momento no hay nuevos cupones disponibles.
        </p>

        <h4 className={styles.sectionTitle}>Últimos cupones</h4>

        <ul className={styles.list}>
          <li>🔹 <strong>DESCUENTO10</strong> — Expiró el 15/12/2024</li>
          <li>🔹 <strong>FREESHIP</strong> — Expiró el 30/11/2024</li>
        </ul>

      </div>
    </div>
  )
}

export default Cupones
