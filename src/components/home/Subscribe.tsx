import mail_icon from "../../assets/icons/mail-icon.svg";

const Subscribe = () => {
    return (
        <section className="my-container h-[180px] flex justify-between items-center relative rounded-[20px] bg-[black] py-[36px] px-[64px]">
            <h1 className="title w-[551px] text-[40px] text-white leading-[45px]">
                STAY UPTO DATE ABOUT OUR LATEST OFFERS
            </h1>
            <div className="flex flex-col gap-[14px]">
                <form
                    action=""
                    className="flex gap-3 items-center w-[348px] rounded-full px-3 py-4 bg-white"
                >
                    <img src={mail_icon} alt="mail_icon" />
                    <input
                        className="text-base outline-none grow leading-[100%]"
                        type="email"
                        placeholder="Enter your email address"
                    />
                </form>
                <button className="bg-white py-4 rounded-full text-base">
                    Subscribe to Newsletter
                </button>
            </div>
        </section>
    );
};

export default Subscribe;
