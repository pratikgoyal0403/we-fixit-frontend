export default function LinkButton({ Icon1, title, Icon2, className }) {
	return (
		<div
			className={
				"cursor-pointer text-sm sm:text-regular text-primary hover:underline capitalize font-medium flex items-center " +
				className
			}
		>
			{Icon1 || ""}
			<p className="mx-1 ">{title}</p>
			{Icon2 || ""}
		</div>
	);
}
