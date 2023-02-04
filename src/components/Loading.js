import "./styles/Loading.css";

export default function Loading() {
  return (
    <div className="container">
      <div className="ring"/>
      <div className="ring"/>
      <div className="ring"/>
      <h1>Generating Questions Please Wait</h1>
    </div>
  );
}

//got loading code from here
//https://github.com/hmjatt/Quizzical/blob/main/quizzical/src/components/Loading/Loading.css