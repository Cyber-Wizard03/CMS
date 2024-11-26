export const isUser = ({ req: { user }, }) => {
    // Return true or false based on if the user has an admin role
    if(user?.roles?.includes('user')) return true
    return Boolean(user?.roles?.includes('admin'));
  }