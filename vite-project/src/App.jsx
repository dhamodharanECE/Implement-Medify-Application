import { Outlet } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import DownloadApp from "./Components/Server/TopSections/DownloadApp/DowmloadApp";
import Footer from "./Components/Server/Footer/Footer";


function App() {
  return (
    <div>
      <CssBaseline />
      <Outlet />
      <DownloadApp />
      <Footer />
    </div>
  );
}

export default App;
