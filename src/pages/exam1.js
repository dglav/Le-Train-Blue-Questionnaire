import React, { useState } from "react";
import Questionnaire from "../templates/Questionnaire";
import Panel from "../components/atoms/Panel";
import InputButton from "../components/atoms/InputButton";
import NumberInput from "../components/atoms/NumberInput";
import TextInput from "../components/atoms/TextInput";

const pageCount = 2;

const Exam1 = () => {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <Questionnaire setCurrentPage={setCurrentPage} pageCount={pageCount}>
      {currentPage === 1 && <Page1 />}
      {currentPage === 2 && <Page2 />}
    </Questionnaire>
  );
};

const Page1 = () => {
  const [hasExaminationTicket, setHasExaminationTicket] = useState(null);
  const [examinationTicketNumber, setExaminationTicketNumber] = useState(null);
  const [examinationDate, setExaminationDate] = useState(new Date());

  console.log({ examinationDate });

  return (
    <>
      <Panel
        title="当院の診察券をお持ちですか？"
        content={
          <div className="flex justify-between w-5/6">
            <InputButton
              text="はい"
              isSelected={!!hasExaminationTicket}
              onClick={() => setHasExaminationTicket(true)}
            />
            <InputButton
              text="いいえ"
              isSelected={hasExaminationTicket === false}
              onClick={() => setHasExaminationTicket(false)}
            />
          </div>
        }
      />
      {hasExaminationTicket && (
        <section>
          <Panel
            title="診察券番号"
            content={<NumberInput onInput={setExaminationTicketNumber} />}
          />
        </section>
      )}
    </>
  );
};

const Page2 = () => {
  return (
    <Panel
      title="氏名"
      content={<TextInput onInput={input => console.log(input)} />}
    />
  );
};

export default Exam1;
