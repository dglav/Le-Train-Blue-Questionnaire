import React from "react";
// import emailjs from "emailjs-com";
import Body from "../components/Body";
import Header from "../components/organisms/Header";
import ExamList from "../components/molecules/ExamList";

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
  return (
    <Body>
      <Header />
      <ExamList />
    </Body>
  );
};

export default IndexPage;
