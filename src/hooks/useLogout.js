import { useAuthContext } from "./useAuthContext";
import { useProjectsContext } from "./useProjectsContext";

export const useLogout = () => {
  const { dispatch: logoutDispatch } = useAuthContext();
  const { dispatch: projectsDispatch } = useProjectsContext();

  const logout = () => {
    //clear localStorage
    localStorage.removeItem("user");

    //dispatch logout
    logoutDispatch({ type: "LOGOUT" });
    projectsDispatch({ type: "SET_PROJECTS", payload: [] });
  };

  return { logout };
};
