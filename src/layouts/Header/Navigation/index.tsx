import Link from "next/link";

const Navigation = () => {
    return (
        <div className="flex gap-4 text-xl">
            <Link href="/" className="nav__btn">Home</Link>
            <Link href="/deals" className="nav__btn">Deals</Link>
            <Link href="/catalog" className="nav__btn">Catalog</Link>
            <Link href="/new-arrivals" className="nav__btn">New Arrivals</Link>
            <Link href="/sign-in" className="nav__btn">Sign In</Link>
            <Link href="/sign-up" className="nav__btn">Sign Up</Link>
        </div>
    )
}

export default Navigation;