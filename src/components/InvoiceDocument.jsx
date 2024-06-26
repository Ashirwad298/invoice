import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontFamily: 'Helvetica'
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginBottom: 20
  },
  headerText: {
    fontSize: 14,
    fontWeight: 'bold'
  },
  section: {
    marginBottom: 10
  },
  sectionTitle: {
    fontSize: 12,
    fontWeight: 'bold',
    marginBottom: 5
  },
  text: {
    fontSize: 10,
    marginBottom: 2
  },
  table: {
    display: "table",
    width: "auto",
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#000',
    borderStyle: 'solid',
    borderCollapse: 'collapse'
  },
  tableRow: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderColor: '#000',
    borderStyle: 'solid',
  },
  tableColHeader: {
    width: "25%",
    borderRightWidth: 1,
    borderColor: '#000',
    borderStyle: 'solid',
    backgroundColor: '#f2f2f2',
    textAlign: 'center',
    padding: 5,
    fontSize: 10,
    fontWeight: 'bold'
  },
  tableCol: {
    width: "25%",
    borderRightWidth: 1,
    borderColor: '#000',
    borderStyle: 'solid',
    textAlign: 'center',
    padding: 5,
    fontSize: 10
  },
  tableColLast: {
    width: "25%",
    textAlign: 'center',
    padding: 5,
    fontSize: 10
  }
});

const InvoiceDocument = ({ data }) => (
  <Document>
    <Page style={styles.page}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Tax Invoice/Bill of Supply/Cash Memo</Text>
        <Text style={styles.headerText}>Amazon.in</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Seller Details:</Text>
        <Text style={styles.text}>{data.sellerName}</Text>
        <Text style={styles.text}>{data.sellerAddress}</Text>
        <Text style={styles.text}>{data.sellerCity}, {data.sellerState}, {data.sellerPincode}</Text>
        <Text style={styles.text}>PAN: {data.sellerPan}</Text>
        <Text style={styles.text}>GST: {data.sellerGst}</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Billing Details:</Text>
        <Text style={styles.text}>{data.billingName}</Text>
        <Text style={styles.text}>{data.billingAddress}</Text>
        <Text style={styles.text}>{data.billingCity}, {data.billingState}, {data.billingPincode}</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Shipping Details:</Text>
        <Text style={styles.text}>{data.shippingName}</Text>
        <Text style={styles.text}>{data.shippingAddress}</Text>
        <Text style={styles.text}>{data.shippingCity}, {data.shippingState}, {data.shippingPincode}</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Order Details:</Text>
        <Text style={styles.text}>Order No: {data.orderNo}</Text>
        <Text style={styles.text}>Order Date: {data.orderDate}</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Invoice Details:</Text>
        <Text style={styles.text}>Invoice No: {data.invoiceNo}</Text>
        <Text style={styles.text}>Invoice Date: {data.invoiceDate}</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Items:</Text>
        <View style={styles.table}>
          <View style={styles.tableRow}>
            <View style={styles.tableColHeader}>
              <Text>Description</Text>
            </View>
            <View style={styles.tableColHeader}>
              <Text>Unit Price</Text>
            </View>
            <View style={styles.tableColHeader}>
              <Text>Quantity</Text>
            </View>
            <View style={styles.tableColLast}>
              <Text>Discount</Text>
            </View>
          </View>
          {data.items.map((item, index) => (
            <View key={index} style={styles.tableRow}>
              <View style={styles.tableCol}>
                <Text>{item.description}</Text>
              </View>
              <View style={styles.tableCol}>
                <Text>{item.unitPrice}</Text>
              </View>
              <View style={styles.tableCol}>
                <Text>{item.quantity}</Text>
              </View>
              <View style={styles.tableColLast}>
                <Text>{item.discount}</Text>
              </View>
            </View>
          ))}
        </View>
      </View>
      <View style={styles.section}>
        <Text style={styles.text}>Reverse Charge: {data.reverseCharge}</Text>
        <Text style={styles.text}>Authorized Signatory: {data.signature}</Text>
      </View>
    </Page>
  </Document>
);

export default InvoiceDocument;
