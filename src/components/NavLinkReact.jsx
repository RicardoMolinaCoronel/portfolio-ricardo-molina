
const NavLink = ({ href, children }) => {
    return (
        <a href={href} className="hover:overline hover:scale-110 hover:font-bold hover:text-blue-300 transition-all duration-200">
            {children}
        </a>
    );
};

export default NavLink;