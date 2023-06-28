import { setData, getData, editData, deleteData } from '../../api/service';
import {
  setErrorMessage,
  setSuccessMessage,
  loaderFalse,
  loaderTrue,
} from '../../action';

// =========================registeration post action=================
export const registrationPost = (url, props) => async (dispatch) => {
  const { data } = await setData(url, props);
  dispatch(loaderFalse());
  console.log(data.statusCode === 200);
  if (data.statusCode === 200) {
    dispatch(setSuccessMessage(data?.message));
  } else {
    dispatch(setErrorMessage(data?.message));
  }
};
