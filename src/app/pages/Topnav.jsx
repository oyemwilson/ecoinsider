'use client'
import { Disclosure, DisclosureButton, DisclosurePanel, Transition } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { useState, useEffect } from 'react';

const navigation = [
    { name: 'Home', href: '#', current: true },
    { name: 'About', href: '#', current: false },
    { name: 'Insights', href: '#', current: false },
    { name: 'Contact', href: '#', current: false },
];

function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
}

const Topnav = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    // Handle scroll effect for navbar background
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Handle body scroll when mobile menu is open
    useEffect(() => {
        const handleBodyScroll = (isOpen) => {
            if (isOpen) {
                document.body.classList.add('no-scroll');
            } else {
                document.body.classList.remove('no-scroll');
            }
        };

        return () => {
            document.body.classList.remove('no-scroll'); // Cleanup on unmount
        };
    }, []);

    return (
        <Disclosure

        >
            {({ open }) => (
                <nav className={`fixed top-0 left-0  w-full z-00 transition-all duration-300 ${open || isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
                    }`} style={{ zIndex: 9999 }}>
                    <div className=" mx-auto w-full px-2 sm:px-6  lg:px-8 lg:w-[80%] xl:w-[70%]  ">
                        <div className="relative flex h-16 items-center   justify-between">
                            {/* Mobile menu button */}
                            <div className="absolute inset-y-0 right-0 flex items-center md:hidden">
                                <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                    <span className="sr-only">Open main menu</span>
                                    <Bars3Icon aria-hidden="true" className="block size-6 group-data-[open]:hidden" />
                                    <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-[open]:block" />
                                </DisclosureButton>
                            </div>

                            {/* Logo and navigation */}
                            <div className="flex flex-1 items-center">
                                {/* Logo */}
                                <div className="flex items-center">
                                    <img
                                        alt="Your Company"
                                        src="/assets/images/ecologo.png"
                                        className="h-auto ml-2  sm-w-[250px] w-[120px]"
                                    />
                                </div>

                                {/* Navigation links */}
                                <div className="hidden md:flex items-center space-x-6 text-[#286167] ml-auto">
                                    {navigation.map((item) => (
                                        <a
                                            key={item.name}
                                            href={item.href}
                                            aria-current={item.current ? 'page' : undefined}
                                            className={classNames(
                                                item.current ? 'text-0' : 'hover:text-blue-900',
                                                'rounded-md px-3 py-2 text-md font-medium'
                                            )}
                                        >
                                            {item.name}
                                        </a>
                                    ))}
                                </div>
                            </div>


                            {/* Desktop buttons */}
                            <div className="hidden md:flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                                <button
                                    type="button"
                                    className="relative text-green-700 px-3 py-2 hover:text-white"
                                >
                                    <span className="sr-only">View notifications</span>
                                    <a href="#" style={{ color: '#286167' }}>Subscribe</a>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Mobile menu */}
                    <Transition
                        enter="transition ease-out duration-200"
                        enterFrom="opacity-0 -translate-y-1"
                        enterTo="opacity-100 translate-y-0"
                        leave="transition ease-in duration-150"
                        leaveFrom="opacity-100 translate-y-0"
                        leaveTo="opacity-0 -translate-y-1"
                        beforeEnter={() => {
                            // Prevent body scrolling when menu opens
                            document.body.style.overflow = 'hidden';
                        }}
                        afterLeave={() => {
                            // Restore body scrolling when menu closes
                            document.body.style.overflow = 'unset';
                        }}
                    >
                        <DisclosurePanel className="md:hidden fixed top-16 overflow-hidden left-0 w-full bg-white z-50 h-[50vh]" >
                            <div className="space-y-10 fixe text-center px-2 pb-3 pt-2 overflow-y-auto max-h-[calc(100vh-200px)]" >
                                {navigation.map((item) => (
                                    <DisclosureButton
                                        key={item.name}
                                        as="a"
                                        href={item.href}
                                        aria-current={item.current ? 'page' : undefined}
                                        className={classNames(
                                            item.current ? ' text-black ' : 'text-black hover:bg-gray-700 hover:text-white',
                                            'block rounded-md px-3 py-2 text-base font-medium',
                                        )}
                                    >
                                        {item.name}
                                    </DisclosureButton>
                                ))}
                            </div>
                            <div className="flex flex-col bottom-20 absolute w-full items-center px-2 pb-3">
                                <button
                                    type="button"
                                    className="relative rounded bg-[#286167] px-3 py-2 text-white hover:text-white w-full text-center"
                                >
                                    <span className="sr-only">View notifications</span>
                                    <a href="#">Subscribe</a>
                                </button>
                            </div>
                        </DisclosurePanel>
                    </Transition>
                </nav>
            )}
        </Disclosure>
    );
};

export default Topnav;