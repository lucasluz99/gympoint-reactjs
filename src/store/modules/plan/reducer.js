import produce from 'immer';

const INITIAL_STATE = {
  plans: [],
  currentPage: 1,
  totalPages: 0,
  loading: false,
};

export default function registrationReducer(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@plan/LOAD_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@plan/UPDATE_SUCCESS': {
        const { data, currentPage, totalPages } = action.payload;
        draft.loading = false;
        draft.registrations = data;
        draft.currentPage = Number(currentPage);
        draft.totalPages = Number(totalPages);
        break;
      }
      case '@plan/UPDATE_PAGE_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@plan/NEW_REQUEST': {
        draft.loading = true;
        break;
      }

      default:
    }
  });
}
