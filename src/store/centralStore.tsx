import { createStore } from "easy-peasy";
import userDataModel from "../models/userDataModel";
import { StoreInterface } from "../models/userDataModel";

export interface globalStoreInterface {
  userStore: StoreInterface;
  // cardStore: CardInterface;
}

const globalModel: globalStoreInterface = {
  userStore: userDataModel,
};

const store = createStore(globalModel);
export default store;
