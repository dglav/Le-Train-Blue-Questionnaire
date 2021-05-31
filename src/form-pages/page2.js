import React from "react";
import { Center, Stack } from "@chakra-ui/react";
import { Formik, Form } from "formik";
import Header from "../components/Header";
import FormNavigationButtons from "../components/FormNavigationButtons";
import HasHairRemovalExperienceField from "../fields/HasHairRemovalExperienceField";

function Page2({ questionnaireState, onSubmit, handleGoToPreviousPage }) {
  return (
    <>
      <Header />
      <Center m="8">
        <Formik
          initialValues={{
            hasHairRemovalExperience:
              questionnaireState.hasHairRemovalExperience
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
                <HasHairRemovalExperienceField />
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

export default Page2;
