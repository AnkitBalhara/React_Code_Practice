import apiData from "./apiData.json";
import PropsData from "./PropsData";

const Ram = () => {
  return (
    <>
      {apiData.map((data,index) => {
        return <PropsData data={data} key={index} />;
      })}
    </>
  );
};

export default Ram;
