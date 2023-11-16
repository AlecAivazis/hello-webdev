import { RelayEnvironmentProvider } from "react-relay";
import { RelayEnvironment } from "./RelayEnvironment";
import ReactDom from "react-dom/client";
import { Home } from "./Home";

ReactDom.createRoot(document.getElementById("app")!).render(
  <RelayEnvironmentProvider environment={RelayEnvironment}>
    <Home />
  </RelayEnvironmentProvider>
);
