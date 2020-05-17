export function searchStudentRequest(name) {
  return {
    type: '@student/SEARCH_REQUEST',
    payload: {
      name,
    },
  };
}

export function searchStudentSuccess(students) {
  return {
    type: '@student/SEARCH_SUCCESS',
    payload: {
      students,
    },
  };
}
