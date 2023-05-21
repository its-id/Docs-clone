import { Fragment, useState } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import docsIcon from "../../assets/docs.png";
import userIcon from "../../assets/user-icon.png";

const user = {
  name: "Indrakant Dana",
  email: "ik.dana24@gmail.com",
};

const navigation = ["File", "Edit", "View", "Insert", "Format", "Tools", "Extensions", "Help"];

const userNavigation = [
  { name: "Your Profile", href: "#" },
  { name: "Settings", href: "#" },
  { name: "Sign out", href: "#" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Navbar = () => {
  const [docName, setDocName] = useState("Untitled Document");

  return (
    <Disclosure as="nav">
      {({ open }) => (
        <>
          <div className="mx-auto px-4 sm:px-6 lg:px-3">
            <div className="flex h-16 justify-between items-center mt-1">
              <div className="flex md:items-center">
                <div className="-ml-2 mr-2 flex items-center md:hidden">
                  {/* Mobile menu button */}
                  <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? <XMarkIcon className="block h-6 w-6" aria-hidden="true" /> : <Bars3Icon className="block h-6 w-6" aria-hidden="true" />}
                  </Disclosure.Button>
                </div>
                <div className="flex flex-shrink-0 items-center">
                  <img className="block h-10 w-auto lg:hidden" src={docsIcon} alt="Your Company" />
                  <img className="hidden h-10 w-auto lg:block" src={docsIcon} alt="Your Company" />
                </div>
                <div className="hidden md:flex md:flex-col md:items-baseline md:space-x-2">
                  <div className="flex items-center space-x-2">
                    <input
                      type="text"
                      name="docName"
                      id="docName"
                      className="w-auto rounded-md border-0 hover:border-gray-500 hover:ring-gray-500 text-lg mx-0 py-0 px-2.5"
                      defaultValue={docName}
                      onChange={(e) => setDocName(e.target.value)}
                    />
                    <span class="material-symbols-outlined text-lg font-medium px-1 rounded-full cursor-pointer hover:bg-gray-100">star</span>
                    <span class="material-symbols-outlined text-lg font-medium px-1 rounded-full cursor-pointer hover:bg-gray-100">
                      drive_file_move
                    </span>
                    <span class="material-symbols-outlined text-lg font-medium px-1 rounded-full cursor-pointer hover:bg-gray-100">cloud_done</span>
                  </div>

                  <div className="flex flex-row mt-1 ml-0">
                    {navigation.map((item, idx) => (
                      <button type="button" key={idx} className="px-2.5 text-sm font-normal rounded hover:bg-gray-100">
                        {item}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex items-center">
                <div className="flex-shrink-0 flex items-center md:space-x-2">
                  <span class="material-symbols-outlined text-base md:text-2xl font-medium px-2 py-1 rounded-full cursor-pointer text-gray-600 hover:bg-gray-100">
                    history
                  </span>
                  <span class="material-symbols-outlined text-base md:text-2xl font-medium px-2 py-1 rounded-full cursor-pointer text-gray-600 hover:bg-gray-100">
                    comment
                  </span>
                  <button type="button" className="flex space-x-2 items-center px-2.5 py-1 font-medium rounded-full hover:bg-gray-100 ">
                    <span class="material-symbols-outlined text-base md:text-2xl text-gray-600 ">videocam</span>
                    <span class="material-symbols-outlined text-base md:text-2xl text-gray-600 ">arrow_drop_down</span>
                  </button>
                  <button
                    type="button"
                    className="flex items-center md:space-x-2 rounded-full bg-[#c2e7ff] hover:bg-sky-200 px-5 py-1 font-medium hover:shadow-lg focus:ring-offset-2 focus:ring-offset-gray-800"
                  >
                    <span className="material-symbols-outlined text-base md:text-xl text-gray-800">group</span>
                    <span className="text-sm text-gray-800 hidden md:inline">Share</span>
                  </button>
                </div>
                <div className="hidden md:ml-2 md:flex md:flex-shrink-0">
                  {/* Profile dropdown */}
                  <Menu as="div" className="relative ml-3">
                    <div>
                      <Menu.Button className="flex rounded-full text-sm focus:ring-2 focus:ring-white focus:ring-offset-3 focus:ring-offset-gray-600">
                        <span className="sr-only">Open user menu</span>
                        <img className="h-8 w-8 rounded-full" src={userIcon} alt="" />
                      </Menu.Button>
                    </div>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        {userNavigation.map((item, idx) => (
                          <Menu.Item key={idx}>
                            {({ active }) => (
                              <a href={item.href} className={classNames(active ? "bg-gray-100" : "", "block px-4 py-2 text-sm text-gray-700")}>
                                {item.name}
                              </a>
                            )}
                          </Menu.Item>
                        ))}
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="md:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3 sm:px-3">
              <div className="flex items-center">
                <input
                  type="text"
                  name="docName"
                  id="docName"
                  className="w-auto rounded-md border-0 hover:border-gray-500 hover:ring-gray-500 text-lg mx-0 py-0 px-2.5"
                  defaultValue={docName}
                  onChange={(e) => setDocName(e.target.value)}
                />
                <span class="material-symbols-outlined text-sm font-medium px-1 rounded-full cursor-pointer hover:bg-gray-100">star</span>
                <span class="material-symbols-outlined text-sm font-medium px-1 rounded-full cursor-pointer hover:bg-gray-100">drive_file_move</span>
                <span class="material-symbols-outlined text-lg font-medium px-1 rounded-full cursor-pointer hover:bg-gray-100">cloud_done</span>
              </div>
              <div className="flex flex-wrap items-center">
                {navigation.map((item, idx) => (
                  <button type="button" key={idx} className="px-2.5 mb-2 text-sm font-normal rounded hover:bg-gray-100">
                    {item}
                  </button>
                ))}
              </div>
            </div>
            <div className="border-t border-gray-700 pt-4 pb-3">
              <div className="flex items-center px-5 sm:px-6">
                <div className="flex-shrink-0">
                  <img className="h-10 w-10 rounded-full" src={userIcon} alt="" />
                </div>
                <div className="ml-3">
                  <div className="text-base">{user.name}</div>
                  <div className="text-sm text-gray-600">{user.email}</div>
                </div>
              </div>
              <div className="mt-3 px-2 sm:px-3">
                {userNavigation.map((item, idx) => (
                  <Disclosure.Button
                    key={idx}
                    as="a"
                    href={item.href}
                    className="block rounded-md px-3 py-1 text-gray-400 hover:bg-gray-700 hover:text-gray-800"
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Navbar;
