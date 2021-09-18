import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import PayPalButton from "./PayPalButton";
import { ButtonContainer } from "../Button";
import loadingG from "./loading.gif";

const CartTotals = ({ value, history }) => {
  const {
    cartSubtotal,
    cartTax,
    cartTotal,
    clearCart,
    loading,
    modalPaymentOpen,
    handleChangeOpen,
    handleChangeClose,
  } = value;
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
            <Link to="/">
              <button
                className="btn btn-outline-danger text-uppercase mb-3 px-5"
                type="button"
                onClick={() => clearCart()}
              >
                clear cart
              </button>
            </Link>
            <h5>
              <span className="text-title">subtotal :</span>
              <strong>$ {cartSubtotal}</strong>
            </h5>
            <h5>
              <span className="text-title">tax :</span>
              <strong>$ {cartTax}</strong>
            </h5>
            <h5>
              <span className="text-title">total :</span>
              <strong>$ {cartTotal}</strong>
            </h5>
            {/* <PayPalButton
              total={cartTotal}
              clearCart={clearCart}
              history={history}
            ></PayPalButton> */}
            <ButtonContainer cart onClick={() => handleChangeOpen()}>
              BUY NOW
            </ButtonContainer>
            {modalPaymentOpen === true ? (
              <ModalPayment className="payment-modal">
                {loading ? (
                  <img src={loadingG} alt="loading" />
                ) : (
                  <>
                    <h3>Thank you for shopping!</h3>
                    <Link to="/" onClick={() => handleChangeClose()}>
                      <ButtonContainer pay>back to home page</ButtonContainer>
                    </Link>
                  </>
                )}
              </ModalPayment>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
};

const ModalPayment = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  h3 {
    color: white;
    font-size: 3rem;
  }
`;

export default CartTotals;
