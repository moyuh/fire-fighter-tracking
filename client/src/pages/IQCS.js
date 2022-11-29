// import './styles/IQCS.css';
// import { Document, Page } from 'react-pdf';
// import IQCS_Responder from '../assets/IQCS_Responder.pdf'

// function IQCS () {
//     return (
//     <div>
//         <h1>hello</h1>
//         <Document file='https://www.nifc.gov/nicc/sitreprt.pdf'>
//           {/* <Page pageNumber={1} /> */}
//         </Document>
//     </div>
//       );
// };

// export default IQCS;
import React, { useState } from 'react';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';

function IQCS() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div>
      <Document file="https://www.nifc.gov/nicc/sitreprt.pdf" onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={pageNumber} />
      </Document>
      <p>
        Page {pageNumber} of {numPages}
      </p>
    </div>
  );
}
export default IQCS;