import React from 'react'

import PDFViewer from 'pdf-viewer-reactjs'

const problem = () => {
    return (
        <PDFViewer
            document={{
                url: 'C:\Users\SAKTHI\Documents\SAKTHIII_PREETHA.pdf',
            }}
        />
    )
}

export default problem;
