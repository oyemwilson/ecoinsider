import Image from "next/image";
import Topnav from "./pages/Topnav";
import Homepage from "./pages/landingpage/Homepage";
import Mission from "./pages/landingpage/Mission";

export default function Home() {
  return (
    <>
    <div className="gradient-bg">
    <Topnav />
    <Homepage />
    </div>
    <Mission />

    </>
  );
}
