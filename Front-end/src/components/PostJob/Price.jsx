import React, { useContext, useState } from 'react';
import PostJobContext from '../../context/postJob-context';

const Price = () => {
    const { price, setPrice } = useContext(PostJobContext);

    const handleChangePrice = (e) => {
        setPrice(e.target.value);
    }

    return (
        <>
            <label htmlFor="price" className="block text-sm font-medium text-gray-700">Price</label>
            <div className="relative mt-1 rounded-md shadow-sm">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <span className="text-gray-500 sm:text-sm">$</span>
                </div>
                <input type="text" name="price" id="price" placeholder="0.00"
                    // className='post-job-fields pl-6'
                    className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 rounded py-3 px-4 pl-6 mb-3 leading-tight focus:outline-none focus:border-gray-500"
                    value={price}
                    onChange={handleChangePrice}
                />
                <div className="absolute inset-y-0 right-0 flex items-center border border-gray-400 rounded-r">
                    <label htmlFor="currency" className="sr-only">Currency</label>
                    <select id="currency" name="currency" className="h-full rounded-md border-transparent bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:border-gray-500  sm:text-sm outline-none">
                        <option>USD</option>
                        {/* <option>CAD</option>
                                            <option>EUR</option> */}
                    </select>
                </div>
            </div>
        </>
    );
}

export default Price;
