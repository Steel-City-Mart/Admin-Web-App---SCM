import React, {useState} from 'react';
import axios from 'axios';

function buildJsonBody (e){
    e.preventDefault();
    let jsonObject = {};
    console.log(e.target[0].id);
    for(let i=0;;i++){
        if(e.target[i] === undefined){
            break;
        }
        jsonObject[e.target[i].id] = e.target[i].value;
    }
    makeRequest(jsonObject);
}

function makeRequest (jsonObject) {
    axios.post("",jsonObject); //TODO add API endpoint here
}

function ProductsPage(props) {
    const [productName, setProductName] = useState('');
    const [description, setDescription] = useState('');
    const [sku, setSku] = useState('');
    const [category1, setCategory1] = useState('');
    const [category2, setCategory2] = useState('');
    const [category3, setCategory3] = useState('');
    const [rewardValue, setRewardValue] = useState('');
    const [supplier, setSupplier] = useState('');
    const [deliveryCategory, setDeliveryCategory] = useState('');
    const [unitQuantity, setUnitQuantity] = useState('');
    const [unitMeasure, setUnitMeasure] = useState('');
    const [cgst, setCgst] = useState('');
    const [sgst, setSgst] = useState('');
    const [igst, setIgst] = useState('');
    const [maxQuantity, setMaxQuantity] = useState('');
    const [imageSource, setImageSource] = useState('');
    const [basePrice, setBasePrice] = useState('');
    const [salePrice, setSalePrice] = useState('');
    const [memberPrice, setMemberPrice] = useState('');

    return (
        <div>
            <form onSubmit={buildJsonBody}>
                <div>Products Page</div>
                <div>Product Name</div>
                <input type='text' 
                    placeholder='Name'
                    id='productName' 
                    value={productName}
                    onChange={event => setProductName( event.target.value )}></input>

                <div>Product description</div>
                <input type='text' 
                    placeholder='Describe' 
                    id='description'
                    value={description}
                    onChange={event => setDescription( event.target.value )}></input>

                <div>Available Quantity</div>
                <input type='number' 
                    placeholder='123'
                    id='sku' 
                    value={sku}
                    onChange={event => setSku( event.target.value )}></input>

                <div>Category</div>
                <input type='text' 
                    placeholder='Food Grains' 
                    id='category1'
                    value={category1}
                    onChange={event => setCategory1( event.target.value )}></input>

                <div>Sub-Category</div>
                <input type='text' 
                    placeholder='Dals' 
                    id='category2'
                    value={category2}
                    onChange={event => setCategory2( event.target.value )}></input>

                <div>Additional-Category</div>
                <input type='text' 
                    placeholder='Toor Dal' 
                    id='category3'
                    value={category3}
                    onChange={event => setCategory3( event.target.value )}></input>

                <div>Reward Point</div>
                <input type='number' 
                    placeholder='10'
                    id='rewardValue' 
                    value={rewardValue}
                    onChange={event => setRewardValue( event.target.value )}></input>

                <div>Supplier</div>
                <input type='text' 
                    placeholder='Dibya'
                    id='supplier' 
                    value={supplier}
                    onChange={event => setSupplier( event.target.value )}></input>

                <div>Delivery-Category</div>
                <input type='text' 
                    placeholder='1' 
                    id='deliveryCategory'
                    value={deliveryCategory}
                    onChange={event => setDeliveryCategory( event.target.value )}></input>

                <div>Quantity</div>
                <input type='number' 
                    placeholder='500' 
                    id='unitQuantity'
                    value={unitQuantity}
                    onChange={event => setUnitQuantity( event.target.value )}></input>

                <div>Unit of Measurement</div>
                <input type='text' 
                    placeholder='gms' 
                    id='unitMeasure'
                    value={unitMeasure}
                    onChange={event => setUnitMeasure( event.target.value )}></input>

                <div>CGST</div>
                <input type='number' 
                    placeholder='2.5'
                    id='cgst' 
                    value={cgst}
                    onChange={event => setCgst( event.target.value )}></input>

                <div>IGST</div>
                <input type='number' 
                    placeholder='5' 
                    id='igst'
                    value={igst}
                    onChange={event => setIgst( event.target.value )}></input>

                <div>SGST</div>
                <input type='number' 
                    placeholder='2.5'
                    id='sgst' 
                    value={sgst}
                    onChange={event => setSgst( event.target.value )}></input>

                <div>Max-Purchase-Quantity</div>
                <input type='number' 
                    placeholder='3' 
                    id='maxQuantity'
                    value={maxQuantity}
                    onChange={event => setMaxQuantity( event.target.value )}></input>

                <div>Image</div>
                <input type='text' 
                    placeholder='https://imgur.com/gallery/aHivJQW' 
                    id='imageSource'
                    value={imageSource}
                    onChange={event => setImageSource( event.target.value )}></input>

                <div>Base-Price</div>
                <input type='number' 
                    placeholder='100.00' 
                    id='basePrice'
                    value={basePrice}
                    onChange={event => setBasePrice( event.target.value )}></input>

                <div>Sale-Price</div>
                <input type='number' 
                    placeholder='90.00' 
                    id='salePrice'
                    value={salePrice}
                    onChange={event => setSalePrice( event.target.value )}></input>

                <div>Member-Price</div>
                <input type='number' 
                    placeholder='80.00'
                    id='memberPrice' 
                    value={memberPrice}
                    onChange={event => setMemberPrice( event.target.value )}></input>
                <button>Submit</button>
            </form>
        </div>
    );
}

export default ProductsPage;