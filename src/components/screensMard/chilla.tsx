import React from "react";
import Form from "../addDataForm/form"; // ✅ Capitalized name

const IjtimaScreen: React.FC = () => {
  return (
    <Form heading="چلہ فارم" collectionName="chilla" screensNAme="viewChilla" />
  );
};

export default IjtimaScreen;
