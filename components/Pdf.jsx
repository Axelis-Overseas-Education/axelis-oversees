import { useEffect } from 'react';
import { useRouter } from 'next/router';
import PDFViewer from '../components/PDFViewer';

const Pdf= () => {
    const router = useRouter();
    const { file } = router.query;
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.12.318/pdf.min.js';
    script.async = true;
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div>
      <h1>PDF Viewer</h1>
      <PDFViewer file={file} />
    </div>
  );
}

export default Pdf;