import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./Routes";
import NavigationBar from "../../components/navbar";

const MainHomePage = () => {
  const Links = [
    {
      name: "Dashboard",
      path: "home",
    },
    {
      name: "Settings",
      path: "home/settings",
    },
  ];
  return (
    <Router>
      <NavigationBar links={Links} logout />
      <main>
        <Routes />
      </main>
    </Router>
  );
};

export default MainHomePage;
