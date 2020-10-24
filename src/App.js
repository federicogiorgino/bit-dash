import "./App.css";

import { AppProvider } from "./context/AppProvider";

import Welcome from "./components/Mix/Welcome";
import Navbar from "./components/Navbar/Navbar";
  
import { Layout } from "./styles/StyledComponents";

const App = () => {
  return (
    <Layout>
      <AppProvider>
        <Navbar />
        <Welcome />
      </AppProvider>
    </Layout>
  );
};

export default App;
