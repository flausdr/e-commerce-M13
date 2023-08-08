import Link from "next/link";

const Navigation = () => {
    return (
        <ul>
            <Link href="/">Home</Link>
            <Link href="/catalog">Catalog</Link>
            <Link href="/trend">Trend</Link>
            <Link href="/profile">Profile</Link>
            <Link href="/wishlist">Wishlist</Link>
        </ul>
    )
}

export default Navigation;