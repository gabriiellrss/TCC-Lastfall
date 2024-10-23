import Carousel from "../Components/carousel";


export default function Home(){
    return(
        <div>
            <Carousel/>
            <div className="container card bg-white m-5">
              <p className="title">Olamundo </p>
              <button className="btn btn-primary">Bpota</button>
            </div>
        </div>
    )
}