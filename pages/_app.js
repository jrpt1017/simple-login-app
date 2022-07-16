import "../styles/globals.css";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import Layout from "../components/Layout";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    router.push("/register");
  }, []);

  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
