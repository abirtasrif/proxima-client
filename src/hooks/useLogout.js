import { useAuthContext } from "./useAuthContext";

export const useLogout = () => {
  const { dispatch: logoutDispatch } = useAuthContext();

  const logout = () => {
    //clear ls
    localStorage.removeItem("user");

    //dispatch logout
    logoutDispatch({ type: "LOGOUT" });
  };

  return { logout };
};
