import { BrowserRouter } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import AllRoutes from "./routes/AllRoutes";

import { ScrollToTop } from "./components/ScrollToTop";

//*styles
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop />
        <Header />
        <AllRoutes />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
