

const Button = () => {
    return (
        <div>
             <button class="btn relative inline-flex items-center justify-start overflow-hidden font-medium transition-all bg-orange border-2 text-white-500 border-white  hover:bg-white group py-[13px] px-[30px] cursor-pointer">
                <span class="w-56 h-48  bg-orange absolute bottom-0 left-0 translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                <span class="relative w-full text-left text-white font-poppins font-semibold transition-colors duration-300 ease-in-out group-hover:text-white">
                  Contact
                </span>
              </button>
        </div>
    );
};

export default Button;