import React, { Fragment, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import {
    Bars3Icon,
    ChevronDownIcon,
    XMarkIcon,
} from "@heroicons/react/24/outline";

function classNames(...classes: any) {
    return classes.filter(Boolean).join(" ");
}

function Header() {
    const location = useLocation();
    const [activeMenu, setActiveMenu] = useState<string>("");

    const navigation = [
        {
            name: "About",
            href: "",
            current: false,
            subMenu: [
                { name: "About Us", href: "/about-us" },
                { name: "Our Team", href: "/our-team" },
            ],
        },
        {
            name: "Applications",
            href: "",
            current: false,
            subMenu: [{ name: "HydroGEN", href: "/hydrogen" }],
        },
        {
            name: "Data and Simulations",
            href: "",
            current: false,
            subMenu: [
                { name: "HydroData", href: "/hydrodata" },
                { name: "ParFlow CONUS1.0", href: "/parflow-conus1" },
                { name: "ParFlow CONUS2.0", href: "/parflow-conus2" },
            ],
        },
        {
            name: "Modeling Tools",
            href: "",
            current: false,
            subMenu: [
                {
                    name: "SubsetTools",
                    href: "/subsettools",
                },
                { name: "ParFlow Resources", href: "/parflow-resources" },
            ],
        },
        {
            name: "Educational Tools",
            href: "/team",
            current: false,
            subMenu: [
                {
                    name: "ParFlow SandTank Model",
                    href: "/parflow-sandtank-model",
                },
                { name: "SandTank ML", href: "/sandtank-ml" },
                {
                    name: "Other Tools and Partners",
                    href: "/other-tools-and-partners",
                },
                { name: "Short Courses", href: "/short-courses" },
            ],
        },
    ];

    return (
        <>
            <Disclosure as="nav" className="bg-primary">
                {({ open }) => (
                    <>
                        <div className="mx-auto px-2 sm:px-8 lg:px-24 max-w-screen-2xl m-auto">
                            <div className="relative flex h-16 items-center justify-between">
                                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                    {/* Mobile menu button*/}
                                    <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                        <span className="absolute -inset-0.5" />
                                        <span className="sr-only">
                                            Open main menu
                                        </span>
                                        {open ? (
                                            <XMarkIcon
                                                className="block h-6 w-6 text-white"
                                                aria-hidden="true"
                                            />
                                        ) : (
                                            <Bars3Icon
                                                className="block h-6 w-6 text-white"
                                                aria-hidden="true"
                                            />
                                        )}
                                    </Disclosure.Button>
                                </div>
                                <div className="flex flex-auto items-center justify-center sm:items-stretch sm:justify-between">
                                    <div className="flex flex-shrink-0 items-center">
                                        <Link to="/">
                                            <img
                                                className="h-14 w-auto"
                                                src="./images/Logo-White-hydroframe.png"
                                                alt="HydroFrame"
                                            />
                                        </Link>
                                    </div>
                                    {/* medium and large screen menus */}
                                    <div className="hidden sm:ml-6 sm:block">
                                        <div className="flex space-x-8 justify-end items-center h-[64px]">
                                            {navigation.map(
                                                (item, index: number) => (
                                                    <Menu
                                                        key={"main" + index}
                                                        as="div"
                                                        className="relative mr-3"
                                                    >
                                                        <div>
                                                            <Menu.Button
                                                                id={
                                                                    "button_" +
                                                                    index
                                                                }
                                                                className="hidden sm:block text-white hover:text-sky-200 focus:text-sky-200 active:text-sky-200 h-[64px] font-medium"
                                                            >
                                                                {item.name}
                                                            </Menu.Button>
                                                        </div>
                                                        <Transition
                                                            as={Fragment}
                                                            enter="transition ease-out duration-100"
                                                            enterFrom="transform opacity-0 scale-95"
                                                            enterTo="transform opacity-100 scale-100"
                                                            leave="transition ease-in duration-75"
                                                            leaveFrom="transform opacity-100 scale-100"
                                                            leaveTo="transform opacity-0 scale-95"
                                                        >
                                                            <Menu.Items
                                                                className={classNames(
                                                                    "absolute",
                                                                    "left-0",
                                                                    "mt-0",
                                                                    "w-52",
                                                                    "origin-top-right",
                                                                    "rounded-none",
                                                                    "bg-white",
                                                                    "py-2",
                                                                    "shadow-lg",
                                                                    "ring-1",
                                                                    "ring-black",
                                                                    "ring-opacity-5",
                                                                    "focus:outline-none"
                                                                )}
                                                            >
                                                                {item.subMenu.map(
                                                                    (
                                                                        subItem,
                                                                        i: number
                                                                    ) => (
                                                                        <Menu.Item
                                                                            key={
                                                                                "sub_" +
                                                                                i
                                                                            }
                                                                        >
                                                                            {({
                                                                                active,
                                                                            }) => (
                                                                                <Link
                                                                                    to={
                                                                                        subItem.href
                                                                                    }
                                                                                    className={classNames(
                                                                                        active
                                                                                            ? "bg-gray-100"
                                                                                            : "",
                                                                                        "block px-4 py-2"
                                                                                    )}
                                                                                >
                                                                                    {
                                                                                        subItem.name
                                                                                    }
                                                                                </Link>
                                                                            )}
                                                                        </Menu.Item>
                                                                    )
                                                                )}
                                                            </Menu.Items>
                                                        </Transition>
                                                    </Menu>
                                                )
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Small screen menu */}
                        <Disclosure.Panel className="sm:hidden">
                            <Menu>
                                <div className="space-y-1 px-2 pb-3 pt-2">
                                    {navigation.map(item => (
                                        <React.Fragment key={item.name}>
                                            <div
                                                className={classNames(
                                                    item.href ===
                                                        location.pathname
                                                        ? "text-sky-200"
                                                        : "text-white hover:text-sky-200 active: hover:text-sky-200",
                                                    " font-medium flex justify-between rounded-md px-3 py-2"
                                                )}
                                                onClick={() =>
                                                    setActiveMenu(item.name)
                                                }
                                                aria-current={
                                                    item.current
                                                        ? "page"
                                                        : undefined
                                                }
                                            >
                                                <Menu.Button>
                                                    {item.name}
                                                </Menu.Button>
                                                <ChevronDownIcon className="w-4 h-4" />
                                            </div>
                                            {activeMenu === item.name && (
                                                <>
                                                    {item.subMenu.map(
                                                        subItem => (
                                                            <Disclosure.Button
                                                                key={
                                                                    subItem.name
                                                                }
                                                                as="a"
                                                                href={
                                                                    subItem.href
                                                                }
                                                                className={classNames(
                                                                    subItem.href ===
                                                                        location.pathname
                                                                        ? "text-sky-200"
                                                                        : "text-white hover:text-sky-200",
                                                                    "ml-5 rounded-md px-3 py-2 items-center flex gap-x-2"
                                                                )}
                                                            >
                                                                <span className="rounded-full !w-2 bg-white h-2 leading-none inline-block">
                                                                    &nbsp;
                                                                </span>
                                                                <span>
                                                                    {
                                                                        subItem.name
                                                                    }
                                                                </span>
                                                            </Disclosure.Button>
                                                        )
                                                    )}
                                                </>
                                            )}
                                        </React.Fragment>
                                    ))}
                                </div>
                            </Menu>
                        </Disclosure.Panel>
                    </>
                )}
            </Disclosure>
        </>
    );
}

export default Header;
