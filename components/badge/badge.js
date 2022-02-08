
export default function Badge({count}) {
return (
    <div className="bg-[orange] text-white absolute flex items-center justify-center right-[-50%] top-[-25%] w-[18px] h-[18px] rounded-full text-xs font-semibold">
      {count}
    </div>
  );
}
