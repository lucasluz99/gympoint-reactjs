export function loadRegistrationsRequest() {
  return {
    type: '@registration/LOAD_REQUEST',
  };
}

export function updateRegistrationsSuccess(data) {
  return {
    type: '@registration/UPDATE_SUCCESS',
    payload: {
      ...data,
    },
  };
}

export function updatePageRequest(page) {
  return {
    type: '@registration/UPDATE_PAGE_REQUEST',
    payload: {
      page,
    },
  };
}

export function updatePageSuccess(page) {
  return {
    type: '@registration/UPDATE_PAGE_SUCCESS',
    payload: {
      page,
    },
  };
}

export function deleteRegistrationRequest(id) {
  return {
    type: '@registration/DELETE_REQUEST',
    payload: {
      id,
    },
  };
}

export function newRegistrationRequest(data) {
  return {
    type: '@registration/NEW_REQUEST',
    payload: {
      data,
    },
  };
}

export function editRegistrationRequest(data) {
  return {
    type: '@registration/EDIT_REQUEST',
    payload: {
      ...data,
    },
  };
}
