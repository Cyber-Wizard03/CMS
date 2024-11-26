import { Access, FieldAccess } from "payload/types";
// import { User } from "../../payload-types";

export const isAdmin = ({ req: { user }, }) => {
  // Return true or false based on if the user has an admin role
  return Boolean(user?.roles?.includes('admin'));
}

// export const isAdminFieldLevel: FieldAccess<{ id: string }, unknown, User> = ({ req: { user } }) => {
//   // Return true or false based on if the user has an admin role
//   return Boolean(user?.roles?.includes('admin'));
// }