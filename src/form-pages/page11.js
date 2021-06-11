import React from "react";
import {
  Center,
  Stack,
  Radio,
  RadioGroup,
  Input,
  Grid,
  GridItem
} from "@chakra-ui/react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage
} from "@chakra-ui/form-control";
import { Formik, Form, Field } from "formik";
import Header from "../components/Header";
import FormNavigationButtons from "../components/FormNavigationButtons";

function Page11({ questionnaireState, onSubmit, handleGoToPreviousPage }) {
  return (
    <>
      <Header />
      <Center m="8">
        <Formik
          initialValues={{
            resultOfExposureToUVLight:
              questionnaireState.resultOfExposureToUVLight,
            resultOfExposureToUVLightOther:
              questionnaireState.resultOfExposureToUVLightOther
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
                <Field name="resultOfExposureToUVLight">
                  {({ field, form }) => {
                    return (
                      <FormControl
                        isInvalid={
                          form.errors.resultOfExposureToUVLight &&
                          form.touched.resultOfExposureToUVLight
                        }
                      >
                        <FormLabel htmlFor="resultOfExposureToUVLight">
                          紫外線にあたった時のお肌の様子について
                        </FormLabel>
                        <RadioGroup
                          onChange={value => {
                            form.setFieldValue(field.name, value);
                            form.setFieldValue(
                              "resultOfExposureToUVLightOther",
                              undefined
                            );
                          }}
                          value={field.value}
                        >
                          <Grid
                            templateRows="repeat(2, 1fr)"
                            templateColumns="repeat(2, 1fr)"
                          >
                            <GridItem rowSpan={1} colSpan={1}>
                              <Radio value="吸収して黒くなる">
                                吸収して黒くなる
                              </Radio>
                            </GridItem>
                            <GridItem rowSpan={1} colSpan={1}>
                              <Radio value="赤くなってすぐひく">
                                赤くなってすぐひく
                              </Radio>
                            </GridItem>
                            <GridItem rowSpan={1} colSpan={1}>
                              <Radio value="その他">その他</Radio>
                            </GridItem>
                          </Grid>
                        </RadioGroup>
                        <FormErrorMessage>
                          {form.errors.resultOfExposureToUVLight}
                        </FormErrorMessage>
                      </FormControl>
                    );
                  }}
                </Field>

                <Field name="resultOfExposureToUVLightOther">
                  {({ field, form }) => {
                    const isOtherVisible =
                      form.getFieldProps("resultOfExposureToUVLight").value ===
                      "その他";
                    return (
                      isOtherVisible && (
                        <FormControl
                          isInvalid={
                            form.errors.resultOfExposureToUVLightOther &&
                            form.touched.resultOfExposureToUVLightOther
                          }
                        >
                          <FormLabel htmlFor="resultOfExposureToUVLightOther">
                            箇所は？
                          </FormLabel>
                          <Input
                            {...field}
                            id="resultOfExposureToUVLightOther"
                            placeholder="箇所"
                          />
                          <FormErrorMessage>
                            {form.errors.resultOfExposureToUVLightOther}
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

export default Page11;
