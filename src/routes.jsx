import SalesAndManagement from "./pages/SalesAndManagement/SalesAndManagement";
import Support from "./pages/Support/Support";
import Statistics from "./pages/Statistics/Statistics";
import Profile from "./pages/Profile/Profile";

const routes = [
  { path: "/", element: <SalesAndManagement /> },
  { path: "/support", element: <Support /> },
  { path: "/statistics", element: <Statistics /> },
  { path: "/profile", element: <Profile /> },
];

export default routes;
