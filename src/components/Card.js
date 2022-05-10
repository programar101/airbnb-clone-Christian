import image1 from "../components/images/image1.jpg"; 
import star from "../components/images/star.png"; 

export default function Card() {


    return (
        <div className="card">
            <img src={image1} className="card--image" alt=""/>
            <div className="card--stats">
                <img src={star} alt="" className="card--star" />
                <span>5.0</span>
                <span className="gray">(6) • </span>
                <span className="gray">USA</span>
                <p>Life Lessons with Katie Zaferes</p>
                <p><span className="bold">From $136</span> / person</p>
        </div>
        </div>
    )
}