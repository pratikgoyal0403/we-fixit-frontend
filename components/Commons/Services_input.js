export default function ServiceInput({ Icon1, className, ...props }) {
	return (
		<div className="px-2 border rounded flex items-center">
			{Icon1}
			<input
				{...props}
				className={
					"ml-1 w-full p-1.5 focus:outline-none flex-1 " + className
				}
			/>
		</div>
	);
}
