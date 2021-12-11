import "tailwindcss/tailwind.css";
import Layout from "../components/Layout/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <Layout navbar={pageProps.navbar}>
      <Component {...pageProps}></Component>
    </Layout>
  );
}

export default MyApp;
