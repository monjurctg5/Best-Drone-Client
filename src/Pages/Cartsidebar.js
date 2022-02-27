import React, { useState } from "react";
import useAuth from "../hooks/useAuth";

const Cartsidebar = () => {
  const { isOpenCartSidebar, setIsOpenCartSidebar } = useAuth();

  console.log(isOpenCartSidebar);
  function closeCartSidebar() {
    setIsOpenCartSidebar(false);
  }

  let cartSidebarWidth = { width: "0%" };

  if (isOpenCartSidebar) {
    cartSidebarWidth.width = "30%";
  } else {
    cartSidebarWidth.width = "0%";
  }

  console.log(cartSidebarWidth);
  return (
    <div>
      <div id="" className="cartOverlay">
        <div className="cart-header">
          
          <a
            href="javascript:void(0)"
            class={!isOpenCartSidebar ? `closebtn d-none` : "closebtn"}
            onClick={closeCartSidebar}
          >
            <i class="fa-solid fa-x"></i>
          </a>
        </div>

        <div class="Cartoverlay-content"></div>
      </div>
    </div>
  );
};

export default Cartsidebar;
