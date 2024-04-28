import { auth } from "@clerk/nextjs";

const adminIds = ["user_2ecUth29nvvtivMDFJjUrkvtmN5"];

export const getIsAdmin = () => {
  const { userId } = auth();

  if (!userId) {
    return false;
  }

  return adminIds.indexOf(userId) !== -1;
};
