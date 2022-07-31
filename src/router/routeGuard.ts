function guard(pathname: string): boolean {
  if (pathname.startsWith('/student')) {
    if (!sessionStorage.getItem('studentInfo')) {
      return false;
    }
  } else if (pathname.startsWith('/teacher')) {
    if (!sessionStorage.getItem('token')) {
      return false;
    }
  }
  return true;
}
export default guard;
