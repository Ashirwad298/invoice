import React, { useState } from 'react';
import InvoiceForm from './components/InvoiceForm';
import InvoiceDocument from './components/InvoiceDocument';
import InvoicePreview from './components/InvoicePreview';
import { PDFDownloadLink } from '@react-pdf/renderer';

const App = () => {
  const [formData, setFormData] = useState({
    sellerName: '',
    sellerAddress: '',
    sellerCity: '',
    sellerState: '',
    sellerPincode: '',
    sellerPan: '',
    sellerGst: '',
    billingName: '',
    billingAddress: '',
    billingCity: '',
    billingState: '',
    billingPincode: '',
    shippingName: '',
    shippingAddress: '',
    shippingCity: '',
    shippingState: '',
    shippingPincode: '',
    orderNo: '',
    orderDate: '',
    invoiceNo: '',
    invoiceDate: '',
    items: [{ description: '', unitPrice: '', quantity: '', discount: '' }],
    reverseCharge: '',
    signature: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleItemChange = (index, e) => {
    const newItems = [...formData.items];
    newItems[index][e.target.name] = e.target.value;
    setFormData({ ...formData, items: newItems });
  };

  const addItem = () => {
    setFormData({ ...formData, items: [...formData.items, { description: '', unitPrice: '', quantity: '', discount: '' }] });
  };

  return (
    <div>
      <InvoiceForm
        formData={formData}
        handleChange={handleChange}
        handleItemChange={handleItemChange}
        addItem={addItem}
      />

      <h2>Invoice Preview</h2>
      <InvoicePreview data={formData} />

      <PDFDownloadLink
        document={<InvoiceDocument data={formData} />}
        fileName="invoice.pdf"
      >
        {({ loading }) => (loading ? 'Generating PDF...' : 'Download PDF')}
      </PDFDownloadLink>
    </div>
  );
};

export default App;
