<<<<<<< HEAD
import { useContext, useEffect, useState } from "react";

import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/cart-context";
import Classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  const [btnIsHighligted, setBtnISHighlighted] = useState(false);

  const cartCtx = useContext(CartContext);

  const { items } = cartCtx;

  const numberOfCartItems = items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  const btnClasses = `${Classes.button} ${btnIsHighligted ? Classes.bump : ""}`;

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setBtnISHighlighted(true);
    const timer = setTimeout(() => {}, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={Classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={Classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
=======
import CartIcon from "../Cart/CartIcon";
import Classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  return (
    <button className={Classes.button}>
      <span className={Classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={Classes.badge}>0</span>
    </button>
  );
};

export default HeaderCartButton;
>>>>>>> eba53c6f2b6f44debbed755320e1457d8486a734
