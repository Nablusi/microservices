import React from "react";
import Link from "next/link";
import * as styles from "../styleNav";
import { User } from 'lucide-react';


const SignInContainer: React.FC = () => {
    return (
        <Link href="/signin" >
            <styles.LinkSignIn>
                <User />
            </styles.LinkSignIn>
        </Link>
    )
}


export default SignInContainer