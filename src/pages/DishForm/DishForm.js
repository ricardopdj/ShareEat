import React from "react"
import * as styles from "./DishForm.module.css"

const DishForm = () => {
  return (
    <div className={styles.page}>
      <h1 className="title">Silva Lanches</h1>

      <form>
        <label>Nome do prato</label>
        <input
          type="text"
          name=""
          id=""
          placeholder="Prato"
          className="input"
        />
        <label>Valor</label>
        <div className="maskedInput">
          <span className="mask">R$</span>
          <input
            type="text"
            name=""
            id=""
            placeholder="0,00"
            className="input input--sm"
          />
        </div>
        <label>Descrição do prato</label>
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          placeholder="Insira uma descrição"
          className="input"
        ></textarea>
        <small>* A descrição deve conter até 200 caracteres</small>
        <button type="submit" className="btn btn--submit">
          Salvar
        </button>
      </form>
    </div>
  )
}

export default DishForm
