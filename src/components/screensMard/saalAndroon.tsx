import React from "react";
import Form from "../addDataForm/form"; // ✅ Capitalized name

const IjtimaScreen: React.FC = () => {
  return (
    <Form
      heading="سال اندرون فارم"
      collectionName="saalAndroon"
      screensNAme="ViewSaalAndroon"
    />
  );
};

export default IjtimaScreen;
