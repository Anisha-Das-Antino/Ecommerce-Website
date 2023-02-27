import React, { useState } from "react";
import { FaShoppingCart } from 'react-icons/fa';
import { IoMdNotifications } from 'react-icons/io';
import { Link, Routes, useNavigate } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";

const Nav = () => {

    const [menu, setMenu] = useState(false);
    const showMenu = () => setMenu(!menu);

    const navigate = useNavigate();

    const handleCart = () =>{
        navigate("/cart");
    }

    return (
        
        <nav className="flex min-h-[10vh] py-[20px] px-[80px]  justify-between items-center bg-[#e5195f]  sticky ">

            <div className="text-[1.5rem] font-bold text-white">
                <h1>ANTINO</h1>
            </div>

            <div>

                <form className="search">
                    <input type="text" />
                    <button type="submit">Search</button>
                </form>

            </div>

            <div>
                <ul className="flex justify-between items-center">
                    <li className="py-0 px-[20px] relative ">
                        <Link>
                            <IoMdNotifications />
                        </Link>
                    </li>

                    <li className="py-0 px-[20px] relative ">

                        <div onClick={handleCart}>
                            <FaShoppingCart />
                        </div>
                    </li>
                    <li>
                        <button className="hover:bg-[#948294]" type="submit" onClick={()=>{
                            navigate("/signIn")
                            localStorage.clear()}}>Sign Out</button>
                    </li>
                </ul>

            </div>

            {/* <div>

                <Link>
                    <GiHamburgerMenu />
                </Link>
                <Link>
                    <ImCross onClick={showMenu} />
                </Link>

            </div> */}

        </nav >
    )
}

export default Nav;