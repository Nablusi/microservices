
"use client"
import React from "react";
import Link from "next/link";
import Image from 'next/image';
import logo from "../../../public/images/logo.png"
import * as styles from './styleNav';
import { useState } from "react";
import { Menu } from 'lucide-react';
import { useMediaQuery } from 'react-responsive'
import SignInContainer from "./sharedComponents/SignInContainer";
import SearchContainer from "./sharedComponents/SearchContainer";



const Navbar: React.FC = () => {
    const [clicked, setClicked] = useState(false);
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 })
    const isMobile = useMediaQuery({ maxWidth: 767 })

    const isClicked = () => {
        setClicked(() => !clicked)
    }

    return (

        isMobile ?
            <styles.Nav>
                <styles.DivForUlAndLink mobile={isMobile} tablet={isTablet} >
                    <div><Menu /></div>
                    <Link href={'/'} > <Image src={logo} alt="Logo" width={60} height={60} /></Link>
                </styles.DivForUlAndLink>
                <SignInContainer />
            </styles.Nav>


            : isTablet ?
                (

                    <styles.Nav>
                        <styles.DivForUlAndLink mobile={isMobile} tablet={isTablet} >
                            <div><Menu /></div>
                            <Link href={'/'} > <Image src={logo} alt="Logo" width={60} height={60} /></Link>
                            <SearchContainer clicked={clicked} isClicked={isClicked} />
                        </styles.DivForUlAndLink>
                        <SignInContainer />
                    </styles.Nav>

                )

                :
                (
                    <div className="container">
                        <styles.Nav>
                            <styles.DivForUlAndLink mobile={isMobile} tablet={isTablet}>
                                <Link href={'/'} > <Image src={logo} alt="Logo" width={60} height={60} /></Link>
                                <styles.Ul>
                                    <styles.HoverText >Food</styles.HoverText>
                                    <styles.HoverText>Offer</styles.HoverText>
                                    <styles.HoverText>Restaurant</styles.HoverText>
                                </styles.Ul>
                                <SearchContainer clicked={clicked} isClicked={isClicked} />
                            </styles.DivForUlAndLink>
                            <SignInContainer />
                        </styles.Nav>
                    </div>

                )


    )
}
export default Navbar;