import Cart_Card from "../../components/Card_cart/Card";
import ElevatedButton from "../../components/Commons/Elevated_button";
import SectionHeading from "../../components/Commons/Section_heading";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getCart } from "../../store/actions/cartActions";
import { postMyOrder } from "../../store/actions/orderActions";
import Input from "../../components/Commons/Input";
import DropDown from "../../components/Commons/DropDown";
import { useRouter } from "next/router";
import ProtectedRoute from "../../components/ProtectedRoute/ProtectedRoute";
import Container from "../../components/Commons/Container";

function Cart() {
	const [address, setAddress] = useState("");
	const [remarks, setRemarks] = useState("");
	const [timestamp, setTimestamp] = useState("");
	const [bookingDate, setBookingDate] = useState("");
	const router = useRouter();
	const dispatch = useDispatch();
	const cartDetails = useSelector((state) => state.cart.cart);

	useEffect(() => {
		dispatch(getCart());
	}, []);

	const checkDisabled = () => {
		if (!address || !timestamp || !bookingDate) {
			return true;
		}
		return false;
	};

	const postOrder = () => {
		dispatch(
			postMyOrder({
				address,
				remarks,
				timestamp,
				services: cartDetails.services,
				bookingDate,
			})
		);
		router.push("/orders");
	};
	return (
		<div className="py-24">
			<SectionHeading title="Cart" />
			<Container>
				<div className="mt-6 sm:mt-8 lg:mt-10 grid grid-cols-10">
					<div className="col-span-10 lg:col-span-5 xl:col-span-6 order-2 lg:order-1 mt-10 lg:mt-0">
						{cartDetails &&
							cartDetails.services.map((s) => (
								<Cart_Card key={s._id} {...s} />
							))}
					</div>
					<div className="col-span-10 lg:col-span-5 xl:col-span-4 lg:pl-6 w-full order-1 lg:order-2">
						<div className="px-6 pt-4 pb-1 rounded-lg shadow-lg border">
							<h1 className="text-center text-xl font-semibold text-gray-700 pb-4">
								Order Summary
							</h1>
							{cartDetails &&
								cartDetails.services.map((s) => (
									<div
										className="w-full my-2 flex items-center justify-between"
										key={s._id}
									>
										<p className="text-gray-600">{s.title}</p>
										<p className="text-gray-600">₹{s.price}</p>
									</div>
								))}
							<hr className="mt-4" />
							<div className="w-full my-3 flex items-center justify-between">
								<p className="text-gray-600">Total Items:</p>
								<p className="text-gray-600">
									{cartDetails?.services.length}
								</p>
							</div>
							<div className="w-full my-3 flex items-center justify-between">
								<p className="text-gray-500 font-bold text-lg">
									Grand Total:
								</p>
								<p className="text-gray-500 font-bold text-lg">
									₹
									{cartDetails &&
										cartDetails.services.reduce((a, currentVal) => {
											return a + currentVal.price;
										}, 0)}
								</p>
							</div>
							<hr className="mt-4 mb-4" />
							<div className="my-2">
								<p className="mb-1">Timestamp</p>
								<DropDown
									options={["Morning", "Noon", "Evening"]}
									placeholder="Timestamp"
									selectedValue={timestamp}
									change={(value) => setTimestamp(value)}
								/>
								<p className="mt-3 mb-1">Date</p>
								<Input
									type="date"
									value={bookingDate}
									onChange={(e) => setBookingDate(e.target.value)}
								/>
								<p className="mt-2 mb-1">Address: </p>
								<Input
									value={address}
									onChange={(e) => setAddress(e.target.value)}
								/>
								<p className="mb-1">Remarks: </p>
								<Input
									value={remarks}
									onChange={(e) => setRemarks(e.target.value)}
								/>
							</div>
							<ElevatedButton
								title="Checkout"
								className="shadow-none"
								click={checkDisabled() ? () => {} : postOrder}
								disabled={checkDisabled()}
							/>
						</div>
					</div>
				</div>
			</Container>
		</div>
	);
}

export default ProtectedRoute(Cart);
