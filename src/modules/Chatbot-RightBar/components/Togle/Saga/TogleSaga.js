import { put, call, takeLatest } from 'redux-saga/effects';
import { toggleFailure, toggleSuccess } from '../State/TogleAction';
import { setLanguageApi } from '../../../../../common/services/TogleService';

function* fetchToggle(action) {  
    try {
        const data = yield call(setLanguageApi, action.language); 
        yield put(toggleSuccess(data));
    } catch (error) {
        yield put(toggleFailure(error));
    }
}
export default fetchToggle;
