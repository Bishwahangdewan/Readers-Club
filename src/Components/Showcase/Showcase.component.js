import React from 'react';

import FormInput from '../FormInput/FormInput.component';
import CustomButton from '../CustomButton/CustomButton.component';

const Showcase = () => {
    return (
        <div className="flex">

            {/*-----------SHOWCASE-CONTENT-------------*/}
            <div className='pl-10'>
                <h1 className="text-7xl font-serif w-60 pt-40 leading-normal">New & Trending</h1>
                <p className="pl-3 pt-5">Latest and Trending Books for you</p>

                <form>
                    <FormInput type="text" placeholder="Search Books" height="40" width="350" mt="30" radius="5" outline="none" pl="20" />

                    <CustomButton bgcolor="d6a965" px="20" py="8" radius="5" color="white" ml="10">Search</CustomButton>
                </form>
            </div>

        </div>
    )
}

export default Showcase;