import React from "react";
import {
  Center,
  Stack,
  Button,
  ButtonGroup,
  Input,
  Flex,
  Text
} from "@chakra-ui/react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage
} from "@chakra-ui/form-control";
import { Formik, Form, Field } from "formik";
import Header from "../components/Header";
import FormNavigationButtons from "../components/FormNavigationButtons";

function Page6({ questionnaireState, onSubmit, handleGoToPreviousPage }) {
  return (
    <>
      <Header />
      <Center m="8">
        <Formik
          initialValues={{
            menstrualCycleType: questionnaireState.menstrualCycleType,
            menstrualCycleRegularPeriod:
              questionnaireState.menstrualCycleRegularPeriod || "",
            menstrualCycleIrregularPeriod: questionnaireState.menstrualCycleIrregularPeriod || {
              lowerDayLimit: undefined,
              upperDayLimit: undefined
            }
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
                <Field name="menstrualCycleType">
                  {({ field, form }) => {
                    return (
                      <FormControl
                        isInvalid={
                          form.errors.menstrualCycleType &&
                          form.touched.menstrualCycleType
                        }
                      >
                        <FormLabel htmlFor="menstrualCycleType">
                          月経周期
                        </FormLabel>
                        <ButtonGroup
                          isAttached
                          d="flex"
                          justifyContent="center"
                          colorScheme="blue"
                        >
                          <Button
                            onClick={() => {
                              form.setFieldValue("menstrualCycleType", "順調");
                              form.setFieldValue(
                                "menstrualCycleIrregularPeriod",
                                {
                                  lowerDayLimit: undefined,
                                  upperDayLimit: undefined
                                }
                              );
                            }}
                            flexGrow="1"
                            variant={
                              field.value === "順調" ? "solid" : "outline"
                            }
                          >
                            順調
                          </Button>
                          <Button
                            onClick={() => {
                              form.setFieldValue("menstrualCycleType", "不順");
                              form.setFieldValue(
                                "menstrualCycleRegularPeriod",
                                undefined
                              );
                            }}
                            flexGrow="1"
                            variant={
                              field.value === "不順" ? "solid" : "outline"
                            }
                          >
                            不順
                          </Button>
                          <Button
                            onClick={() => {
                              form.setFieldValue("menstrualCycleType", "閉経");
                              form.setFieldValue(
                                "menstrualCycleRegularPeriod",
                                undefined
                              );
                              form.setFieldValue(
                                "menstrualCycleIrregularPeriod",
                                {
                                  lowerDayLimit: undefined,
                                  upperDayLimit: undefined
                                }
                              );
                            }}
                            flexGrow="1"
                            variant={
                              field.value === "閉経" ? "solid" : "outline"
                            }
                          >
                            閉経
                          </Button>
                        </ButtonGroup>
                        <FormErrorMessage>
                          {form.errors.menstrualCycleType}
                        </FormErrorMessage>
                      </FormControl>
                    );
                  }}
                </Field>

                <Field name="menstrualCycleRegularPeriod">
                  {({ field, form }) => {
                    const isMedicineNameVisible =
                      form.getFieldProps("menstrualCycleType").value === "順調";
                    return (
                      isMedicineNameVisible && (
                        <FormControl
                          isInvalid={
                            form.errors.menstrualCycleRegularPeriod &&
                            form.touched.menstrualCycleRegularPeriod
                          }
                        >
                          <FormLabel htmlFor="menstrualCycleRegularPeriod">
                            周期
                          </FormLabel>
                          <Input
                            {...field}
                            id="menstrualCycleRegularPeriod"
                            placeholder="日数"
                          />
                          <FormErrorMessage>
                            {form.errors.menstrualCycleRegularPeriod}
                          </FormErrorMessage>
                        </FormControl>
                      )
                    );
                  }}
                </Field>

                <Field name="menstrualCycleIrregularPeriod">
                  {({ field, form }) => {
                    const isMenstrualCycleIrregularPeriodVisible =
                      form.getFieldProps("menstrualCycleType").value === "不順";
                    return (
                      isMenstrualCycleIrregularPeriodVisible && (
                        <FormControl
                          isInvalid={
                            form.errors.menstrualCycleIrregularPeriod &&
                            form.touched.menstrualCycleIrregularPeriod
                          }
                        >
                          <FormLabel htmlFor="menstrualCycleIrregularPeriod">
                            周期
                          </FormLabel>
                          <Flex alignItems="center">
                            <Input
                              id="menstrualCycleIrregularPeriod"
                              placeholder="日数"
                              value={field.value.lowerDayLimit || ""}
                              onChange={event =>
                                form.setFieldValue(field.name, {
                                  ...field.value,
                                  lowerDayLimit: event.target.value
                                })
                              }
                            />
                            <Text px={3}>〜</Text>
                            <Input
                              id="menstrualCycleIrregularPeriod"
                              placeholder="日数"
                              value={field.value.upperDayLimit || ""}
                              onChange={event =>
                                form.setFieldValue(field.name, {
                                  ...field.value,
                                  upperDayLimit: event.target.value
                                })
                              }
                            />
                          </Flex>
                          <FormErrorMessage>
                            {form.errors.menstrualCycleIrregularPeriod}
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

export default Page6;
