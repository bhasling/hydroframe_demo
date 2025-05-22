import { Link } from "react-router-dom";

const NotFound: React.FC = () => {
    return (
        <>
            <div className="flex flex-col md:flex-row md:flex place-content-center gap-5 lg:gap-x-10 mt-10">
                <div className="text-center">
                    <div className="px-4 sm:px-8 lg:px-36 grid gap-10 lg:gap-12 py-10">
                        <div className="text-3xl lg:text-5xl font-bold break-words w-full !sticky !top-20">
                            <b>Whoops!</b> Page Not Found
                        </div>
                    </div>
                    <Link
                        to="/"
                        className="inline-block font-medium px-8 py-4 lg:px-4 lg:py-4 sm:px-8 sm:py-2 bg-primary w-80 text-white uppercase transition-colors hover:bg-secondaryHover"
                        type="submit"
                    >
                        Let's get you back home
                    </Link>
                </div>
            </div>
        </>
    );
};

export default NotFound;
