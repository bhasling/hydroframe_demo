import MailchimpFormContainer from "components/utils/MailchimpFormContainer";

const Footer = () => {
    return (
        <div className="bg-tertiary">
            <div className="max-w-screen-2xl m-auto lg:flex grid gap-10 lg:gap-0 lg:justify-center py-10 lg:py-14 px-4 sm:px-8 lg:px-16 lg:divide-x lg:divide-gray-400">
                <div className="lg:pr-10 w-fit m-auto md:m-0">
                    <div className="items-center gap-x-3">
                        <img
                            className="max-w-none w-full lg:w-auto sm:h-32 lg:h-20 m-auto"
                            src="./images/Logo-Blue-hydroframe.png"
                            alt="HydroFrame Logo"
                        />
                    </div>
                    <div className="text-center">
                        Copyright &copy; HydroFrame {new Date().getFullYear()}.
                    </div>
                </div>
                <div className="lg:pl-20">
                    <MailchimpFormContainer />
                </div>
            </div>
        </div>
    );
};

export default Footer;
