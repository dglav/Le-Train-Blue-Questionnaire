import React from "React";
import Body from "../components/Body";
import Header from "../components/organisms/Header";
import Button from "../components/atoms/Button";

const Questionnaire = ({ setCurrentPage, pageCount, children }) => {
  return (
    <Body>
      <Header />
      <div className="container mx-auto pt-8">
        <p className="text-3xl text-center mb-8">問診票</p>
        <div className="pb-8">{children}</div>
      </div>
      <div className="flex justify-center">
        <div className="flex justify-between w-3/5 ">
          <Button
            text="戻る"
            onClick={() =>
              setCurrentPage(currentPage =>
                currentPage === 1 ? currentPage : currentPage - 1
              )
            }
          />
          <Button
            text="進む"
            onClick={() =>
              setCurrentPage(currentPage =>
                currentPage === pageCount ? currentPage : currentPage + 1
              )
            }
          />
        </div>
      </div>
    </Body>
  );
};

export default Questionnaire;
