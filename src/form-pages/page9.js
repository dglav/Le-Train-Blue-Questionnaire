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

function Page9({ questionnaireState, onSubmit, handleGoToPreviousPage }) {
  return (
    <>
      <Header />
      <Center m="8">
        <Formik
          initialValues={{
            hasHadARash: questionnaireState.hasHadARash,
            rashTimePeriod: questionnaireState.rashTimePeriod,
            rashCondition: questionnaireState.rashCondition
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
                <Field name="hasHadARash">
                  {({ field, form }) => {
                    return (
                      <FormControl
                        isInvalid={
                          form.errors.hasHadARash && form.touched.hasHadARash
                        }
                      >
                        <FormLabel htmlFor="hasHadARash">
                          かぶれの経験はありますか？
                        </FormLabel>
                        <ButtonGroup
                          isAttached
                          d="flex"
                          justifyContent="center"
                          colorScheme="blue"
                        >
                          <Button
                            onClick={() =>
                              form.setFieldValue("hasHadARash", true)
                            }
                            flexGrow="1"
                            variant={field.value ? "solid" : "outline"}
                          >
                            はい
                          </Button>
                          <Button
                            onClick={() => {
                              form.setFieldValue("hasHadARash", false);
                              form.setFieldValue("rashTimePeriod", undefined);
                              form.setFieldValue("rashCondition", undefined);
                            }}
                            flexGrow="1"
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
                          {form.errors.hasHadARash}
                        </FormErrorMessage>
                      </FormControl>
                    );
                  }}
                </Field>
                <Field name="rashTimePeriod">
                  {({ form, field }) => {
                    const isMedicinePurposeVisible =
                      form.getFieldProps("hasHadARash").value === true;

                    return (
                      isMedicinePurposeVisible && (
                        <FormControl
                          isInvalid={
                            form.errors.rashTimePeriod &&
                            form.touched.rashTimePeriod
                          }
                        >
                          <FormLabel htmlFor="rashTimePeriod">いつ</FormLabel>
                          <Input
                            {...field}
                            id="rashTimePeriod"
                            placeholder="いつ"
                          />
                          <FormErrorMessage>
                            {form.errors.rashTimePeriod}
                          </FormErrorMessage>
                        </FormControl>
                      )
                    );
                  }}
                </Field>
                <Field name="rashCondition">
                  {({ field, form }) => {
                    const isMedicineNameVisible =
                      form.getFieldProps("hasHadARash").value === true;
                    return (
                      isMedicineNameVisible && (
                        <FormControl
                          isInvalid={
                            form.errors.rashCondition &&
                            form.touched.rashCondition
                          }
                        >
                          <FormLabel htmlFor="rashCondition">状況</FormLabel>
                          <Input
                            {...field}
                            id="rashCondition"
                            placeholder="状況"
                          />
                          <FormErrorMessage>
                            {form.errors.rashCondition}
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

export default Page9;
