import { put, call ,takeLatest} from 'redux-saga/effects';
import { toggleFailure, toggleSuccess } from '../State/TogleAction';
import { TogleApi } from '../../../../../common/services/TogleService';

function* fetchToggle() {
    try {
        const response = yield call(TogleApi);
        const data = yield response.json();
        yield put(toggleSuccess(data));
    } catch (error) {
        yield put(toggleFailure(error));
    }
}
export default fetchToggle;