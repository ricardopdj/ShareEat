import React from "react"
import * as styles from "./Header.module.css"
import logo from "../img/logo.svg"
import { withRouter } from "react-router"

const Header = props => {
  return (
    <header className={styles.header}>
      {props.location.pathname !== "/" && (
        <button
          className={styles.header__arrow}
          onClick={() => props.history.goBack()}
        >
          <span className="btn-arrow btn-arrow--left "></span>
        </button>
      )}
      <img src={logo} alt="" />
    </header>
  )
}

export default withRouter(Header)
