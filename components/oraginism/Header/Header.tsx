import Link from "next/link";
import Image from "next/image";
import { Logo } from "../Logo";

export const Header = () => {
  return (
    <header className="bg-white absolute top-0 left-0 z-40 w-full flex items-center">
      
        <div className="flex items-center justify-around relative w-full">
          <div className="px-4 w-96 lg:w-80 max-w-full">
            <Logo />
          </div>
          <div className="flex px-4 justify-between items-center w-full">
            <div>
              <button
                id="navbarToggler"
                className="block absolute right-4 top-1/2 -translate-y-1/2 lg:hidden focus:ring-2 ring-primary px-3 py-[6px] rounded-lg"
              >
                <span className="relative w-[30px] h-[2px] my-[6px] block bg-white"></span>
                <span className="relative w-[30px] h-[2px] my-[6px] block bg-white"></span>
                <span className="relative w-[30px] h-[2px] my-[6px] block bg-white"></span>
              </button>
              <nav
                id="navbarCollapse"
                className="absolute py-5 lg:py-0 lg:px-4 xl:px-6 bg-white lg:bg-transparent shadow-lg rounded-lg max-w-[250px] w-full lg:max-w-full lg:w-full right-4 top-full hidden lg:block lg:static lg:shadow-none"
              >
                <ul className="blcok lg:flex">
                  <li className="relative group">
                    <a
                      href="#home"
                      className="ud-menu-scroll text-base text-dark lg:group-hover:opacity-70 group-hover:text-primary py-2 lg:py-6 lg:inline-flex lg:px-0 flex mx-8 lg:mr-0"
                    >
                      Trang chủ
                    </a>
                  </li>
                  <li className="relative group">
                    <a
                      href="#about"
                      className="ud-menu-scroll text-base text-dark lg:group-hover:opacity-70 group-hover:text-primary py-2 lg:py-6 lg:inline-flex lg:px-0 flex mx-8 lg:mr-0 lg:ml-7 xl:ml-12"
                    >
                      Giới thiệu
                    </a>
                  </li>

                  <li className="relative group submenu-item">
                    <a                      
                      className="text-base text-dark lg:group-hover:opacity-70 group-hover:text-primary py-2 lg:py-6 lg:inline-flex lg:pl-0 lg:pr-4 flex mx-8 lg:mr-0 lg:ml-8 xl:ml-12 relative after:absolute after:w-2 after:h-2 after:border-b-2 after:border-r-2 after:border-current after:rotate-45 lg:after:right-0 after:right-1 after:top-1/2 after:-translate-y-1/2 after:mt-[-2px]"
                    >
                      Dịch vụ
                    </a>
                    <div className="submenu hidden relative lg:absolute w-[250px] top-full lg:top-[110%] left-0 rounded-sm lg:shadow-lg p-4 lg:block lg:opacity-0 lg:invisible group-hover:opacity-100 lg:group-hover:visible lg:group-hover:top-full bg-white transition-[top] duration-300">
                      <a
                        href="#service"
                        className="block text-sm text-body-color rounded hover:text-primary py-[10px] px-4"
                      >
                        Thiết kế - bảo trì hệ thống camera an ninh
                      </a>
                      <a
                        href="#service"
                        className="block text-sm text-body-color rounded hover:text-primary py-[10px] px-4"
                      >
                        Thiết kế - bảo trì hệ thống mạng
                      </a>
                      <a
                        href="#service"
                        className="block text-sm text-body-color rounded hover:text-primary py-[10px] px-4"
                      >
                        Thiết kế - bảo trì hệ thống điện
                      </a>
                      <a
                        href="#service"
                        className="block text-sm text-body-color rounded hover:text-primary py-[10px] px-4"
                      >
                        Cung cấp thiết bị văn phòng
                      </a>
                    </div>
                  </li>

                  <li className="relative group">
                    <a
                      href="#contact"
                      className="ud-menu-scroll text-base text-dark lg:group-hover:opacity-70 group-hover:text-primary py-2 lg:py-6 lg:inline-flex lg:px-0 flex mx-8 lg:mr-0 lg:ml-7 xl:ml-12"
                    >
                      Liên hệ
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="lg:flex justify-end hidden pr-16 lg:pr-0">
              <a
                href="tel:84389684284"
                className="text-lg font-bold text-primary flex items-center shadow-lg rounded-full hover:opacity-70 py-3 px-7 text-white bg-orange-500 loginBtn"
              >
                <span className="pr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </span>
                84-38-9684284
              </a>

              <a
                href="mailto:info@camninh.com"
                className="text-lg ml-2 font-bold text-primary flex items-center shadow-lg rounded-full hover:opacity-70 py-3 px-7 text-white bg-orange-500 loginBtn"
              >
                <span className="pr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </span>
                info@camninh.vn
              </a>
            </div>
          </div>
        </div>
      
    </header>
  );
};

