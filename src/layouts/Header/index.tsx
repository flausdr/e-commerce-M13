import Navigation from "./Navigation";

import styles from '@/shared/styles/Home.module.css'

const Header = () => {
    return (
        <header className={`${styles.container} py-4`}>
            <div className="flex justify-between items-center">
                <h1 className="text-5xl font-bold">M13</h1>
                <Navigation />
            </div>
        </header>
    )
}

export default Header;