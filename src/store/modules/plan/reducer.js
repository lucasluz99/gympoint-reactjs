import produce from 'immer';

const INITIAL_STATE = {
  plans: [],
  currentPage: 1,
  totalPages: 0,
  loading: false,
};

export default function studentReducer(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@plan/LOAD_REQUEST': {
        break;
      }
      case '@plan/UPDATE_SUCCESS': {
        const { data, currentPage, totalPages } = action.payload;
        draft.loading = false;
        draft.plans = data;
        draft.currentPage = Number(currentPage);
        draft.totalPages = Number(totalPages);
        break;
      }
      case '@plan/UPDATE_PAGE_REQUEST': {
        break;
      }

      case '@plan/UPDATE_PAGE_SUCCESS': {
        break;
      }

      default:
    }
  });
}
