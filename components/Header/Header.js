import ServiceInput from "../Services_input/Services_input";

export default function Header() {
  return (
    <div className="container flex items-center justify-center h-96 font-sans bg-hero-2 bg-cover bg-center ">
      <div className="flex items-start  flex-col justify-center">
        <h1 className="text-3xl mb-5 tracking-widest uppercase text-white">
          We Fixit
        </h1>
        <h3 className="text-5xl mb-4 font-semibold font-sans text-white capitalize">
          Quality home services, on demand
        </h3>
        <p className="text-xl text-white">
          Experienced, hand-picked Professionals to serve you at your doorstep
        </p>
      </div>
    </div>
  );
}
// export default function Header() {
// 	return (
// 		<div className="container grid grid-cols-2 font-sans ">
// 			<div className="flex items-start  flex-col justify-center pl-10 pr-6">
// 				<h1 className="text-xl mb-5 text-gray-500 tracking-widest uppercase">
// 					We Fixit
// 				</h1>
// 				<h3 className="text-4xl mb-4 font-bold font-sans">
// 					Quality home services, on demand
// 				</h3>
// 				<p className="text-gray-600 text-lg">
// 					Experienced, hand-picked Professionals to serve you at your
// 					doorstep
// 				</p>
// 				{/* <ServiceInput /> */}
// 			</div>
// 			<img src="/images/hero.png" />
// 		</div>
// 	);
// }
