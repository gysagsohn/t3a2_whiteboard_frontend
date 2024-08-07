import { Route, Routes } from "react-router-dom"
import Template from "./pages/_TemplatePage";
import DashboardPage from "./pages/DashboardPage";
import OperatorPage from "./pages/OperatorPage";
import AssetPage from "./pages/AssetPage";
import ClientPage from "./pages/ClientPage";
import AllocationPage from "./pages/AllocationPage";
import UserPage from "./pages/UserPage";
import LoginPage from "./pages/LoginPage";

function App(){
  return(
    <Routes>
      <Route path="/" element={<Template />} >
        <Route index element={<DashboardPage />} />
        <Route path="operator" element={<OperatorPage />} />
        <Route path="asset" element={<AssetPage/>} />
        <Route path="client" element={<ClientPage />} />
        <Route path="allocation" element={<AllocationPage />} />
        <Route path="user" element={<UserPage />} />
        <Route path="login"element={<LoginPage />} />
      </Route>
    </Routes>
  )
}

export default App;
