import { useState } from "react";
export const UseValidation = (input) => {
  let g1 = null;
  if (input.useName.length === 0 && input.pwd.length === 0) {
    g1 = { ...input, ...{ error: "not valid" } };
  }
  return g1;
};
