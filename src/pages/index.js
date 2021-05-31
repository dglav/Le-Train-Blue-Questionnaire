import React, { useState } from "react";
import PersonalInfoPage from "./personalinfo";
import QuestionnairePage1 from "./questionnaire/page1";
import QuestionnairePage2 from "./questionnaire/page2";
import QuestionnairePage3 from "./questionnaire/page3";
import QuestionnairePage4 from "./questionnaire/page4";

const IndexPage = () => {
  const [questionnaireState, setQuestionnaireState] = useState({});
  const [pageNumber, setPageNumber] = useState(1);

  return (
    <>
      {pageNumber === 0 && (
        <PersonalInfoPage
          questionnaireState={questionnaireState}
          onSubmit={data => {
            setQuestionnaireState({ ...questionnaireState, ...data });
            setPageNumber(pageNumber => pageNumber + 1);
          }}
        />
      )}
      {pageNumber === 1 && (
        <QuestionnairePage1
          questionnaireState={questionnaireState}
          onSubmit={data => {
            setQuestionnaireState({ ...questionnaireState, ...data });
            setPageNumber(pageNumber => pageNumber + 1);
          }}
          handleGoToPreviousPage={data => {
            setQuestionnaireState({ ...questionnaireState, ...data });
            setPageNumber(pageNumber => pageNumber - 1);
          }}
        />
      )}
      {pageNumber === 2 && (
        <QuestionnairePage2
          questionnaireState={questionnaireState}
          onSubmit={data => {
            setQuestionnaireState({ ...questionnaireState, ...data });
            setPageNumber(pageNumber => pageNumber + 1);
          }}
          handleGoToPreviousPage={data => {
            setQuestionnaireState({ ...questionnaireState, ...data });
            setPageNumber(pageNumber => pageNumber - 1);
          }}
        />
      )}
      {pageNumber === 3 && (
        <QuestionnairePage3
          questionnaireState={questionnaireState}
          handleGoToPreviousPage={data => {
            setQuestionnaireState({ ...questionnaireState, ...data });
            setPageNumber(pageNumber => pageNumber - 1);
          }}
        />
      )}
      {pageNumber === 4 && (
        <QuestionnairePage4
          questionnaireState={questionnaireState}
          handleGoToPreviousPage={data => {
            setQuestionnaireState({ ...questionnaireState, ...data });
            setPageNumber(pageNumber => pageNumber - 1);
          }}
        />
      )}
    </>
  );
};

export default IndexPage;
