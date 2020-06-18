import produce from 'immer';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';

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
        draft.registrations = data.map((registration) => ({
          ...registration,

          startDateFormatted: format(
            parseISO(registration.start_date),
            "dd 'de' MMMM 'de' yyyy",
            {
              locale: pt,
            }
          ),
          endDateFormatted: format(
            parseISO(registration.end_date),
            "dd 'de' MMMM 'de' yyyy",
            {
              locale: pt,
            }
          ),
        }));
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
