import React from "react";

const Playlist: React.FC = () => {
  return (
    <div>
      <iframe
        className="playlist"
        src="https://open.spotify.com/embed/playlist/0MO6qpgNfEg0sOva78sjFl?utm_source=generator"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default Playlist;
