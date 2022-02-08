export default function LinkButton({
  Icon1,
  title,
  Icon2,
  className,
  click = () => {},
  style = {},
}) {
  return (
    <div
      className={
        "cursor-pointer text-sm sm:text-regular text-primary hover:underline capitalize font-medium flex items-center " +
        className
      }
      onClick={click}
      style={style}
    >
      {Icon1 || ""}
      <p className="mx-1 ">{title}</p>
      {Icon2 || ""}
    </div>
  );
}
