import "./App.css";

import { AppProvider } from "./context/AppProvider";

import Navbar from "./components/Navbar/Navbar";

import { Layout } from "./styles/StyledComponents";
import Settings from "./pages/Settings";
import Content from "./components/Mix/Content";
import Dashboard from "./pages/Dashboard";

const App = () => {
  return (
    <Layout>
      <AppProvider>
        <Navbar />
        <Content>
          <Dashboard />
          <Settings />
        </Content>
      </AppProvider>
    </Layout>
  );
};

export default App;
