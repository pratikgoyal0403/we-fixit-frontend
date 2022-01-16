import Loader from "../Commons/Loader.js";
import ServiceCards from "../Commons/Services_card.js";

export default function AllServices({ filteredResult }) {
  return (
    <div className="py-20">
      <div className="w-11/12 mx-auto grid grid-cols-6 gap-10">
        {!filteredResult && <Loader />}
        {filteredResult &&
          filteredResult.map((category) => (
            <ServiceCards key={category._id} {...category} />
          ))}
      </div>
    </div>
  );
}
