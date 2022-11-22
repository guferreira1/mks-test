import { configureStore } from "@reduxjs/toolkit";
import userEvent from "@testing-library/user-event";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import CartComponent from "../components/cart/Cart-component";
import rootReducer from "../store/root-reducer";

describe("Cart Item Component", () => {
  it("should show correct cart products", () => {
    const store = configureStore({
      reducer: rootReducer,
      preloadedState: {
        cartReducer: {
          products: [
            {
              id: 8,
              photo: "/image_url",
              price: "600",
              name: "headset cloud stinger",
              quantity: 2,
            },
          ],
        },
      } as any,
    });
    const { getByText, getByLabelText } = render(
      <Provider store={store}>
        <CartComponent />
      </Provider>
    );

    getByLabelText("headset cloud stinger");
    getByLabelText("600");
    getByText("headset cloud stinger");
    getByText(2);
  });

  it("should remove product on remove click", () => {
    const store = configureStore({
      reducer: rootReducer,
      preloadedState: {
        cartReducer: {
          products: [
            {
              id: 8,
              photo: "/image_url",
              price: "600",
              name: "headset cloud stinger",
              quantity: 2,
            },
          ],
        },
      } as any,
    });
    const { getByLabelText } = render(
      <Provider store={store}>
        <CartComponent />
      </Provider>
    );

    const removeButton = getByLabelText(
      /remove headset cloud stinger/i
    );
    userEvent.click(removeButton);
  });
});
