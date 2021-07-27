import React from "react";

function NotFound(props) {
  return (
    <>
      <body className="">
        <div className="colorresults  failclass">
          <h2>
            Lo siento!!no hay nada que coincida con 
            <strong class="failcolorfont">
                [ {props.filterNamePerson} ]  
               </strong>
             ,prueba de nuevo
          </h2>
        </div>
      </body>
    </>
  );
}
export default NotFound;
