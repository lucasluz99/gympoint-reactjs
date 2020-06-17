import produce from 'immer';

const INITIAL_STATE = {
  registrations: [],
  currentPage: 1,
  totalPages: 0,
  loading: false,
};

export default function registrationReducer(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@registration/LOAD_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@registration/UPDATE_SUCCESS': {
        const { data, currentPage, totalPages } = action.payload;
        draft.loading = false;
        draft.registrations = data;
        draft.currentPage = Number(currentPage);
        draft.totalPages = Number(totalPages);
        break;
      }
      case '@registration/UPDATE_PAGE_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@registration/NEW_REQUEST': {
        draft.loading = true;
        break;
      }

      default:
    }
  });
}
