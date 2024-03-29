import React, { useEffect } from 'react';

const Chat: React.FC = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.src = 'https://embed.tawk.to/66073233a0c6737bd1265435/1hq61o6sd';
    script.charset = 'UTF-8';
    script.setAttribute('crossorigin', '*');

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null; // Questo componente non renderizza nulla visibile
};

export default Chat;
