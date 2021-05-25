import React, { useState } from "react";
// import emailjs from "emailjs-com";
import PersonalInfoPage from "./personalinfo";

// emailjs.init("user_YR6zwq0eqeK819WMTB5G9");

// function sendEmail(blob) {
//   emailjs
//     .send("default_service", "template_c5ua2zl", {
//       to_name: "toDrew",
//       from_name: "fromDrew",
//       message: "hi drew!",
//       content: blob
//     })
//     .then(
//       result => {
//         console.log(result.text);
//       },
//       error => {
//         console.log(error.text);
//       }
//     );
// }

const IndexPage = () => {
  const [values, setValues] = useState({});
  const [pageNumber, setPageNumber] = useState(1);

  console.log({ values });
  console.log({ pageNumber });

  return (
    <>
      {pageNumber === 1 && (
        <PersonalInfoPage
          onSubmit={data => {
            console.log(data);
            setValues({ personalInfo: data });
            setPageNumber(2);
          }}
        />
      )}
    </>
  );
};

export default IndexPage;
