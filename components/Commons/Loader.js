export default function Loader({ white = false }) {
  return (
    <div
      className={
        "rounded-full border-4 border-t-transparent w-7 h-7 animate-spin mx-auto " +
        (white ? "border-white" : "border-primary")
      }
    ></div>
  );
}
