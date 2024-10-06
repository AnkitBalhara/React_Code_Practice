// export default function PropsData(props) {
//   return (<p>{props.data.Name}</p>);
// }

// Without Destructuring props.....................
// const PropsData = (props) => {
//   return <p>{props.data.Name}</p>;
// };

// Destructuring props.....................
const PropsData = (props) => {
  const { Name,Nara } = props.data;
  return <>
  <p>
  {Name}
  {Nara}
    </p>
    </>;
};

export default PropsData;
