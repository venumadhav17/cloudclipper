import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Navbar = () => {
  return (
    <div className='flex justify-between'>
      <h1 className='font-bold text-white text-3xl'>CloudClipper</h1>
      <div className='flex space-x-4'>
        <Link
          href='/'
          className='flex space-x-2 items-center bg-white rounded-full px-4 font-normal'
        >
          <FaGithub size={20} />
          <span>GitHub</span>
        </Link>
        <Link
          href='/'
          className='flex space-x-2 items-center bg-white rounded-full font-normal px-4'
        >
          <FaXTwitter size={20} />
          <span>Follow me on Twitter</span>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
