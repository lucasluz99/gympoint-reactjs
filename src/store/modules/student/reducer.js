import produce from 'immer';

const INITIAL_STATE = {
  students: [],
  loading: false,
  student: '',
};

export default function studentReducer(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@student/SEARCH_REQUEST': {
        draft.loading = true;
        draft.student = action.payload.student;
        break;
      }
      case '@student/SEARCH_SUCCESS': {
        draft.loading = false;
        draft.students = action.payload.students;
        break;
      }
      default:
    }
  });
}
