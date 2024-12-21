import { LuMessageCircleMore } from "react-icons/lu";
import { CgArrowTopRightO } from "react-icons/cg";
import { RiMailSendLine } from "react-icons/ri";
import LinkItem from "./LinkItem";
import {
  FaApple,
  FaWhatsapp,
  FaFacebookF,
  FaInstagram,
  FaGooglePlay,
  FaLinkedinIn,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="relative text-white bg-blue-900 rounded-t-3xl">
      <div className="w-11/12 lg:w-4/5 mx-auto py-4">
        <div className="grid grid-cols-1 gap-y-10 text-center sm:grid-cols-2 sm:text-start lg:grid-cols-4 py-5 mt-5">
          <div>
            <h2 className="text-2xl font-bold pb-2">About Raya</h2>
            <ul className="flex flex-col">
              <LinkItem href="/about">Who we are</LinkItem>
              <LinkItem>Raya Plus</LinkItem>
              <LinkItem>Raya Nigeria</LinkItem>
              <LinkItem>Store Locator</LinkItem>
              <LinkItem>Raya Elite</LinkItem>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-bold pb-2">Customer Support</h2>
            <ul className="flex flex-col">
              <LinkItem>Request/Track Maintenance</LinkItem>
              <LinkItem>FAQs</LinkItem>
              <LinkItem>Live Chat</LinkItem>
              <LinkItem>Contact us</LinkItem>
              <LinkItem>Call 19900</LinkItem>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-bold pb-2">More</h2>
            <ul className="flex flex-col">
              <LinkItem>Installment offers</LinkItem>
              <LinkItem>Terms & Conditions</LinkItem>
              <LinkItem>Taksety Terms & Conditions</LinkItem>
              <LinkItem>Privacy Policy</LinkItem>
            </ul>
          </div>
          <div className="col-span-1 sm:col-span-2 lg:col-span-1">
            <h2 className="text-2xl font-bold pb-2">Stay in the know</h2>
            <div className="flex flex-col">
              <span className="text-xs">Subscribe to our newsletter</span>
              <form className="flex items-center justify-between w-full border-b pt-2">
                <RiMailSendLine size={24} />
                <input
                  type="text"
                  name="email"
                  placeholder="E-mail (ex@gmail.com)"
                  className="bg-transparent py-4 outline-none"
                />
                <button type="submit">
                  <CgArrowTopRightO size={28} />
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-y-10 justify-items-center lg:grid-cols-3 py-5">
          <div className="flex items-center gap-x-5">
            <span className="flex items-center gap-3">
              <FaApple size={20} />
              <span>App Store</span>
            </span>
            <span className="flex items-center gap-3">
              <FaGooglePlay />
              <span>Google Play</span>
            </span>
          </div>
          <div className="flex items-center gap-x-10 order-last lg:order-none">
            <span>
              <FaInstagram size={20} />
            </span>
            <span>
              <FaFacebookF size={18} />
            </span>
            <span>
              <FaLinkedinIn size={18} />
            </span>
            <span>
              <FaWhatsapp size={20} />
            </span>
          </div>
          <div className="flex items-center gap-x-8">
            <span>Visa</span>
            <span>Mastercard</span>
            <span>Valu</span>
          </div>
        </div>
      </div>
      <div className="absolute -top-6 right-16">
        <div className="bg-blue-600 rounded-full p-3">
          <LuMessageCircleMore size={32} />
        </div>
      </div>
      <div className="text-center text-sm py-4 bg-blue-950">
        © 2024 - Raya Shop | All Rights Reserved
      </div>
    </footer>
  );
}

export default Footer;
