import Container from '@/app/Container';
import Logo from './Logo';
import Search from './Search';
import UserMenu from './UserMenu';

const Navbar = () => {
    return (
        <div className='bg-white shadow-sm w-full fixed z-10'>
            <div className='border-b-[1px] py-4'>
            <Container>
                <div className='flex flex-row justify-between gap-3 items-center md:gap-0'>
                    <Logo/>
                    <Search/>
                    <UserMenu/>
                </div>
            </Container>
            </div>
            
        </div>
    );
};

export default Navbar;