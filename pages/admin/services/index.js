import AdminLayout from "../../../components/Admin/Layout/Layout";
export default function services() {
  return (
    <AdminLayout>
      <h1>this is services page</h1>
    </AdminLayout>
  );
}

export const getStaticProps = () => {
  return {
    props: {
      navbar: false,
    },
  };
};
