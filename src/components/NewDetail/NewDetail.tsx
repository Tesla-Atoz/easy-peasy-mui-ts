import { userDataInterface } from "../../models/userDataModel";
import DetailForm from "../DetailForm/DetailForm";

interface userDataFromForm {
  name: string;
  age: string;
}

interface NewDetailProps {
  onAddDetail: (x: userDataInterface) => void;
  onUpdateDetail: (id: string, updatedData: userDataFromForm) => void;
  currentData: userDataInterface | undefined;
}

const NewDetail = (props: NewDetailProps) => {
  const saveDetailDataHandler = (enteredDetailData: userDataFromForm) => {
    const detailData = {
      ...enteredDetailData,
      id: Math.random().toString(),
      edit: false,
    };
    props.onAddDetail(detailData);
  };

  return (
    <div>
      <DetailForm
        onSaveUserData={saveDetailDataHandler}
        currentData={props.currentData}
        onUpdateDetails={props.onUpdateDetail}
      />
    </div>
  );
};

export default NewDetail;
