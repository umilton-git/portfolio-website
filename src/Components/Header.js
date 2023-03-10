import { GiConsoleController } from "react-icons/gi";
import { IoMdHome } from "react-icons/io";

const Header = () => {
    return (
        <div className="fixed top-0 h-24 w-screen m-0 flex flex-row justify-center bg-black text-white">
            <HeaderIcon icon={<IoMdHome size="28"/>} />
            <a href="https://github.com/umilton-git" className="header-icon">GitHub</a>
            <a href="https://www.linkedin.com/in/ulysses-milton/" className="header-icon">LinkedIn</a>
            <HeaderIcon icon={<GiConsoleController size="28"/>} />
        </div>
    );
};

const HeaderIcon = ({ icon }) => (
    <div className="header-icon">
        {icon}
    </div>
);


export default Header;