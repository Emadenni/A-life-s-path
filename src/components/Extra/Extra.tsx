import React from "react";
import Frame from "../Frame/Frame";
import "./extra.scss";

type Props = {};

const Extra = (props: Props) => {
  return (
    <div className="extra-wrapper">
      <Frame
        borderColor=" rgba(45, 9, 9, 0.02)"
        backgroundColor="  rgba(45, 9, 9, 0.04)"
        title="Extra"
        textDecorationColor="#2d0909e3"
      />
      <div className="extra-container">
        {" "}
        <span></span>
        <p>
          <strong>MY COMFORT ZONE:</strong>First and foremost, I am the father of{" "}
          <span className="lightRed">Martin</span> (7 years old) and<span className="lightRed"> Anastasia </span>(3
          years old), as well as the husband of <span className="lightRed">Marija</span>. Additionally,
          <span className="lightRed"> Kaya </span> has recently joined us, a wonderful female Labrador. Ours is a
          multicultural family; I am Italian, my wife is North Macedonian, we live in Sweden, but we primarily speak
          English among ourselves, and we ensure that this is an added value."
        </p>
        <p>
          <strong>WHAT I LIKE?:</strong> I am a big <span className="lightRed">football</span> lover and have played it
          for most of my life. I love <span className="lightRed"> music</span>, particularly progressive rock, roots and
          dub reggae, and electronic music. I enjoy <span className="lightRed">TV series and movies</span>, with
          thriller and pulp being my preferred genres. I feel at ease in <span className="lightRed">nature</span>,
          enjoying taking care of the <span className="lightRed">garden and hosting barbecue</span>  gatherings. Occasionally, I indulge in cooking
          traditional dishes from my country. In the field of IT, aside from programming, I sometimes enjoy 'playing'
          with AI and graphics in general. Among other things, I like creating logos.
        </p>
      </div>
    </div>
  );
};
export default Extra;
