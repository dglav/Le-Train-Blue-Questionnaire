import React from "react";
import { Button, Center, Stack } from "@chakra-ui/react";
import { Formik, Form } from "formik";
import Header from "../../components/organisms/Header";
import ReasonForUsingField from "../../components/molecules/ReasonForUsingField";

function PersonalInfoForm({ onSubmit }) {
  return (
    <>
      <Header />
      <Center m="8">
        <Formik
          initialValues={{
            reasonForUsingThisSalon: "",
            reasonForUsingThisSalonCustom: "",
            hairRemoval: {
              hasExperience: "",
              hasTrialExperience: "",
              trialExperienceSalonName: "",
              method: "",
              location: "",
              timePeriod: {
                start: "",
                finish: "",
                count: ""
              },
              currentSituation: "",
              cost: "",
              impression: ""
            }
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
              <Stack spacing="3" w="500px">
                <ReasonForUsingField />

                <Button
                  mt={4}
                  colorScheme="blue"
                  isLoading={props.isSubmitting}
                  type="submit"
                >
                  Submit
                </Button>
              </Stack>
            </Form>
          )}
        </Formik>
      </Center>
    </>
  );
}

export default PersonalInfoForm;
