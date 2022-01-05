import Input from "../Commons/Input";

export default function CreateReview() {
  return (
    <div>
      <div>
        <textarea
          placeholder="Review"
          rows="5"
          className="w-full my-2 bg-gray-200 py-2 px-4 rounded focus:outline-none"
        //   value={message}
        //   onChange={(e) => setMessage(e.target.value)}
        />
      </div>
    </div>
  );
}
