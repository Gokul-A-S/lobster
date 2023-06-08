import { PDFViewer, Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4',
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  text: {
    fontSize: 12,
  },
});

const PDFView = ({ data }) => (
  <PDFViewer width={400} height={400}>
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
