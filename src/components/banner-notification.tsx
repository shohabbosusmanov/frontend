interface Props {
    discount: number;
}

import { useState } from "react";
import { Link } from "react-router-dom";
import CloseSvg from "../assets/icons/close.svg";

const BannerNotification = ({ discount }: Props) => {
    const [close, setClose] = useState<boolean>(false);
    const handleClose = () => {
        setClose(true);
    };
    return (
        <>
            {!close && (
                <div className={`bg-black text-white text-sm py-2.5`}>
                    <div className="my-container">
                        <div className="flex justify-between">
                            <h1 className="mx-auto">
                                Sign up and get {discount}% off to your first
                                order.
                                <Link className="ms-1 underline" to="/sign-up">
                                    Sign Up Now
                                </Link>
                            </h1>
                            <button
                                onClick={handleClose}
                                className="cursor-pointer"
                            >
                                <img src={CloseSvg} alt="close" />
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default BannerNotification;
