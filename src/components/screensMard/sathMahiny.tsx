import React from "react";
import Form from "../addDataForm/form"; // ✅ Capitalized name

const IjtimaScreen: React.FC = () => {
  return (
    <Form
      heading="ساتھ مہینے فارم"
      collectionName="sathMahinayBeroon"
      screensNAme="view7MahinayBeroon"
    />
  );
};

export default IjtimaScreen;
