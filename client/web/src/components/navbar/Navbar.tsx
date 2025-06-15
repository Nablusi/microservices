
"use client"
import React from "react"
import Link from "next/link";
import { theme } from "@/style/theme";
import Image from 'next/image';
import logo from "../../../public/images/logo.png"
import * as styles from './styleNav';

const Navbar: React.FC = () => {
    return (
        <div className="container">
            <nav style={{ borderBottomLeftRadius: "25px", borderBottomRightRadius: "25px", background: theme.colors.background, padding: "25px", display: "flex", flexDirection: "row", justifyContent:'space-between', alignItems:'center', fontSize:'20px' }}>
                <div style={{ display: "flex", flexDirection: "row", textDecoration: 'none', gap:'40px', alignItems:'center'}}>
                    <Link href={'/'} > <Image src={logo} alt="Logo" width={60} height={60} /></Link>
                    <ul style={{ display: "flex", flexDirection: "row", textDecoration: 'none', listStyle: 'none', gap:'15px' }}>
                        <styles.HoverText>Food</styles.HoverText>
                        <styles.HoverText>Offer</styles.HoverText>
                        <styles.HoverText>Restaurant</styles.HoverText>
                    </ul>
                </div>
                <div>
                    <input type="text"  />
                </div>
                <div>
                    icons
                </div>
            </nav>
        </div>
    )
}
export default Navbar;