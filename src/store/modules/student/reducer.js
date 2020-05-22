import produce from 'immer';

const INITIAL_STATE = {
  students: [],
  student: '',
  currentPage: 1,
  totalPages: 0,
  loading: false,
};

export default function studentReducer(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@student/SEARCH_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@student/SEARCH_SUCCESS': {
        const { data, currentPage, totalPages } = action.payload.data;
        const { name } = action.payload;
        draft.student = name;
        draft.loading = false;
        draft.students = data;
        draft.currentPage = Number(currentPage);
        draft.totalPages = Number(totalPages);
        break;
      }
      case '@student/LOAD_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@student/UPDATE_SUCCESS': {
        const { data, currentPage, totalPages } = action.payload;
        draft.loading = false;
        draft.students = data;
        draft.currentPage = Number(currentPage);
        draft.totalPages = Number(totalPages);
        break;
      }

      case '@student/EDIT_REQUEST': {
        draft.loading = true;
        break;
      }

      case '@student/NEW_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@student/UPDATE_PAGE_SUCCESS': {
        draft.currentPage = Number(action.payload.page);
        break;
      }

      default:
    }
  });
}
