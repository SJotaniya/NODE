import React, { useState } from 'react'
import { CiSearch } from "react-icons/ci";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { MdArrowDropDown } from "react-icons/md";
import { IoCloseSharp } from "react-icons/io5";
import { useDispatch, useSelector } from 'react-redux';
import { addProduct, removeProduct } from './ItemSlice';
import { RiBillFill } from "react-icons/ri";
import { RiMotorbikeFill } from "react-icons/ri";
import { FaBagShopping } from "react-icons/fa6";

export default function Header() {

    const [addCartDivDisplay, setAddCartDivDisplay] = useState(false);

    const cartData = useSelector((state) => state.dataKey?.cart) || [];


    const handleAddCartDiv = () => {
        setAddCartDivDisplay(true);
    }

    const handleAddCartDiv1 = () => {
        setAddCartDivDisplay(false)
    }
    const dispatch = useDispatch();

    const handleAddCart = (e) => {
        dispatch(addProduct(e))
    }

    const handleRemoveCart = (e) => {
        dispatch(removeProduct(e))
    }
    return (
        <div>
            <header className='border h-[90px] w-[100%]'>
                <nav className='flex items-center justify-between xl:justify-center'>
                    <div className="logo h-[90px] flex items-center w-[50%] xl:w-[10%]">
                        <img src="logo.svg" alt="" />
                    </div>

                    <div className="searchBar h-[90px] w-[70%] hidden xl:flex justify-center items-center">

                        <div className="address flex justify-center w-[30%]">
                            <div className="address1">
                                <p className='font-bold'>Delivery in 9 minutes</p>
                                <p className='flex items-center'>Bapa Sitaram Chowk, 7Q6J+8Q... <MdArrowDropDown className='text-xl ms-3' /></p>
                            </div>
                        </div>

                        <div className="search relative w-[70%]">
                            <CiSearch className='absolute top-[15px] left-[21%] text-2xl font-bold' />
                            <input type="text" placeholder='Search for products...' className='h-[50px] w-[80%] bg-[#f8f8f8] ps-[45px] ms-[20%] border rounded-[10px] outline-none' />
                        </div>
                    </div>

                    <div className="login h-[90px] w-[50%] xl:w-[20%] gap-[50px] xl:gap-[90px] flex justify-end items-center">
                        <p className='text-xl'>Login</p>

                        <button onClick={handleAddCartDiv} className='h-[50px] px-3 me-[30px] rounded-[5px] text-white font-semibold bg-[#0c831d] flex justify-center items-center'>
                            {
                                cartData.length > 0 ?
                                    <div className="data flex items-center">
                                        <HiOutlineShoppingCart className='text-2xl' />
                                        <div className="sum">

                                            <p>{cartData.reduce((sum, e) => sum + e.quantity, 0)} items</p>
                                            <p className='text-[14px]'> ₹ {cartData.reduce((sum, e) => sum + (e.quantity * e.price), 0)}</p>
                                        </div>
                                    </div>
                                    :
                                    <div className="data flex">
                                        <HiOutlineShoppingCart className='text-2xl' />
                                        <p className='ps-1'>My Cart</p>
                                    </div>
                            }
                        </button>
                    </div>
                </nav>
            </header>


            <div className="allCategories h-[50px] hidden xl:flex items-center justify-center gap-[25px]">
                <p>Vegetable & Fruits</p>
                <p>Dairy & Breakfast</p>
                <p>Munchies</p>
                <p>Cold Drinkts & Juices</p>
                <p>Instant & Frozen Food</p>
                <p>Tea, Coffee & Health Drinks</p>
                <p>Bakery & Biscuits</p>
                <p>More</p>
            </div>

            {/* add cart item */}

            <div className={`addCartDiv absolute top-0 right-0 h-[100vh] w-[30%] overflow-scroll bg-[#f6f6fe] z-50 transition-all ${addCartDivDisplay ? "translate-x-0" : "translate-x-full"}`}>
                <div className="mycart flex justify-between items-center h-[50px] bg-white border">
                    <p className='ms-3 font-semibold'>My Cart</p>
                    <IoCloseSharp onClick={handleAddCartDiv1} className='text-2xl me-3 left-[91%] cursor-pointer' />
                </div>

                <div className="cartDiv w-[95%] ms-[2.5%] rounded-[5px] mt-[15px] bg-white">

                    <div className="timer flex w-[95%] ms-[2.5%] pt-3">
                        <div className="box1 h-[50px] w-[50px]">
                            <div className="time"><img src="timer.png" alt="" /></div>
                        </div>
                        <div className="box2 ms-3">
                            <p className='font-semibold text-[14px]'>Delivery in 9 minutes</p>
                            <p className='text-[12px]'>Shipment of 2 times</p>
                        </div>
                    </div><br />
                    {
                        cartData.length > 0 ?
                            cartData.map((e, i) => {
                                return (
                                    <div key={i} className='flex items-center pb-3 w-[95%] ms-[2.5%]'>
                                        <div className="img h-[70px] w-[18%] flex justify-center items-center rounded-[5px] border">
                                            <img className='h-[70px] w-[70px]' src={e.image} alt="" />
                                        </div>
                                        <div className="txt w-[60%] ps-2">
                                            <p className='text-[13px] w-[90%]'>{e.name}</p>
                                            <p className='text-[#6e6e6f] mt-[5px] text-[12px]'>{e.weight}</p>
                                            <div className="price flex mt-[5px]">
                                                <p className='text-black font-semibold text-[12px]'>₹ {e.price * e.quantity}</p>
                                                <p className='text-[#6e6e6f] ms-2 font-semibold text-[12px]'>{e.deleteprice == "" ? "" : <del>{e.deleteprice}</del>}</p>
                                            </div>
                                        </div>
                                        <div className="quanity w-[22%]">


                                            <div className="counter flex justify-evenly items-center w-[70px] h-[30px] rounded-[5px] bg-[#0c831e] text-[14px] font-semibold border-[#0c831e] text-[#0c831e]">
                                                <button onClick={() => handleRemoveCart(e)} className='text-2xl text-white h-[100%] flex items-center justify-center w-[33%]'> - </button>
                                                <div className="count h-[100%] flex items-center justify-center w-[33%] text-white">{e.quantity}</div>
                                                <button onClick={() => handleAddCart(e)} className='text-xl text-white h-[100%] flex items-center justify-center w-[33%]'> + </button>
                                            </div>



                                        </div>
                                    </div>
                                )
                            }) : (
                                <p>No items in cart</p>
                            )
                    }

                </div>
                <div className="bill bg-white mt-[15px] w-[95%] ms-[2.5%]">
                    <div className="details w-[95%] ms-[2.5%]">
                        <p className='font-bold'>Bill Details</p>

                        <div className="total flex mt-3 justify-between">
                            <p className='text-[12px] flex items-center gap-[5px]'><RiBillFill className='text-[14px]' /> Items Total</p>
                            <p className='text-[12px] font-semibold'>₹{cartData.reduce((sum, e) => sum + (e.price * e.quantity), 0)}</p>
                        </div>

                        <div className="total flex mt-3 justify-between">
                            <p className='text-[12px] flex items-center gap-[5px]'><RiMotorbikeFill className='text-[14px]' /> Delivery Charge</p>
                            <p className='text-[12px] font-semibold'>₹25</p>
                        </div>

                        <div className="total flex mt-3 justify-between">
                            <p className='text-[12px] flex items-center gap-[5px]'><FaBagShopping className='text-[14px]' /> Handling Charge</p>
                            <p className='text-[12px] font-semibold'>₹4</p>
                        </div>

                        <div className="total flex mt-3 justify-between">
                            <p className='text-[12px]'>Grand Total</p>
                            <p>{cartData.reduce((sum, e) => sum + (e.price * e.quantity), 29)}</p>
                        </div>
                    </div>
                </div>

                <div className="bill bg-white mt-[15px] w-[95%] ms-[2.5%]">
                    <div className="details w-[95%] ms-[2.5%]">
                        <p className='font-bold pt-2'>Cancellation Policy</p>
                        <p className='text-[12px]'>
                            Orders cannot be cancelled once packed for delivery. In case of unexpected delays, a refund will be provided, if applicable.
                        </p>
                    </div>
                </div>

            </div>


        </div>
    )
}
