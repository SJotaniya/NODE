import React, { useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addProduct, fetchApi, removeProduct } from './ItemSlice';

export default function Milk() {

    const dispatch = useDispatch();
    const cartData = useSelector((state) => state.dataKey?.cart) || [];
    useEffect(() => {
        dispatch(fetchApi());
    }, [])

    const data = useSelector((state) => state.dataKey?.allData)

    const categoryData = data.filter((e) => e.category === "milk");

    const handleAddCart = (e) => {
        dispatch(addProduct(e));
    }

    const handleRemoveCart = (e) => {
        dispatch(removeProduct(e))
    }
    return (
        <div className='overflow-hidden'>
            <div className="div flex justify-center">
                <div className="mainDiv w-[100%] lg:w-[80%] border flex">
                    <div className="div1 h-[81vh] border border-black w-[20%] overflow-scroll">
                        <div className="category flex flex-col lg:flex-row items-category items-center py-3 mt-[15px]">
                            <div className="img h-[55px] w-[55px] rounded-[15px] bg-[#f8f8f8] overflow-hidden"><img src="category1.webp" alt="" /></div>
                            <div className="txt mt-2 lg:mt-0 ms-0 lg:ms-3"><p>Milk</p></div>
                        </div>

                        <div className="category flex flex-col lg:flex-row items-center py-3 mt-[15px]">
                            <div className="img h-[55px] w-[55px] rounded-[15px] bg-[#f8f8f8] overflow-hidden"><img src="category2.webp" alt="" /></div>
                            <div className="txt mt-2 lg:mt-0 ms-0 lg:ms-3"><p>Bread & Pav</p></div>
                        </div>

                        <div className="category flex flex-col lg:flex-row items-center py-3 mt-[15px]">
                            <div className="img h-[55px] w-[55px] rounded-[15px] bg-[#f8f8f8] overflow-hidden"><img src="category3.webp" alt="" /></div>
                            <div className="txt mt-2 lg:mt-0 ms-0 lg:ms-3"><p>Flakes & Kids Cereals</p></div>
                        </div>


                        <div className="category flex flex-col lg:flex-row items-center py-3 mt-[15px]">
                            <div className="img h-[55px] w-[55px] rounded-[15px] bg-[#f8f8f8] overflow-hidden"><img src="category4.webp" alt="" /></div>
                            <div className="txt mt-2 lg:mt-0 ms-0 lg:ms-3"><p>Muesli & Granola</p></div>
                        </div>

                        <div className="category flex flex-col lg:flex-row items-center py-3 mt-[15px]">
                            <div className="img h-[55px] w-[55px] rounded-[15px] bg-[#f8f8f8] overflow-hidden"><img src="category5.webp" alt="" /></div>
                            <div className="txt mt-2 lg:mt-0 ms-0 lg:ms-3"><p>Oats</p></div>
                        </div>

                        <div className="category flex flex-col lg:flex-row items-center py-3 mt-[15px]">
                            <div className="img h-[55px] w-[55px] rounded-[15px] bg-[#f8f8f8] overflow-hidden"><img src="category6.webp" alt="" /></div>
                            <div className="txt mt-2 lg:mt-0 ms-0 lg:ms-3"><p>Paneer & Tofu</p></div>
                        </div>

                        <div className="category flex flex-col lg:flex-row items-center py-3 mt-[15px]">
                            <div className="img h-[55px] w-[55px] rounded-[15px] bg-[#f8f8f8] overflow-hidden"><img src="category7.jpg" alt="" /></div>
                            <div className="txt mt-2 lg:mt-0 ms-0 lg:ms-3"><p>Curd & Yogurt</p></div>
                        </div>

                        <div className="category flex flex-col lg:flex-row items-center py-3 mt-[15px]">
                            <div className="img h-[55px] w-[55px] rounded-[15px] bg-[#f8f8f8] overflow-hidden"><img src="category8.webp" alt="" /></div>
                            <div className="txt mt-2 lg:mt-0 ms-0 lg:ms-3"><p>Butter & More</p></div>
                        </div>

                        <div className="category flex flex-col lg:flex-row items-center py-3 mt-[15px]">
                            <div className="img h-[55px] w-[55px] rounded-[15px] bg-[#f8f8f8] overflow-hidden"><img src="category9.webp" alt="" /></div>
                            <div className="txt mt-2 lg:mt-0 ms-0 lg:ms-3"><p>Cheese</p></div>
                        </div>

                        <div className="category flex flex-col lg:flex-row items-center py-3 mt-[15px]">
                            <div className="img h-[55px] w-[55px] rounded-[15px] bg-[#f8f8f8] overflow-hidden"><img src="category10.webp" alt="" /></div>
                            <div className="txt mt-2 lg:mt-0 ms-0 lg:ms-3"><p>Cream & Whitener</p></div>
                        </div>

                        <div className="category flex flex-col lg:flex-row items-center py-3 mt-[15px]">
                            <div className="img h-[55px] w-[55px] rounded-[15px] bg-[#f8f8f8] overflow-hidden"><img src="category11.jpg" alt="" /></div>
                            <div className="txt mt-2 lg:mt-0 ms-0 lg:ms-3"><p>Condensed Milk</p></div>
                        </div>

                        <div className="category flex flex-col lg:flex-row items-center py-3 mt-[15px]">
                            <div className="img h-[55px] w-[55px] rounded-[15px] bg-[#f8f8f8] overflow-hidden"><img src="category12.jpg" alt="" /></div>
                            <div className="txt mt-2 lg:mt-0 ms-0 lg:ms-3"><p>Vermicelli</p></div>
                        </div>

                        <div className="category flex flex-col lg:flex-row items-center py-3 mt-[15px]">
                            <div className="img h-[55px] w-[55px] rounded-[15px] bg-[#f8f8f8] overflow-hidden"><img src="category13.jpg" alt="" /></div>
                            <div className="txt mt-2 lg:mt-0 ms-0 lg:ms-3"><p>Poha, Daliya & Other Grains</p></div>
                        </div>

                        <div className="category flex flex-col lg:flex-row items-center py-3 mt-[15px]">
                            <div className="img h-[55px] w-[55px] rounded-[15px] bg-[#f8f8f8] overflow-hidden"><img src="category14.webp" alt="" /></div>
                            <div className="txt mt-2 lg:mt-0 ms-0 lg:ms-3"><p>Peanut Butter</p></div>
                        </div>

                        <div className="category flex flex-col lg:flex-row items-center py-3 mt-[15px]">
                            <div className="img h-[55px] w-[55px] rounded-[15px] bg-[#f8f8f8] overflow-hidden"><img src="category15.png" alt="" /></div>
                            <div className="txt mt-2 lg:mt-0 ms-0 lg:ms-3"><p>Energy Bars</p></div>
                        </div>

                        <div className="category flex flex-col lg:flex-row items-center py-3 mt-[15px]">
                            <div className="img h-[55px] w-[55px] rounded-[15px] bg-[#f8f8f8] overflow-hidden"><img src="category16.webp" alt="" /></div>
                            <div className="txt mt-2 lg:mt-0 ms-0 lg:ms-3"><p>Lassi, Shakes & More</p></div>
                        </div>

                        <div className="category flex flex-col lg:flex-row items-center py-3 mt-[15px]">
                            <div className="img h-[55px] w-[55px] rounded-[15px] bg-[#f8f8f8] overflow-hidden"><img src="category17.webp" alt="" /></div>
                            <div className="txt mt-2 lg:mt-0 ms-0 lg:ms-3"><p>Breakfast Mixes</p></div>
                        </div>

                        <div className="category flex flex-col lg:flex-row items-center py-3 mt-[15px]">
                            <div className="img h-[55px] w-[55px] rounded-[15px] bg-[#f8f8f8] overflow-hidden"><img src="category18.webp" alt="" /></div>
                            <div className="txt mt-2 lg:mt-0 ms-0 lg:ms-3"><p>Honey & Chyawanprash</p></div>
                        </div>

                        <div className="category flex flex-col lg:flex-row items-center py-3 mt-[15px]">
                            <div className="img h-[55px] w-[55px] rounded-[15px] bg-[#f8f8f8] overflow-hidden"><img src="category19.jpg" alt="" /></div>
                            <div className="txt mt-2 lg:mt-0 ms-0 lg:ms-3"><p>Batter</p></div>
                        </div>
                    </div>

                    <div className="div2 w-[80%] border border-black h-[81vh] overflow-scroll">
                        <div className="sort flex justify-between mt-3">
                            <p className='ps-3 font-semibold'>Buy Milk Online</p>

                            <div className="sorting flex gap-[10px] items-center me-[30px]">
                                <p>Sort By</p>
                                <select name="" id="" className='h-[40px] px-2 text-[#358d47] rounded-[5px] w-[200px] border'>
                                    <option value="relevance" className=''>Relevance</option>
                                    <option value="relevance" className=''>Price (Low To High)</option>
                                    <option value="relevance" className=''>Price (High To Low)</option>
                                    <option value="relevance" className=''>Discount (High To Low)</option>
                                    <option value="relevance" className=''>Name (A To Z)</option>
                                </select>
                            </div>
                        </div>



                        <div className="products mt-[15px] flex justify-center sm:justify-start flex-wrap gap-[0px] sm:gap-[5px] md:gap-[8px] border border-black bg-[#f1f2f8]">
                            {
                                data &&
                                categoryData.map((e, i) => {
                                    return (
                                        <div key={i} className='w-[80%] sm:w-[48%] md:w-[23%] xl:w-[18.5%] rounded-[10px] ms-[5px] mt-[5px] bg-white'>
                                            <img src={e.image} alt="" />

                                            <div className="txt mt-[15px] h-[150px] w-[90%] ms-[5%] relative">
                                                <p className='text-[14px] font-semibold'>{e.name.length > 30 ? e.name.substring(0, 30) + "..." : e.name}</p>
                                                <p className='absolute top-[60px] text-[14px] text-[#8d8b8b]'>{e.weight}</p>

                                                <div className="txt1 flex justify-between items-center w-full">
                                                    <div className="price absolute top-[100px]">
                                                        <p className='text-[12px] font-bold'>₹{e.price}</p>
                                                        <p className='text-[12px] font-bold text-[#8d8b8b]'><del>{e.deleteprice == "" ? "" : "₹"}{e.deleteprice}</del></p>
                                                    </div>


                                                    {
                                                        cartData.find((item) => e.id == item.id) ?
                                                            <button className={`h-[35px] w-[70px] rounded-[5px] border absolute top-[100px] bg-[#0c831e] right-0 text-[14px] font-semibold border-[#0c831e] text-[#0c831e]`}>

                                                                <div className="counter flex justify-evenly items-center w-[70px] h-[35px] rounded-[5px] border border-black">
                                                                    <button onClick={() => handleRemoveCart(e)} className='text-2xl text-white font-bold h-[100%] flex items-center justify-center w-[33%]'> - </button>
                                                                    <div className="count h-[100%] flex items-center justify-center w-[33%] text-white">{cartData.find((item)=> e.id == item.id).quantity}</div>
                                                                    <button onClick={() => handleAddCart(e)} className='text-xl text-white font-bold h-[100%] flex items-center justify-center w-[33%]'> + </button>
                                                                </div>

                                                            </button> :

                                                            <button onClick={() => handleAddCart(e)} className={`h-[35px] w-[70px] rounded-[5px] border absolute top-[100px] right-0 text-[14px] font-semibold border-[#0c831e] text-[#0c831e] bg-[#f6fff8]`}>
                                                                ADD
                                                            </button>
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
