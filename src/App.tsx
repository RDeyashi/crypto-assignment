import "./App.css";
import { useRoutes } from "react-router-dom";
import { CryptoStats } from "./components/crypto-stats/crypto-stats";

export const App = () => {
  let routes = useRoutes([{ path: "", element: <CryptoStats /> }]);

  return routes;
};
