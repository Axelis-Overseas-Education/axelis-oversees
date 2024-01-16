import { useState } from 'react';
import { Document, Page } from 'react-pdf';

const PdfViewer = ({ file }) => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  function changePage(offset) {
    setPageNumber((prevPageNumber) => prevPageNumber + offset);
  }

  return (
    <div className="pdf-viewer">
      <Document file={file} onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={pageNumber} />
      </Document>
      <div className="page-controls">
        <button onClick={() => changePage(-1)} disabled={pageNumber === 1}>
          Previous
        </button>
        <span>
          Page {pageNumber} of {numPages}
        </span>
        <button onClick={() => changePage(1)} disabled={pageNumber === numPages}>
          Next
        </button>
      </div>
    </div>
  );
};

export default PdfViewer;