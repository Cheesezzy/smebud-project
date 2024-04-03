import smebud from '../../assets/images/imageSvg/Smebud.svg';
import { Link } from 'react-router-dom';
import menu from '../../assets/images/imageSvg/menu.svg';
import arrowDown from '../../assets/images/imageSvg/arrowDown.svg';
import { useState } from 'react';
import { Menu, Popover } from '@headlessui/react';

const NavBar = () => {
  const links = [
    {
      name: 'Browse',
      link: '/',
      children: [
        {
          name: 'Financing',
          link: ''
        },
        {
          name: 'Legal',
          link: ''
        },
        {
          name: 'Broker',
          link: ''
        }
      ]
    },
    { name: 'AboutUs', link: '/' },
    {
      name: 'Services',
      link: '/',
      children: [
        {
          name: 'Financing',
          link: ''
        },
        {
          name: 'Legal',
          link: ''
        },
        {
          name: 'Broker',
          link: ''
        }
      ]
    },
    { name: 'Pricing', link: '/' },
    { name: 'Blog', link: '/' }
  ];

  const [open, setOpen] = useState(false);

  return (
    <nav className="shadow-md bg-brand-primary w-full sticky top-0 left-0 z-10">
      <div className="max-w-[1440px] mx-auto flex items-center justify-between h-fit py-4 px-4 md:px-10 xl:px-24">
        <Link to="/" className="flex items-center min-w-[104px]">
          <img
            src={smebud}
            alt="logo"
            className="w-full"
            style={{ color: 'white' }}
          />
        </Link>

        <ul
          className={`hidden lg:flex md:items-center md:pb-0 pb-12 absolute md:static bg-[#3A56CD] md:z-auto z-[-1]
        left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in gap-1 ${
          open ? 'top-10 opacity-100' : 'top-[-490px]'
        } md:opacity-100 opacity-0`}
        >
          {links.map((link) => (
            <li key={link.name} className="">
              {link.children ? (
                <Menu>
                  {({ open }) => (
                    <div className="relative">
                      <Menu.Button className="flex items-center justify-center gap-[6px]">
                        <span className="text-white">{link.name}</span>
                        <div
                          className={`${
                            open ? 'rotate-180 duration-200 ' : ''
                          } bg-[#5778FF] min-w-4 min-h-4 w-4 h-4 rounded-full grid place-items-center`}
                        >
                          <svg
                            width="10"
                            height="5"
                            viewBox="0 0 10 5"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M5.1834 4.19999C4.84144 4.19999 4.49949 4.06809 4.24057 3.80918L1.05547 0.624075C0.913802 0.482406 0.913802 0.24792 1.05547 0.106252C1.19714 -0.0354172 1.43163 -0.0354172 1.57329 0.106252L4.7584 3.29136C4.99288 3.52584 5.37392 3.52584 5.60841 3.29136L8.79351 0.106252C8.93518 -0.0354172 9.16967 -0.0354172 9.31134 0.106252C9.45301 
0.24792 9.45301 0.482406 9.31134 0.624075L6.12623 3.80918C5.86732 4.06809 5.52536 4.19999 5.1834 4.19999Z"
                              fill="#E6F7EE"
                            />
                          </svg>
                        </div>
                      </Menu.Button>
                      <Menu.Items className="nav__sub__menu absolute bg-white  rounded-lg flex flex-col gap-2 -left-1/2 top-[200%] translate-y-[25px] focus:outline-none">
                        <>
                          {link.children.map((child) => (
                            <Menu.Item key={child.name}>
                              {({ active }) => (
                                <Link
                                  to={child.link}
                                  className={`block py-2 px-14 text-center  font-medium ${
                                    active ? 'text-[#4B6EFF]' : 'text-[#434A5B]'
                                  }`}
                                >
                                  {child.name}
                                </Link>
                              )}
                            </Menu.Item>
                          ))}
                        </>
                      </Menu.Items>
                    </div>
                  )}
                </Menu>
              ) : (
                <Link to={link.link} className="block text-white px-5">
                  {link.name}
                </Link>
              )}
            </li>
          ))}
        </ul>

        <div className="flex gap-6">
          <Link
            to={'/login'}
            className="hidden bg-transparent border-2 px-12 w-fit py-[10px] rounded-lg text-white text-lg sm:block whitespace-nowrap"
          >
            Log In
          </Link>
          <Link
            to={'/signup'}
            className="hidden sm:block px-7 py-[10px] rounded-lg bg-white text-[#3A56CD] text-lg"
          >
            Sign Up
          </Link>

          <Popover>
            {({ open }) => (
              <div className="lg:hidden">
                <Popover.Button className="flex items-center justify-center gap-[6px]">
                  <img src={menu} alt="menu" />
                </Popover.Button>
                <Popover.Panel className="absolute bg-white flex flex-col gap-6 left-0 right-0 top-full focus:outline-none p-6">
                  <>
                    {links.map((link) => (
                      <Popover.Button key={link.name}>
                        <Link
                          to={link.link}
                          className={`py-2 px-14 text-center flex items-center justify-center gap-2 font-medium text-[#434A5B]`}
                        >
                          <span>{link.name}</span>

                          {link?.children && (
                            <div
                              className={`${
                                false ? 'rotate-180 duration-200 ' : ''
                              } bg-[#5778FF] min-w-4 min-h-4 w-4 h-4 rounded-full grid place-items-center`}
                            >
                              <svg
                                width="10"
                                height="5"
                                viewBox="0 0 10 5"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M5.1834 4.19999C4.84144 4.19999 4.49949 4.06809 4.24057 3.80918L1.05547 0.624075C0.913802 0.482406 0.913802 0.24792 1.05547 0.106252C1.19714 -0.0354172 1.43163 -0.0354172 1.57329 0.106252L4.7584 3.29136C4.99288 3.52584 5.37392 3.52584 5.60841 3.29136L8.79351 0.106252C8.93518 -0.0354172 9.16967 -0.0354172 9.31134 0.106252C9.45301 
0.24792 9.45301 0.482406 9.31134 0.624075L6.12623 3.80918C5.86732 4.06809 5.52536 4.19999 5.1834 4.19999Z"
                                  fill="#E6F7EE"
                                />
                              </svg>
                            </div>
                          )}
                        </Link>
                      </Popover.Button>
                    ))}
                    <Link
                      to={'/signup'}
                      className="px-7 py-[10px] rounded-lg w-full text-center bg-[#F1F4FF] text-[#3A56CD] font-bold text-lg"
                    >
                      Sign Up
                    </Link>
                    <Link
                      to={'/login'}
                      className="bg-[#FFFFFF] w-full text-center border border-[#4B6EFF] text-[#3A56CD] font-bold px-12 py-[10px] rounded-lg text-lg whitespace-nowrap"
                    >
                      Log In
                    </Link>
                  </>
                </Popover.Panel>
              </div>
            )}
          </Popover>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
