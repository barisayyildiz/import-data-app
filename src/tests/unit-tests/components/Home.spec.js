import { render, screen, fireEvent } from "@testing-library/react";

// import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

import { createMockComponent } from "../../helpers";
import Home from "../../../components/Home";
import { homePageTexts } from "../../../constants";

import { toggleModal } from "../../../store/slices/modalSlice";

import { reducers } from "../../../store";

describe("Should render home page", () => {
  it("Should render texts correct", () => {
    const {
      header,
      subHeader,
      buttonText,
      usage: { header: usageHeader, steps },
    } = homePageTexts;
    render(createMockComponent(<Home />));
    const texts = [header, subHeader, buttonText];
    texts.forEach((text) => {
      expect(screen.getByText(header)).toBeInTheDocument();
    });
  });

  it("Should render Human Icon", () => {
    const { getByTestId } = render(createMockComponent(<Home />));
    const humansIcon = getByTestId("humans_icon");
    expect(humansIcon).toBeInTheDocument();
  });

  // TODO: Butona basıldığında modal açılıyor mu (integration test...)

  // it("should open modal when button is clicked", () => {
  //   const initialState = {
  //     modal: {
  //       isOpen: false,
  //     },
  //     form: {
  //       allForms: [],
  //       selectedForm: null,
  //     },
  //   };

  //   const store = configureStore({
  //     reducer: reducers,
  //   });

  //   render(
  //     <Provider store={store}>
  //       <Home />
  //     </Provider>
  //   );

  //   console.log(store.getState());
  //   const button = screen.getByText(/import submissions now/i);
  //   fireEvent.click(button);
  //   // store.dispatch({
  //   //   type: "modal/toggleModal",
  //   // });
  //   console.log(store.getState());
  // });

  // it("Should open the modal when button is clicked", async () => {
  //   const initialState = {
  //     modal: {
  //       isOpen: false,
  //     },
  //     form: {
  //       allForms: [],
  //       selectedForm: null,
  //     },
  //   };

  //   const mockStore = configureStore();
  //   const store = mockStore(initialState);

  //   console.log(store.getState());

  //   render(
  //     <Provider store={store}>
  //       <Home />
  //     </Provider>
  //   );
  //   const button = screen.getByText(/import submissions now/i);
  //   expect(button).toBeInTheDocument();
  //   fireEvent.click(button);

  //   store.dispatch(toggleModal());

  //   console.log(store.getState());

  //   // console.log(button);
  // });
});
