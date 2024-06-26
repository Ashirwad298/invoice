import React from 'react';

const InvoiceForm = ({ formData, handleChange, handleItemChange, addItem }) => (
  <form>
    <h2>Seller Details</h2>
    <input type="text" name="sellerName" placeholder="Seller Name" onChange={handleChange} />
    <input type="text" name="sellerAddress" placeholder="Seller Address" onChange={handleChange} />
    <input type="text" name="sellerCity" placeholder="Seller City" onChange={handleChange} />
    <input type="text" name="sellerState" placeholder="Seller State" onChange={handleChange} />
    <input type="text" name="sellerPincode" placeholder="Seller Pincode" onChange={handleChange} />
    <input type="text" name="sellerPan" placeholder="Seller PAN" onChange={handleChange} />
    <input type="text" name="sellerGst" placeholder="Seller GST" onChange={handleChange} />

    <h2>Billing Details</h2>
    <input type="text" name="billingName" placeholder="Billing Name" onChange={handleChange} />
    <input type="text" name="billingAddress" placeholder="Billing Address" onChange={handleChange} />
    <input type="text" name="billingCity" placeholder="Billing City" onChange={handleChange} />
    <input type="text" name="billingState" placeholder="Billing State" onChange={handleChange} />
    <input type="text" name="billingPincode" placeholder="Billing Pincode" onChange={handleChange} />

    <h2>Shipping Details</h2>
    <input type="text" name="shippingName" placeholder="Shipping Name" onChange={handleChange} />
    <input type="text" name="shippingAddress" placeholder="Shipping Address" onChange={handleChange} />
    <input type="text" name="shippingCity" placeholder="Shipping City" onChange={handleChange} />
    <input type="text" name="shippingState" placeholder="Shipping State" onChange={handleChange} />
    <input type="text" name="shippingPincode" placeholder="Shipping Pincode" onChange={handleChange} />

    <h2>Order Details</h2>
    <input type="text" name="orderNo" placeholder="Order No" onChange={handleChange} />
    <input type="date" name="orderDate" placeholder="Order Date" onChange={handleChange} />

    <h2>Invoice Details</h2>
    <input type="text" name="invoiceNo" placeholder="Invoice No" onChange={handleChange} />
    <input type="date" name="invoiceDate" placeholder="Invoice Date" onChange={handleChange} />

    <h2>Items</h2>
    {formData.items.map((item, index) => (
      <div key={index}>
        <input type="text" name="description" placeholder="Description" onChange={(e) => handleItemChange(index, e)} />
        <input type="number" name="unitPrice" placeholder="Unit Price" onChange={(e) => handleItemChange(index, e)} />
        <input type="number" name="quantity" placeholder="Quantity" onChange={(e) => handleItemChange(index, e)} />
        <input type="number" name="discount" placeholder="Discount" onChange={(e) => handleItemChange(index, e)} />
      </div>
    ))}
    <button type="button" onClick={addItem}>Add Item</button>

    <h2>Other Details</h2>
    <input type="text" name="reverseCharge" placeholder="Reverse Charge" onChange={handleChange} />
    <input type="text" name="signature" placeholder="Signature" onChange={handleChange} />
  </form>
);

export default InvoiceForm;
