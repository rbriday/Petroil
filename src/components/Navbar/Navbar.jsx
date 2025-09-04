import logo from "../../assets/logo.png"
import Container from "../../Layout/Container"

const Navbar = () => {
    return (
        <div className="bg-orange py-[30px]">
           <Container>
             <div className="flex justify-between">
                <div>
                <img src= {logo} alt="#logo" />
            </div>
            <div>
                <ul className="flex items-center space-x-[47px] font-poppins font-semibold text-white ">
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#">About</a>
                    </li>
                    <li>
                        <a href="#">Services</a>
                    </li>
                    <li>
                        <a href="#">Gallery</a>
                    </li>
                    <li>
                        <a href="#">Blog</a>
                    </li>
                    <div>
                    <button className="border-2 py-[13px] px-[30px]">Contact</button>
                </div>
                </ul>
                
            </div>
             </div>
           </Container>
        </div>
    );
};

export default Navbar;