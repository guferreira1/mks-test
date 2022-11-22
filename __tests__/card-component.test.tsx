import { configureStore } from "@reduxjs/toolkit";
import userEvent from "@testing-library/user-event";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import CardComponent from "../components/card-component/Card-Component";
import rootReducer from "../store/root-reducer";

describe("Card Component", () => {
  it("should show correct product", () => {
    const store = configureStore({
      reducer: rootReducer,
      preloadedState: {
        productReducer: {
          products: [
            {
              id: 1,
              brand: "hyperx",
              description: "lorem ipsum",
              photo: "/image_url",
              price: "600",
              name: "headset cloud stinger",
              createdAt: "22-11-2022",
              updatedAt: "22-11-2022",
            },
          ],
        },
      } as any,
    });

    const { getByLabelText, getByText } = render(
      <Provider store={store}>
        <CardComponent />
      </Provider>
    );

    getByLabelText("headset cloud stinger");
    getByLabelText("600");
    getByText("headset cloud stinger");
    getByText("lorem ipsum");
    getByText("COMPRAR");
  });
});
