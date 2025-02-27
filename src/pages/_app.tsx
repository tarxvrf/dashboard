
import FramePage from "@/Frame/FramePage";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import CustomPage from "./dashboard";
import Framedashboard from "@/Frame/Framedashboard";

export default function App({ Component, pageProps }: AppProps) {


  const router = useRouter()
  const iscustom = router.pathname.startsWith('/dashboard')
  return  iscustom ?( <Framedashboard><CustomPage {...pageProps} /></Framedashboard>) : (<FramePage><Component {...pageProps}/></FramePage>)

  
}
