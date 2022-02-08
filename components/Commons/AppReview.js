import Container from "./Container";
export default function AppReview({review, username}) {
  return (
    <div className="w-1/2 mx-auto flex items-center justify-center flex-col pt-7 pb-10 border-b-[7px] shadow-lg mb-16 rounded mt-8 bg-white border-b-primary">
      <img
        src="/images/quotes.svg"
        alt="quote"
        className="w-[60px] h-[60px] my-2"
      />
      <p className="capitalize text-gray-500 w-2/3 text-center my-2 font-semibold text-xl">
        {review}
      </p>
      <p className="my-2 text-lg italic capitalize">{username}</p>
    </div>
  );
}
