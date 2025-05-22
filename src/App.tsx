import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import { useLocation } from "react-router-dom";

function App() {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            // behavior: "smooth",
        });

        setTimeout(() => {
            const spinner = document.getElementById("spinner");
            if (spinner && !spinner.hasAttribute("hidden")) {
                spinner.classList.add("fadeOut");
                setTimeout(() => {
                    spinner.setAttribute("hidden", "true");
                }, 1000);
            }
        }, 500);
    }, [pathname]);

    return (
        <main>
            <div className="bg-white text-text lg:text-lg">
                <div className="fixed top-0 left-0 w-full z-50">
                    <Header />
                </div>
                <div className="mt-16 min-h-[calc(100vh-330px)] max-w-screen-2xl m-auto">
                    <Outlet />
                </div>
                <div>
                    <Footer />
                </div>
            </div>
        </main>
    );
}

export default App;
