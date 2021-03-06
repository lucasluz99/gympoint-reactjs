import produce from 'immer';

const INITIAL_STATE = {
  token: null,
  signed: false,
  loading: false,
  admin: {
    name: '',
    email: '',
  },
};

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@auth/SIGN_IN_SUCCESS': {
        draft.token = action.payload.token;
        draft.signed = true;
        draft.loading = false;
        draft.admin.name = action.payload.user.name;
        draft.admin.email = action.payload.user.email;
        break;
      }

      case '@auth/SIGN_IN_REQUEST': {
        draft.loading = true;
        break;
      }

      case '@auth/SIGN_IN_FAILURE': {
        draft.loading = false;
        break;
      }
      case '@auth/SIGN_OUT': {
        draft.token = null;
        draft.signed = null;
        draft.loading = false;
        draft.admin = {
          name: '',
          email: '',
        };
        break;
      }
      default:
    }
  });
}
