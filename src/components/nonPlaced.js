import React, {useState, useEffect} from "react";
import "./nonPlaced.css";
import axios from "axios";

const NonPlacedStud =() => {
    const [nonPlaced, setNonPlaced] = useState("");

    // const getNonPlaced = () => {
    //     axios
    //       .get("http://localhost:5000/getnonPlaced")
    //       .then((data) => {
    //         setNonPlaced(data.data);
    //       })
    //       .catch((err) => console.log(err));
    //   };
    
    //   useEffect(() => {
    //     getNonPlaced();
    //   }, []);

    return(
        <div className="nonplaced">
          <center>
            <h2>OBJECTIVES</h2>
            <h3>

            To nurture and mentor the students through aptitude and technical training and make them industry-ready.<br />

To facilitate the students plug and play by imparting soft skills and employability skills.<br />

To foster Industry – Institution relationship by signing MoUs and establishing Centers of Excellence.<br />

To give exposure to students on pursuing higher studies abroad and in India through lectures by eminent personalities and individual guidance.<br />

To impart technical training by the respective department to improve the tangent thoughts on technical skills through Workshop, Paper Presentation, Seminars and Projects.<br />

To enhance communication skills by carrying out Group Discussion, Seminars and extempore.<br />
            </h3>
            </center>
        </div>
    );
};

export default NonPlacedStud;