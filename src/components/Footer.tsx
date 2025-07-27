import { FaFacebookF, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";
import logo from "../assets/icons/SHOP.CO.svg";
import applepay from "../assets/images/applepay.svg";
import googlepay from "../assets/images/googlepay.svg";
import mastercard from "../assets/images/mastercard.svg";
import paypal from "../assets/images/paypal.svg";
import visa from "../assets/images/visa.svg";
import List from "./home/List";

const Footer = () => {
    return (
        <section className="w-full h-[500px] bg-[#F0F0F0] mt-[-90px] pt-[140px]">
            <div className="my-container h-fit flex justify-between">
                <div className="w-[248px]">
                    <img src={logo} alt="logo" />
                    <p className="text-[#00000099] text-sm mt-[26px] mb-[36px]">
                        We have clothes that suits your style and which you’re
                        proud to wear. From women to men.
                    </p>
                    <div className="flex gap-3">
                        <button className="w-7 h-7 flex items-center justify-center rounded-full bg-white border transition-all duration-300 hover:bg-black hover:text-white">
                            <FaTwitter />
                        </button>
                        <button className="w-7 h-7 flex items-center justify-center rounded-full bg-white border transition-all duration-300 hover:bg-black hover:text-white">
                            <FaFacebookF />
                        </button>
                        <button className="w-7 h-7 flex items-center justify-center rounded-full bg-white border transition-all duration-300 hover:bg-black hover:text-white">
                            <FaInstagram />
                        </button>
                        <button className="w-7 h-7 flex items-center justify-center rounded-full bg-white border transition-all duration-300 hover:bg-black hover:text-white">
                            <FaGithub />
                        </button>
                    </div>
                </div>
                <List
                    text="COMPANY"
                    links={["About", "Features", "Works", "Career"]}
                />
                <List
                    text="HELP"
                    links={[
                        "Customer Support",
                        "Delivery Details",
                        "Terms & Conditions",
                        "Privacy Policy",
                    ]}
                />
                <List
                    text="FAQ"
                    links={[
                        "Account",
                        "Manage Deliveries",
                        "Orders",
                        "Payments",
                    ]}
                />
                <List
                    text="RESOURCES"
                    links={[
                        "Free eBooks",
                        "Development Tutorial",
                        "How to - Blog",
                        "Youtube Playlist",
                    ]}
                />
            </div>
            <hr className="my-container border !mt-[50px] !mb-[20px]" />
            <div className="my-container flex items-center justify-between">
                <p className="text-[#00000099]">
                    Shop.co © 2000-2023, All Rights Reserved
                </p>
                <div className="h-[30px] w-fit flex gap-3">
                    <div className="w-[47px] h-[30px] rounded-[6px] border bg-white flex justify-center items-center cursor-pointer">
                        <img src={visa} alt="visa" />
                    </div>
                    <div className="w-[47px] h-[30px] rounded-[6px] border bg-white flex justify-center items-center cursor-pointer">
                        <img src={mastercard} alt="mastercard" />
                    </div>
                    <div className="w-[47px] h-[30px] rounded-[6px] border bg-white flex justify-center items-center cursor-pointer">
                        <img src={paypal} alt="paypal" />
                    </div>
                    <div className="w-[47px] h-[30px] rounded-[6px] border bg-white flex justify-center items-center cursor-pointer">
                        <img src={applepay} alt="applepay" />
                    </div>
                    <div className="w-[47px] h-[30px] rounded-[6px] border bg-white flex justify-center items-center cursor-pointer">
                        <img src={googlepay} alt="googlepay" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Footer;
