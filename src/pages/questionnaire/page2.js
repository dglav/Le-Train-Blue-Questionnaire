import React from "react";
import { ButtonGroup, Button, Center, Stack } from "@chakra-ui/react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage
} from "@chakra-ui/form-control";
import { Formik, Form, Field } from "formik";
import Header from "../../components/organisms/Header";
import FormNavigationButtons from "../../components/molecules/FormNavigationButtons";

function Page2({ questionnaireState, onSubmit, handleGoToPreviousPage }) {
  return (
    <>
      <Header />
      <Center m="8">
        <Formik
          initialValues={{
            hasHairRemovalExperience:
              questionnaireState.hasHairRemovalExperience,
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
              actions.setSubmitting(false);
              onSubmit(values);
            }, 200);
          }}
        >
          {props => (
            <Form onSubmit={props.handleSubmit}>
              <Stack spacing="3" w="500px">
                <Field name="hasHairRemovalExperience">
                  {({ field, form }) => (
                    <FormControl
                      isInvalid={
                        form.errors.hasHairRemovalExperience &&
                        form.touched.hasHairRemovalExperience
                      }
                      isRequired
                    >
                      <FormLabel htmlFor="hasHairRemovalExperience">
                        脱毛サロンの経験はありますか？
                      </FormLabel>
                      <ButtonGroup
                        isAttached
                        d="flex"
                        justifyContent="center"
                        colorScheme="blue"
                      >
                        <Button
                          onClick={() =>
                            form.setFieldValue("hasHairRemovalExperience", true)
                          }
                          flexGrow="1"
                          variant={field.value ? "solid" : "outline"}
                        >
                          はい
                        </Button>
                        <Button
                          onClick={() =>
                            form.setFieldValue(
                              "hasHairRemovalExperience",
                              false
                            )
                          }
                          flexGrow="1"
                          variant={
                            !field.value && field.value !== ""
                              ? "solid"
                              : "outline"
                          }
                        >
                          いいえ
                        </Button>
                      </ButtonGroup>
                      <FormErrorMessage>
                        {form.errors.hasHairRemovalExperience}
                      </FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
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
