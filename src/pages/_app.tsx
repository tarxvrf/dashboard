
import FramePage from "@/Frame/FramePage";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import CustomPage from "./dashboard";
import Framedashboard from "@/Frame/Framedashboard";
import { QueryClient,QueryClientProvider } from "@tanstack/react-query";



export default function App({ Component, pageProps }: AppProps) {


  const router = useRouter()
  const iscustom = router.pathname.startsWith('/dashboard') || router.pathname.startsWith('/dashboard/')
  return  iscustom ?( <QueryClientProvider client={new QueryClient}><Framedashboard><CustomPage {...pageProps} /></Framedashboard></QueryClientProvider>) : (<QueryClientProvider client={new QueryClient} ><FramePage><Component {...pageProps}/></FramePage></QueryClientProvider>)

  
}
