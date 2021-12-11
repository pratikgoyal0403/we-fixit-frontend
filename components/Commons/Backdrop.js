export default function Backdrop({ hideModal, children }) {
  return (
    <div
      className="fixed top-0 left-0 w-screen h-full z-50 bg-black bg-opacity-80 flex items-center justify-center"
      onClick={(e) => {
        hideModal();
      }}
    >
      {children}
    </div>
  );
}
