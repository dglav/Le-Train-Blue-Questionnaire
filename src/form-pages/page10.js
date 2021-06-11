import React from "react";
import { Center, Stack, Button, ButtonGroup, Input } from "@chakra-ui/react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage
} from "@chakra-ui/form-control";
import { Formik, Form, Field } from "formik";
import Header from "../components/Header";
import FormNavigationButtons from "../components/FormNavigationButtons";

function Page10({ questionnaireState, onSubmit, handleGoToPreviousPage }) {
  return (
    <>
      <Header />
      <Center m="8">
        <Formik
          initialValues={{
            hasHadARashFromEthanolDisinfectant:
              questionnaireState.hasHadARashFromEthanolDisinfectant,
            ethanolDisinfectantRashLocation:
              questionnaireState.ethanolDisinfectantRashLocation
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
                <Field name="hasHadARashFromEthanolDisinfectant">
                  {({ field, form }) => {
                    return (
                      <FormControl
                        isInvalid={
                          form.errors.hasHadARashFromEthanolDisinfectant &&
                          form.touched.hasHadARashFromEthanolDisinfectant
                        }
                      >
                        <FormLabel htmlFor="hasHadARashFromEthanolDisinfectant">
                          エタノール消毒でかぶれたことはありますか？
                        </FormLabel>
                        <ButtonGroup
                          isAttached
                          d="flex"
                          justifyContent="center"
                          colorScheme="blue"
                        >
                          <Button
                            onClick={() =>
                              form.setFieldValue(
                                "hasHadARashFromEthanolDisinfectant",
                                true
                              )
                            }
                            width="50%"
                            variant={field.value ? "solid" : "outline"}
                          >
                            はい
                          </Button>
                          <Button
                            onClick={() => {
                              form.setFieldValue(
                                "hasHadARashFromEthanolDisinfectant",
                                false
                              );
                              form.setFieldValue(
                                "ethanolDisinfectantRashLocation",
                                undefined
                              );
                              form.setFieldValue("rashCondition", undefined);
                            }}
                            width="50%"
                            variant={
                              !field.value && field.value !== undefined
                                ? "solid"
                                : "outline"
                            }
                          >
                            いいえ
                          </Button>
                        </ButtonGroup>
                        <FormErrorMessage>
                          {form.errors.hasHadARashFromEthanolDisinfectant}
                        </FormErrorMessage>
                      </FormControl>
                    );
                  }}
                </Field>
                <Field name="ethanolDisinfectantRashLocation">
                  {({ form, field }) => {
                    const isMedicinePurposeVisible =
                      form.getFieldProps("hasHadARashFromEthanolDisinfectant")
                        .value === true;

                    return (
                      isMedicinePurposeVisible && (
                        <FormControl
                          isInvalid={
                            form.errors.ethanolDisinfectantRashLocation &&
                            form.touched.ethanolDisinfectantRashLocation
                          }
                        >
                          <FormLabel htmlFor="ethanolDisinfectantRashLocation">
                            箇所は？
                          </FormLabel>
                          <Input
                            {...field}
                            id="ethanolDisinfectantRashLocation"
                            placeholder="箇所"
                          />
                          <FormErrorMessage>
                            {form.errors.ethanolDisinfectantRashLocation}
                          </FormErrorMessage>
                        </FormControl>
                      )
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

export default Page10;
