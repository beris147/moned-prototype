// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const removeTypename = (obj: any) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { __typename, ...rest } = obj;
  return rest;
};
