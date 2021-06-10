import React, { useState } from "react";
import PersonalInfoPage from "../form-pages/personalinfo";
import QuestionnairePage1 from "../form-pages/page1";
import QuestionnairePage2 from "../form-pages/page2";
import QuestionnairePage3 from "../form-pages/page3";
import QuestionnairePage4 from "../form-pages/page4";
import QuestionnairePage5 from "../form-pages/page5";
import QuestionnairePage6 from "../form-pages/page6";
import QuestionnairePage7 from "../form-pages/page7";

const IndexPage = () => {
  const [questionnaireState, setQuestionnaireState] = useState({});
  const [pageNumber, setPageNumber] = useState(7);

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
      {pageNumber === 4 && (
        <QuestionnairePage4
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
      {pageNumber === 5 && (
        <QuestionnairePage5
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
      {pageNumber === 6 && (
        <QuestionnairePage6
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
      {pageNumber === 7 && (
        <QuestionnairePage7
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
