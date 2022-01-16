import { useEffect } from "react";
import "tailwindcss/tailwind.css";
import { wrapper } from "../store";
import Layout from "../components/Layout/Layout";
import { useDispatch } from "react-redux";
import { autoLogin } from "../store/actions/authActions";

function MyApp({ Component, pageProps }) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(autoLogin());
  }, []);
  return (
    <Layout navbar={pageProps.navbar}>
      <Component {...pageProps}></Component>
    </Layout>
  );
}

export default wrapper.withRedux(MyApp);
