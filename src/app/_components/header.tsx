import Link from "next/link";

const Header = () => {
  return (
    <header className="container flex items-center justify-between mx-auto px-5 py-4">
      <Link href="/">
        <p className="text-2xl font-bold">
          CN<span className="text-5xl text-blue-600">.</span>
        </p>
      </Link>
      <nav>
        <ul className="flex space-x-4">
          <li>
            <Link href="/blog" className="hover:underline">
              Blog
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
