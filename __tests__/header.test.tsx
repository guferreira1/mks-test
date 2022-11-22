import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "../store/root-reducer";
import HeaderComponent from "../components/header/HeaderComponent";

describe("Header", () => {
  it("should show the right number in the cart", () => {
    const store = configureStore({
      reducer: rootReducer,
      preloadedState: {
        cartReducer: {
          products: [
            {
              id: 1,
              brand: "hyperx",
              description: "lorem ipsum",
              photo: "image_url",
              price: "600",
              name: "headset cloud stinger",
              quantity: 4,
              createdAt: "22-11-2022",
              updatedAt: "22-11-2022",
            },
          ],
        },
      } as any,
    });

    const { getByText } = render(
      <Provider store={store}>
        <HeaderComponent />
      </Provider>
    );

    getByText("4");
  });
});
