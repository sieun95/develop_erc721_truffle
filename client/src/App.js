import "./App.css";
import { Routes, Route } from "react-router-dom";
import {
  AdminPage,
  MainPage,
  MarketPage,
  MyPage,
  NotFound,
  PreMintingPage,
  StakingPage,
} from "./pages/_index";
import { Navbar, Footer } from "./components/index";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<MainPage />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/pre-mintingpage" element={<PreMintingPage />} />
        {/* <Route path='/admin' element={<AdminPage/>} /> */}
        <Route path="/marketpage" element={<MarketPage />} />
        <Route path="/stakingpage" element={<StakingPage />} />
      </Routes>
    </>
  );
}

export default App;
