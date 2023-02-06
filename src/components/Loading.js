import "./styles/Loading.css";

export default function Loading() {
  return (
    <div className="container" >
      <div className="ring"/>
      <div className="ring"/>
      <div className="ring"/>
      <div className="title">
      <h1>Loading....</h1>
      </div>
    </div>
  );
}

//got loading code from here
//https://github.com/hmjatt/Quizzical/blob/main/quizzical/src/components/Loading/Loading.css