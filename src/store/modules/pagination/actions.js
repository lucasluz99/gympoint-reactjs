export function updatePageRequest(page) {
  return {
    type: '@pagination/UPDATE_REQUEST',
    payload: {
      page,
    },
  };
}

export function updatePageSuccess(page) {
  return {
    type: '@pagination/UPDATE_SUCCESS',
    payload: {
      page,
    },
  };
}
