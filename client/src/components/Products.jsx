import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Product from './Product';
import axios from "axios";

const Products = ({cat, filters, sort}) => {
    // console.log(cat, filters, sort);

    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() => {
        const getProducts = async () => {
            try {
                const res = await axios.get(
                    cat
                    ? `http://localhost:5000/api/products?category=${cat}`              //get all products with a category query
                    : "http://localhost:5000/api/products"                              //get all products
                );
                setProducts(res.data);
            } catch (err) {}

            };
            getProducts();
            
    }, [cat] );

    
    useEffect(() => {
        if (sort === "newest") {
            setFilteredProducts((prev) => 
                [...prev].sort((a,b) => a.createdAt - b.createdAt)                  
            );
            
        } else if (sort === "asc") {                                                    
            setFilteredProducts((prev) => 
            [...prev].sort((a,b) => a.price - b.price)                  
            );
        } else {
            setFilteredProducts((prev) => 
            [...prev].sort((a,b) => b.price - a.price)                  
            );
        }
    }, [sort])


    useEffect(() => {
        cat &&
            setFilteredProducts(
                products.filter((item) =>
                    Object.entries(filters).every(([key, value]) =>         //displays only products with matching key&value pairs with the filters object
                        item[key].includes(value)
                    )
                )
            );
    }, [products, cat, filters]);




    return (
        <Container>
            {cat
                ? filteredProducts.map((item) => <Product item={item} key={item.id} />)
                : products.slice(0, 8).map((item) => <Product item={item} key={item.id} />)}           
        </Container>
    );
};

export default Products;

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;


