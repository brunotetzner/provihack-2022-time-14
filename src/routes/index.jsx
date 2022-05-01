import { Route, BrowserRouter, Routes } from "react-router-dom";
import InfoOngPage from "../pages/infoOngPage";
import InfoSchoolPage from "../pages/infoSchoolPage/index";
import OngPage from "../pages/ongPage/index";
import SchoolPage from "../pages/schoolPage/index";
import Signin from "../pages/signIn/index";
import LandingPage from "../pages/landingPage/index";
import OngEditalsPage from "../pages/ongEditalsPage";
import SchoolEditalsPage from "../pages/schoolEditalsPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<LandingPage />} />
        <Route path={"/ong/info"} element={<InfoOngPage />} />
        <Route path={"/school/info"} element={<InfoSchoolPage />} />
        <Route path={"/ong"} element={<OngPage />} />
        <Route path={"/school"} element={<SchoolPage />} />
        <Route path={"/login"} element={<Signin />} />
        <Route path={"/ong/editals"} element={<OngEditalsPage />} />
        <Route path={"/school/editals"} element={<SchoolEditalsPage />} />

        <Route path={"/*"} element={<Signin />} />
        {/* Alterar a pagina de erro */}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
