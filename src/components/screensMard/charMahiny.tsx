import React from "react";
import Form from "../addDataForm/form"; // ✅ Capitalized name

const IjtimaScreen: React.FC = () => {
  return (
    <Form
      heading="چار مہینے فارم"
      collectionName="charMahiny"
      screensNAme="viewCharMahinay"
    />
  );
};

export default IjtimaScreen;
