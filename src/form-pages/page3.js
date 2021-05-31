import React from "react";
import { Center, Stack } from "@chakra-ui/react";
import { Formik, Form } from "formik";
import Header from "../components/Header";
import FormNavigationButtons from "../components/FormNavigationButtons";

function Page3({ questionnaireState, onSubmit, handleGoToPreviousPage }) {
  return (
    <>
      <Header />
      <Center m="8">
        <Formik
          initialValues={{
            previousHairRemovalMethod:
              questionnaireState.previousHairRemovalMethod,
            previousHairRemovalLocation:
              questionnaireState.previousHairRemovalLocation,
            previousHairRemovalTimePeriodStart:
              questionnaireState.previousHairRemovalTimePeriodStart,
            previousHairRemovalTimePeriodFinish:
              questionnaireState.previousHairRemovalTimePeriodFinish,
            previousHairRemovalTimePeriodCount:
              questionnaireState.previousHairRemovalTimePeriodCount,
            previousHairRemovalCurrentSituation:
              questionnaireState.previousHairRemovalCurrentSituation,
            previousHairRemovalCost: questionnaireState.previousHairRemovalCost,
            previousHairRemovalImpression:
              questionnaireState.previousHairRemovalImpression
          }}
          onSubmit={(values, actions) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              actions.setSubmitting(false);
              onSubmit(values);
            }, 1000);
          }}
        >
          {props => (
            <Form onSubmit={props.handleSubmit}>
              <Stack spacing="3" w="500px"></Stack>
              <FormNavigationButtons
                onSubmit={onSubmit}
                handleGoToPreviousPage={handleGoToPreviousPage}
                isLoading={props.isSubmitting}
                values={props.values}
              />
            </Form>
          )}
        </Formik>
      </Center>
    </>
  );
}

export default Page3;
