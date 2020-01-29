import React from "react"
import * as styles from "./PlaceDetail.module.css"

const PlaceDetail = () => {
  const dishes = [
    {
      name: "Xis Bacon",
      description:
        "Pão, alface, tomate, carne, bacon, milho, ervilha, maionese, catchup, mostarda",
      price: 28.5
    },
    {
      name: "Xis Veg",
      description:
        "Pão, alface, tomate, bife de grão de bico, milho, ervilha, maionese",
      price: 22.5
    },
    {
      name: "Bauru Picanha",
      description: "Pão, alface, tomate, picanha, maionese",
      price: 25
    },
    {
      name: "Xis Bacon",
      description:
        "Pão, alface, tomate, carne, bacon, milho, ervilha, maionese, catchup, mostarda",
      price: 28.5
    },
    {
      name: "Xis Veg",
      description:
        "Pão, alface, tomate, bife de grão de bico, milho, ervilha, maionese",
      price: 22.5
    },
    {
      name: "Bauru Picanha",
      description: "Pão, alface, tomate, picanha, maionese",
      price: 25
    }
  ]

  return (
    <div className="page">
      <h1 className="title">Silva Lanches</h1>
      <h2 className="subtitle">23 pratos</h2>

      <div className="dishes">
        {dishes.map((dish, key) => (
          <div className={styles.dish} key={key}>
            <div className={styles.dish__header}>
              <h3 className={styles.dish__name}>{dish.name}</h3>
              <span className={styles.dish__price}>R$ {dish.price}</span>
            </div>
            <p className={styles.dish__description}>{dish.description}</p>
          </div>
        ))}
      </div>

      <a href="/dish/add" className={styles.dish__btnAdd}>
        <span className={styles.dish__btnAdd__cross}></span>
      </a>
    </div>
  )
}

export default PlaceDetail
