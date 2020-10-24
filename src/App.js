import "./App.css";

import { AppProvider } from "./context/AppProvider";

import Navbar from "./components/Navbar/Navbar";

import { Layout } from "./styles/StyledComponents";
import Settings from "./pages/Settings";

const App = () => {
  return (
    <Layout>
      <AppProvider>
        <Navbar />
        <Settings />
      </AppProvider>
    </Layout>
  );
};

export default App;
