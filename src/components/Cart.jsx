import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addCart, delCart } from '../redux/action';

function Cart() {
    const state = useSelector((state) => state.handleCart)

    const dispatch = useDispatch();
    const addProduct = (product) => {
        dispatch(addCart(product));
    }
    const delProduct = (product) => {
        dispatch(delCart(product));
    }
    const ShowProducts = () => {
        return (
            <div className='container my-5 p-5 '>
                {state.map((product) => {
                    return (
                            <div className="row my-4 p-5 .bg-light.bg-gradient shadow-lg" key={product.id}>
                                <div className='col-md-4'>
                                    <img src={product.image} alt={product.title}
                                        height="200px" width="180px" />


                                </div>
                                <div className='col-md-4'>
                                    <h3>{product.title}</h3>
                                    <p className='lead fw-bold'>
                                        {product.qty} X ${product.price} = ${product.qty * product.price}
                                    </p>
                                    <button className='btn btn-outline-dark me-4'
                                    onClick={()=>delProduct(product)}>
                                        <i className='fa fa-minus'></i>
                                    </button>
                                    <button className='btn btn-outline-dark '
                                    onClick={()=>addProduct(product)}>
                                        <i className='fa fa-plus'></i>
                                    </button>
                                </div>
                            </div>
                    )
                })}

            </div>
        )
    }
    return (
        <div><ShowProducts /></div>
    )
}

export default Cart