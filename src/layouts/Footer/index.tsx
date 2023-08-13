import Link from "next/link";

import Social from "../Social";

import styles from "@/shared/styles/Home.module.css";

const Footer = () => {
    return (
        <footer className={styles.container}>
            <div className="flex justify-between items-center">
                <h1 className="text-3xl font-bold">M13</h1>

                <div className="flex justify-between gap-14">
                    <ul className="nav flex gap-4 ">
                        <Link href="/support-center" className="nav__btn">Support Center</Link>
                        <Link href="/contract" className="nav__btn">Contract</Link>
                        <Link href="/blog" className="nav__btn">Blog</Link>
                        <Link href="/faqs" className="nav__btn">FAQs</Link>
                    </ul>
                    <Social />
                </div>
            </div>
            <h6 className="text-center mt-6 text-sm">
                Copyright © {new Date().getFullYear()} Rychkov M13. All Rights Reserved
            </h6>
        </footer>
    )
}

export default Footer;