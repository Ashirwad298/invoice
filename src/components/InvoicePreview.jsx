import React from 'react';
import { PDFViewer } from '@react-pdf/renderer';
import InvoiceDocument from './InvoiceDocument';

const InvoicePreview = ({ data }) => (
  <PDFViewer width="100%" height="600">
    <InvoiceDocument data={data} />
  </PDFViewer>
);

export default InvoicePreview;
