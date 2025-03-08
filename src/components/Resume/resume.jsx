import React from 'react';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';

const Resume = () => {
  const pdfFile = 'path/to/your-resume.pdf';

  return (
    <div>
      <Document file={pdfFile}>
        <Page pageNumber={1} />
      </Document>
      <a href={pdfFile} download>
        <button>Download Resume</button>
      </a>
    </div>
  );
};

export default Resume;
