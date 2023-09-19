import { takeLatest, call, put } from 'redux-saga/effects';
import { sendFileNamesFailure, sendFileNamesSuccess } from '../State/actionSlect';
import { FileApi1 } from '../../../../common/services/SlectService';


function* sendFileNamesSaga(action) {
  try {
    const response = yield call( FileApi1, {
      fileNames: action.payload,
    });

    if (response.status === 200) {
      yield put(sendFileNamesSuccess());
    } else {
      yield put(sendFileNamesFailure("Failed to send file names."));
    }
  } catch (error) {
    yield put(sendFileNamesFailure(error.message));
  }
}

export default sendFileNamesSaga;