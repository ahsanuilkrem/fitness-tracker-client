import React from 'react';
import Navber from '../Shared/Navber';
import { NavLink, Outlet } from 'react-router-dom';
import { Footer } from 'flowbite-react';
import { BsDiscord, BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";


const Main = () => {
  return (
    <>
      <Navber></Navber>
      <div className='max-w-screen-xl mx-auto'>

        <Outlet></Outlet>
      </div>
      <div className='my-10'>
        <Footer >
          <div className="w-full bg-black text-white p-4 ">
            <div className="grid w-full grid-cols-1 justify-around  md:flex items-center md:grid-cols-1">
              <div>
                <Footer.Brand
                  href="https://flowbite.com"
                  src="https://flowbite.com/docs/images/logo.svg"
                  alt="Flowbite Logo"
                  name="Power Fitness"
                />
              </div>
              <div className="grid grid-cols-1 gap-4  md:gap-14 sm:my-4 md:grid-cols-3 ">
                <div className='text-white'>
                  <Footer.Title title="Quick Links" />
                  <Footer.LinkGroup col>
                    <Footer.Link > <li><NavLink to='/'>Home </NavLink></li></Footer.Link>
                  </Footer.LinkGroup>
                  <Footer.LinkGroup>
                    <Footer.Link >  <li><NavLink to='/allTrainer'>All Trainer </NavLink></li></Footer.Link>
                  </Footer.LinkGroup>
                  <Footer.LinkGroup>
                    <Footer.Link > </Footer.Link>
                  </Footer.LinkGroup>
                </div>
                <div>
                  <Footer.Title title="Quick Links" />
                  <Footer.LinkGroup col>
                    <Footer.Link > <li><NavLink to='/community'>Community </NavLink></li></Footer.Link>
                  </Footer.LinkGroup>
                  <Footer.LinkGroup>
                    <Footer.Link ><li><NavLink to='/allClasses'>All Classes  </NavLink></li></Footer.Link>
                  </Footer.LinkGroup>
                  <Footer.LinkGroup>
                    <Footer.Link>  <NavLink to='login'>
                     login
                    </NavLink></Footer.Link>

                  </Footer.LinkGroup>
                </div>
                <div>
                  <Footer.Title title="Contact" />
                  <Footer.LinkGroup col>
                    <Footer.Link >o1642904811</Footer.Link>
                  </Footer.LinkGroup>
                  <Footer.LinkGroup>
                    <Footer.Link href="#">ahsanulkarim429@gmail.com</Footer.Link>
                  </Footer.LinkGroup>
                  <Footer.LinkGroup>
                    <Footer.Link href="#">Chittagong Bangladesh</Footer.Link>
                  </Footer.LinkGroup>
                </div>
              </div>
            </div>
            <Footer.Divider className='my-2' />
            <div className="w-full sm:flex sm:items-center sm:justify-around">
              <Footer.Copyright href="#" by=" Power Fitness Copyright @ all right reserved ™" year={2025} />
              <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
                <Footer.Icon href="#" icon={BsFacebook} />
                <Footer.Icon href="#" icon={BsInstagram} />
                <Footer.Icon href="#" icon={BsTwitter} />
                <Footer.Icon href="https://github.com/ahsanuilkrem" icon={BsGithub} />
                <Footer.Icon href="#" icon={BsDiscord} />
              </div>
            </div>
          </div>
        </Footer>
      </div>

    </>
  );
};

export default Main;