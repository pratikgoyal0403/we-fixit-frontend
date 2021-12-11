export default function Modal({ children }) {
  return (
    <div
      className="bg-white w-4/12 max-w-7xl mx-auto rounded-lg"
      onClick={(e) => e.stopPropagation()}
    >
      {children}
    </div>
  );
}
