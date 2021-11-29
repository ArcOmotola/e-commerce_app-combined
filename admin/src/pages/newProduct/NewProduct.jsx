import "./newProduct.css";

export const NewProduct = () => {
    return (
        <div className="newProduct">
        <h1 className="addProductTitle">New Product</h1>
        <form className="addProductForm">
            <div className="addProductItem">
                <label>Image</label>
                <input type="file" id="file" />
            </div>
            <div className="addProductItem">
                <label>Title</label>
                <input type="text" placeholder="Apple Airpods" />
            </div>
            <div className="addProductItem">
                <label>Description</label>
                <input type="text" placeholder="description..." />
            </div>
            <div className="addProductItem">
                <label>Price</label>
                <input type="text" placeholder="100" />
            </div>
            <div className="addProductItem">
                <label>Categories</label>
                <input type="text" placeholder="jeans, skirts" />
            </div>
            <div className="addProductItem">
                <label>Stock</label>
                <select>
                    <option value="true">Yes</option>
                    <option value="false">No</option>
                </select>
            </div>
            <button className="addProductButton">Create</button>
        </form>
        </div>
    );
}