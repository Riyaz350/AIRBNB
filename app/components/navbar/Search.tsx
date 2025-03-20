'use client'
const Search = () => {
    return (
        <div className='border-[1px] rounded-full shadow-sm w-full cursor-pointer hover:shadow-md md:w-auto py-2 transition'>
            <div className='flex flex-row justify-between items-center'>
                <div className="text-sm font-semibold px-6">
                    Anywhere
                </div>
                <div className="flex-1 border-x-[1px] text-center text-sm font-semibold hidden px-6 sm:block">
                    Any Week
                </div>

            </div>
        </div>
    );
};

export default Search;