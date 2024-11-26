export const isEditor = ({ req: { user }, }) => {
    // Return true or false based on if the user has an admin role
    if(user?.roles?.includes('editor')) return true
    return Boolean(user?.roles?.includes('admin'));
  }