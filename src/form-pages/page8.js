import React from "react";
import { Center, Stack, Textarea, Text, Box } from "@chakra-ui/react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage
} from "@chakra-ui/form-control";
import { Formik, Form, Field } from "formik";
import Header from "../components/Header";
import FormNavigationButtons from "../components/FormNavigationButtons";

function Page8({ questionnaireState, onSubmit, handleGoToPreviousPage }) {
  return (
    <>
      <Header />
      <Center m="8">
        <Formik
          initialValues={{
            skinCareDescription: questionnaireState.skinCareDescription
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
                <Field name="skinCareDescription">
                  {({ field, form }) => {
                    return (
                      <FormControl
                        isInvalid={
                          form.errors.skinCareDescription &&
                          form.touched.skinCareDescription
                        }
                      >
                        <FormLabel htmlFor="skinCareDescription">
                          普段のお肌のお手入れ方法についてご記入ください。
                        </FormLabel>
                        <Box mb={4}>
                          <Text fontSize="sm">(例)</Text>
                          <Text fontSize="sm">
                            ２〜３日に一回程度。全身に市販のボディークリームを塗る。
                          </Text>
                          <Text fontSize="sm">
                            腕だけ日焼け止めと保湿を毎日する。冬や日焼けした時にだけ保湿する。
                          </Text>
                          <Text fontSize="sm">
                            エステサロンのクリーム・日焼け止めを毎日全身に塗る。
                          </Text>
                        </Box>
                        <Textarea {...field} />
                        <FormErrorMessage>
                          {form.errors.skinCareDescription}
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

export default Page8;
