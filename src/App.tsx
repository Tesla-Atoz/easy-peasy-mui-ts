import React, { ReactElement } from "react";
import { CssBaseline, Typography } from "@material-ui/core";
import { useStoreActions, useStoreDispatch, useStoreState } from "./hooks";
import useStyles from "./app-styles";
import DetailCard from "./components/DetailCard/DetailCard";
import NewDetail from "./components/NewDetail/NewDetail";
import { userDataInterface } from "./models/userDataModel";
import { Action } from "easy-peasy";
import { globalStoreInterface } from "./store/centralStore";

function App() {
  const classes = useStyles();

  //pieces of state from global store
  const userDataFull = useStoreState((state) => state.userStore.userDataFull);
  const currentUserData = useStoreState(
    (state) => state.userStore.currentUserData
  );

  const addDetail = useStoreActions(
    (actions) => actions.userStore.setUserDataFull
  );
  const addDetailHandler = (detailData: userDataInterface) => {
    addDetail(detailData);
  };

  const updatedetail = useStoreActions(
    (actions) => actions.userStore.updateUserData
  );
  const updateDetailHandler = (
    id: string,
    updatedData: { name: string; age: string }
  ) => {
    updatedetail({ id: id, updatedData: updatedData });
  };

  const editdetail = useStoreActions(
    (actions) => actions.userStore.editUserData
  );
  const onEditHandler = (details: userDataInterface) => {
    editdetail(details);
  };

  const deleteDetail = useStoreActions(
    (actions) => actions.userStore.deleteUserData
  );
  const onDeleteHandler = (id: string) => {
    deleteDetail(id);
  };

  let displayContent: JSX.Element[] | ReactElement = (
    <p>No user data entereed yet!</p>
  );

  if (userDataFull !== undefined && userDataFull.length > 0) {
    displayContent = userDataFull.map((userData) => (
      <DetailCard
        key={userData.id}
        id={userData.id}
        name={userData.name}
        age={userData.age}
        edit={userData.edit}
        onDelete={onDeleteHandler}
        onEdit={onEditHandler}
      />
    ));
  }

  return (
    <div>
      <CssBaseline />
      <Typography variant="h1" align="center" gutterBottom color="textPrimary">
        Enter user data
      </Typography>

      <div className={classes.app}>
        <div className={classes.appItem}>
          <NewDetail
            onAddDetail={addDetailHandler}
            onUpdateDetail={updateDetailHandler}
            currentData={currentUserData}
          />
        </div>
        <div className={classes.appItem}>{displayContent}</div>
      </div>
    </div>
  );
}

export default App;
