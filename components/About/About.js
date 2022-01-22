import Heading from "../Commons/Section_heading";
import LinkButton from "../Commons/Link_button.js";
import { BsArrowRightShort } from "react-icons/bs";
import Container from "../Commons/Container";
import {useRouter} from 'next/router'

export default function About() {
	const router = useRouter()
  return (
    <div className="my-10 md:my-16 lg:my-20 xl:w-5/6 mx-auto">
      <Container>
        <Heading title="About" />
        {/* <img */}
        {/* 	src="/images/aboutus.png" */}
        {/* 	alt="about us image" */}
        {/* 	className="w-1/4 mx-auto" */}
        {/* /> */}
        <div className="mx-auto my-8">
          <p className="text-justify md:text-center">
            Wefixit Electricals is North Bihar’s largest online home services
            platform. Launched in 2019, Wefixit Electricals today operates in
            Muzaffarpur, Dharbhanga Sitamadhi The platform helps customers book
            reliable & high quality services – Home Appliances, Plumber,
            Electrician, House Building Materials , Sell New and Refurbish Home
            appliances etc. – delivered by trained professionals conveniently at
            home. Wefixit Electricals vision is to empower thousand of
            professionals Bihar to deliver services at home like never
            experienced before.
          </p>
          <LinkButton
            title="learn more"
            className="w-max mx-auto my-5 "
            Icon2={<BsArrowRightShort />}
			click={() => router.push('/about')}
          />
        </div>
      </Container>
    </div>
  );
}
