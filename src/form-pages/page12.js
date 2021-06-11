import React from "react";
import { Center, Stack, Textarea } from "@chakra-ui/react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage
} from "@chakra-ui/form-control";
import { Formik, Form, Field } from "formik";
import Header from "../components/Header";
import FormNavigationButtons from "../components/FormNavigationButtons";

function Page12({ questionnaireState, onSubmit, handleGoToPreviousPage }) {
  return (
    <>
      <Header />
      <Center m="8">
        <Formik
          initialValues={{
            selfCareWorry: questionnaireState.selfCareWorry
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
                <Field name="selfCareWorry">
                  {({ field, form }) => {
                    return (
                      <FormControl
                        isInvalid={
                          form.errors.selfCareWorry &&
                          form.touched.selfCareWorry
                        }
                      >
                        <FormLabel htmlFor="selfCareWorry">
                          自己処理で気になったことはありますか？
                        </FormLabel>
                        <Textarea {...field} />
                        <FormErrorMessage>
                          {form.errors.selfCareWorry}
                        </FormErrorMessage>
                      </FormControl>
                    );
                  }}
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

export default Page12;
