import React, { useEffect } from "react";
import Router from "next/router";

function thankingyou() {
  useEffect(() => {
    Router.push(
      "https://api.whatsapp.com/send/?phone=919811124255&text=Hello"
     
    );
  }, []);
  return <></>;
}

export default thankingyou;
