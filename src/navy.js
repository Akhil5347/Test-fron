import "./App.css";
import img from "./airbnb-logo.png"
import img2 from './photo-grid.png';
export default function Navy(){
    return(
       <div> <div className="Container">
            <img src={img} className="img" />

        </div>
        <div className="Hero">
        <div><img src={img2} className="tag2" /></div>    
       <div className="Hero1"> <h2>Online Experiences</h2>
        <p>
        Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
</p></div>    </div>
        </div>
    )
}
