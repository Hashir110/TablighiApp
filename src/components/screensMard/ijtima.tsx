import React from "react";
import Form from "../addDataForm/form"; // ✅ Capitalized name

const IjtimaScreen: React.FC = () => {
  return (
    <Form
      heading="اجتماع فارم"
      collectionName="ijtima"
      screensNAme="viewIjtima"
    />
  );
};

export default IjtimaScreen;
