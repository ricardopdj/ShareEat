import React from "react"
import * as styles from "./Places.module.css"

const Places = () => {
  const restaurants = [
    { name: "Silva Lanches", menuItems: 23 },
    { name: "Z Café", menuItems: 54 },
    { name: "Canal Café - PUCRS", menuItems: 31 },
    { name: "Palatu's - PUCRS", menuItems: 29 },
    { name: "Silva Lanches", menuItems: 23 },
    { name: "Z Café", menuItems: 54 },
    { name: "Canal Café - PUCRS", menuItems: 31 },
    { name: "Palatu's - PUCRS", menuItems: 29 }
  ]
  return (
    <div className="page">
      <h1 className="title">Lugares</h1>
      <h2 className="subtitle">6 lugares cadastrados</h2>

      {restaurants.map((restaurant, key) => (
        <div className={styles.restaurant} key={key}>
          <a className={styles.restaurant__info} href="/restaurant">
            <h3 className={styles.restaurant__name}>{restaurant.name}</h3>
            <p className={styles.restaurant__dishes}>
              {restaurant.menuItems} pratos
            </p>
          </a>
          <a href="/dish/add" className={styles.restaurant__btnAdd}>
            <span className={styles.restaurant__btnAdd__cross}></span>
          </a>
        </div>
      ))}
    </div>
  )
}

export default Places
