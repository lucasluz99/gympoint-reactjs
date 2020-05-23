export function loadPlansRequest() {
  return {
    type: '@plan/LOAD_REQUEST',
  };
}

export function updatePlansSuccess(data) {
  return {
    type: '@plan/UPDATE_SUCCESS',
    payload: {
      ...data,
    },
  };
}

export function updatePageRequest(page) {
  return {
    type: '@plan/UPDATE_PAGE_REQUEST',
    payload: {
      page,
    },
  };
}

export function updatePageSuccess(page) {
  return {
    type: '@plan/UPDATE_PAGE_SUCCESS',
    payload: {
      page,
    },
  };
}

export function deletePlanRequest(id) {
  return {
    type: '@plan/DELETE_REQUEST',
    payload: {
      id,
    },
  };
}

export function newPlanRequest(data) {
  return {
    type: '@plan/NEW_REQUEST',
    payload: {
      data,
    },
  };
}

export function showCanceledsRequest() {
  return {
    type: '@plan/SHOW_CANCELEDS_REQUEST',
  };
}

export function activatePlanRequest(id) {
  return {
    type: '@plan/ACTIVATE_REQUEST',
    payload: {
      id,
    },
  };
}
