export function searchStudentRequest(name, page = 1) {
  return {
    type: '@student/SEARCH_REQUEST',
    payload: {
      name,
      page,
    },
  };
}

export function searchStudentSuccess(data) {
  return {
    type: '@student/SEARCH_SUCCESS',
    payload: {
      ...data,
    },
  };
}
