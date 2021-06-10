import React from "react";
import { Center, Stack } from "@chakra-ui/react";
import { Formik, Form } from "formik";
import Header from "../components/Header";
import FormNavigationButtons from "../components/FormNavigationButtons";
// Fields
import PreviousHairRemovalMethodField from "../fields/PreviousHairRemovalMethodField";
import PreviousHairRemovalLocationField from "../fields/PreviousHairRemovalLocationField";
import PreviousHairRemovalTimePeriodStartField from "../fields/previousHairRemovalTimePeriodStartField";
import PreviousHairRemovalTimePeriodFinishField from "../fields/previousHairRemovalTimePeriodFinishField";
import PreviousHairRemovalTimePeriodCountField from "../fields/previousHairRemovalTimePeriodCountField";
import PreviousHairRemovalCurrentSituationField from "../fields/previousHairRemovalCurrentSituationField";
import PreviousHairRemovalCostField from "../fields/PreviousHairRemovalCostField";
import PreviousHairRemovalImpressionField from "../fields/PreviousHairRemovalImpressionField";

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
            previousHairRemovalTimePeriodStart: questionnaireState.previousHairRemovalTimePeriodStart || {
              year: undefined,
              month: undefined
            },
            previousHairRemovalTimePeriodFinish: questionnaireState.previousHairRemovalTimePeriodFinish || {
              year: undefined,
              month: undefined
            },
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
              actions.setSubmitting(false);
              onSubmit(values);
            }, 200);
          }}
        >
          {props => (
            <Form onSubmit={props.handleSubmit}>
              <Stack spacing="3" w="500px">
                <PreviousHairRemovalMethodField />
                <PreviousHairRemovalLocationField />
                <PreviousHairRemovalTimePeriodStartField />
                <PreviousHairRemovalTimePeriodFinishField />
                <PreviousHairRemovalTimePeriodCountField />
                <PreviousHairRemovalCurrentSituationField />
                <PreviousHairRemovalCostField />
                <PreviousHairRemovalImpressionField />
              </Stack>
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
