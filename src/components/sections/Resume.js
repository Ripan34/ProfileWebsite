import './sections_Css/Resume.css';
import React, { useState } from 'react';
import { Document, Page } from 'react-pdf'; //for PDF
import res from "./ripandeep_r.pdf";

const Resume = () => {
    const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

    return (<section className="resume_Section">
        <embed src={res} width="100%" height="100%"></embed>


    </section>);
    
}
export default Resume;