import produce from 'immer';

const INITIAL_STATE = {
  students: [],
  currentPage: 1,
  totalPages: 1,
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
        const { data, currentPage, totalPages } = action.payload;
        draft.loading = false;
        draft.students = data;
        draft.currentPage = currentPage;
        draft.totalPages = totalPages;
        break;
      }
      case '@student/LOAD_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@student/LOAD_SUCCESS': {
        const { data, currentPage, totalPages } = action.payload;
        draft.loading = false;
        draft.students = data;
        draft.currentPage = currentPage;
        draft.totalPages = totalPages;
        break;
      }
      case '@student/DELETE_SUCCESS': {
        const { data, currentPage, totalPages } = action.payload;
        draft.students = data;
        draft.currentPage = currentPage;
        draft.totalPages = totalPages;
        break;
      }
      case '@student/EDIT_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@student/EDIT_SUCCESS': {
        const { data, currentPage, totalPages } = action.payload;
        draft.students = data;
        draft.currentPage = currentPage;
        draft.totalPages = totalPages;
        draft.loading = false;
        break;
      }
      case '@student/NEW_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@student/NEW_SUCCESS': {
        const { data, currentPage, totalPages } = action.payload;
        draft.students = data;
        draft.currentPage = currentPage;
        draft.totalPages = totalPages;
        draft.loading = false;
        break;
      }
      default:
    }
  });
}
