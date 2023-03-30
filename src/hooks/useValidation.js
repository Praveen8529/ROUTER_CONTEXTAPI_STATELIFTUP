export const useValidation = (input) => {
  let result = null;
  if (input.useName.length === 0 || input.pwd.length === 0) {
    result = { ...input, ...{ error: "not valid" } };
  }
  return result;
};
