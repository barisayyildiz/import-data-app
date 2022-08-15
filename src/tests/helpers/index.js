import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

export const createMockComponent = (Component, initialState = {}) => {
  const mockStore = configureStore();
  const store = mockStore(initialState);
  return <Provider store={store}>{Component}</Provider>;
};
