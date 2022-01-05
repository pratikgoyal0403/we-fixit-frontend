export default function Input({ Icon2, disabled, className, ...props }) {
  let disabledClass = "";
  if (disabled) {
    disabledClass = "opacity-90 cursor-not-allowed";
  }
  return (
    <div
      className={
        "bg-gray-200 w-full mb-3 pr-3 flex rounded items-center justify-between " +
        disabledClass +
        className
      }
    >
      <input
        {...props}
        disabled={disabled}
        className="flex-1 w-full bg-transparent py-2 px-4 focus:outline-none"
      />
      {Icon2 && Icon2}
    </div>
  );
}
