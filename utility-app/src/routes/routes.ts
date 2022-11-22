import { PATHS } from "./paths";
import HomePage from "../pages/HomePage";
import Dashboard from "../pages/DashboardPage";
import LoginPage from "../pages/LoginPage";
import SignupPage from "../pages/SignupPage";
import TodoPage from "../pages/TodoPage";
import PomodoroPage from "../pages/PomodoroPage";
import NotesPage from "../pages/NotesPage";

const routes = [
  {
    key: PATHS.home,
    path: PATHS.home,
    Element: HomePage,
  },
  {
    key: PATHS.dashboard,
    path: PATHS.dashboard,
    Element: Dashboard,
  },
  {
    key: PATHS.login,
    path: PATHS.login,
    Element: LoginPage,
  },
  {
    key: PATHS.signup,
    path: PATHS.signup,
    Element: SignupPage,
  },
  {
    key: PATHS.todo,
    path: PATHS.todo,
    Element: TodoPage,
  },
  {
    key: PATHS.notes,
    path: PATHS.notes,
    Element: NotesPage,
  },
  {
    key: PATHS.pomodoro,
    path: PATHS.pomodoro,
    Element: PomodoroPage,
  },
];

export default routes;
