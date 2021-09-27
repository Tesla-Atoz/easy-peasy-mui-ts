import { Action, action } from "easy-peasy";

export interface userDataInterface {
  id: string;
  name: string;
  age: string;
  edit: boolean;
}

export interface updateDetailInterface {
  id: string;
  updatedData: { name: string; age: string };
}

export interface StoreInterface {
  userDataFull: userDataInterface[];
  setUserDataFull: Action<StoreInterface, userDataInterface>;

  currentUserData: userDataInterface | undefined;
  setCurrentUserData: Action<StoreInterface, userDataInterface>;

  updateUserData: Action<StoreInterface, updateDetailInterface>;
  deleteUserData: Action<StoreInterface, string>;
  editUserData: Action<StoreInterface, userDataInterface>;
}

const userDataModel: StoreInterface = {
  userDataFull: [],
  setUserDataFull: action((state, payload) => {
    state.userDataFull = [...state.userDataFull, payload];
  }),

  currentUserData: {
    id: "1",
    name: "2",
    age: "3",
    edit: false,
  },
  setCurrentUserData: action((state, payload) => {
    if (state.currentUserData !== undefined) {
      state.currentUserData = payload;
    }
  }),

  deleteUserData: action((state, payload) => {
    if (state.userDataFull !== undefined) {
      state.userDataFull = state.userDataFull.filter(
        (item) => item.id !== payload
      );
    }
  }),

  editUserData: action((state, payload) => {
    if (state.currentUserData !== undefined) {
      state.currentUserData = { ...payload, edit: true };
    }
  }),

  updateUserData: action((state, payload) => {
    state.userDataFull = state.userDataFull.map((user) => {
      if (user.id === payload.id) {
        user.name = payload.updatedData.name;
        user.age = payload.updatedData.age;
      }
      return user;
    });

    if (state.currentUserData !== undefined) {
      state.currentUserData = { ...state.currentUserData, edit: false };
    }
  }),
};

export default userDataModel;
