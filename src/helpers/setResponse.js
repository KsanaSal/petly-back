export const setSuccessResponse = (code, data) => {
  switch (code) {
    case 200:
      return {
        status: "success",
        code: 200,
        data: data,
      };

    case 201:
      return {
        status: "created",
        code: 201,
        data: data,
      };

    case 204:
      return {
        status: "logout",
        code: 204,
      };

    default:
      break;
  }
};
