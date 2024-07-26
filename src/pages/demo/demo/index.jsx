import React, { useState, useEffect} from "react";
import CompanyName from "../../../components/demo/CompanyName";
import ContentArea from "../../../components/demo/ContentArea";
import DocumentationMessage from "../../../components/demo/DocumentationMessage";
import Footer from "../../../components/demo/Footer";
import InputQuestion from "../../../components/demo/InputQuestion";

const DemoPage = () => {
  const [state, setState] = useState(null);

  useEffect(() => {
    
  }, []);

  return (
    <div>
      <CompanyName />
      <ContentArea />
      <DocumentationMessage message="This is a demo page" />
      <InputQuestion />
      <Footer />
    </div>
  );
}

export default DemoPage;