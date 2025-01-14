import React from 'react';
import Navber from '../Shared/Navber';
import { Outlet } from 'react-router-dom';
import { Footer } from 'flowbite-react';
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";


const Main = () => {
    return (
        <div>
           <Navber></Navber>
           <Outlet></Outlet>
           <div className='my-10'>
            <Footer>
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
                            <div>
                              <Footer.Title title="Quick Links" />
                              <Footer.LinkGroup col>
                                <Footer.Link href="#">Home</Footer.Link>
                              </Footer.LinkGroup>
                              <Footer.LinkGroup>
                               <Footer.Link href="#">Trainers</Footer.Link>
                              </Footer.LinkGroup>
                              <Footer.LinkGroup>
                               <Footer.Link href="#">Fitness</Footer.Link>
                              </Footer.LinkGroup>
                            </div>
                            <div>
                              <Footer.Title title="Quick Links" />
                              <Footer.LinkGroup col>
                                <Footer.Link href="#">Community</Footer.Link>
                              </Footer.LinkGroup>
                              <Footer.LinkGroup>
                               <Footer.Link href="#">Classes</Footer.Link>
                              </Footer.LinkGroup>
                              <Footer.LinkGroup>
                                <Footer.Link>Login</Footer.Link>
                            
                              </Footer.LinkGroup>
                            </div>
                            <div>
                              <Footer.Title title="Contact" />
                                <Footer.LinkGroup col>
                                <Footer.Link href="#">o134392203 </Footer.Link> 
                              </Footer.LinkGroup>
                              <Footer.LinkGroup>
                               <Footer.Link href="#">fitness@gmail.com</Footer.Link>
                              </Footer.LinkGroup>
                              <Footer.LinkGroup>
                               <Footer.Link href="#">Chttigraim</Footer.Link>
                              </Footer.LinkGroup>
                            </div>
                          </div>
                        </div>
                        <Footer.Divider className='my-2' />
                        <div className="w-full sm:flex sm:items-center sm:justify-around">
                          <Footer.Copyright href="#" by=" Power Fitness Copyright @ all right reserved ™" year={2025}  />
                          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
                            <Footer.Icon href="#" icon={BsFacebook} />
                            <Footer.Icon href="#" icon={BsInstagram} />
                            <Footer.Icon href="#" icon={BsTwitter} />
                            <Footer.Icon href="#" icon={BsGithub} />
                            <Footer.Icon href="#" icon={BsDribbble} />
                          </div>
                        </div>
                      </div>
            </Footer>
           </div>
           
        </div>
    );
};

export default Main;