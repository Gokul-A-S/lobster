import { PDFViewer, Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4',
  },
  section: {
    width: "100%",
    margin: "30px",
    padding: "10px",
    flexGrow: 1,
  },
  text: {
    fontSize: "22px",
    marginBottom: "40px",
    marginTop: "0px",
    
  },
});

const PDFView = ({ data }) => (
  <PDFViewer className='pdf-preview' width={600} height={600}>
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          {data.map((item, index) => (
            <Text key={index} style={styles.text}>
              {item}
            </Text>
          ))}
        </View>
      </Page>
    </Document>
  </PDFViewer>
);

export default PDFView;
