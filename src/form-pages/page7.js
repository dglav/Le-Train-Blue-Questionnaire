import React from "react";
import {
  Center,
  Stack,
  Checkbox,
  CheckboxGroup,
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

function Page7({ questionnaireState, onSubmit, handleGoToPreviousPage }) {
  return (
    <>
      <Header />
      <Center m="8">
        <Formik
          initialValues={{
            skinType: questionnaireState.skinType,
            skinTypeWhere: questionnaireState.skinTypeWhere,
            skinTypePeriod: questionnaireState.skinTypePeriod
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
                <Field name="skinType">
                  {({ field, form }) => {
                    return (
                      <FormControl
                        isInvalid={
                          form.errors.skinType && form.touched.skinType
                        }
                      >
                        <FormLabel htmlFor="skinType">肌質について</FormLabel>
                        <CheckboxGroup
                          onChange={value => {
                            form.setFieldValue("skinType", value);
                          }}
                          defaultValue={[]}
                        >
                          <Grid
                            templateRows="repeat(3, 1fr)"
                            templateColumns="repeat(2, 1fr)"
                          >
                            <GridItem rowSpan={1} colSpan={1}>
                              <Checkbox value="普通肌">普通肌</Checkbox>
                            </GridItem>
                            <GridItem rowSpan={1} colSpan={1}>
                              <Checkbox value="乾燥肌">乾燥肌</Checkbox>
                            </GridItem>
                            <GridItem rowSpan={1} colSpan={1}>
                              <Checkbox value="脂性肌">脂性肌</Checkbox>
                            </GridItem>
                            <GridItem rowSpan={1} colSpan={1}>
                              <Checkbox value="ニキビ肌">ニキビ肌</Checkbox>
                            </GridItem>
                            <GridItem rowSpan={1} colSpan={1}>
                              <Checkbox value="アトピー肌">アトピー肌</Checkbox>
                            </GridItem>
                            <GridItem rowSpan={1} colSpan={1}>
                              <Checkbox value="その他">その他</Checkbox>
                            </GridItem>
                          </Grid>
                        </CheckboxGroup>
                        <FormErrorMessage>
                          {form.errors.skinType}
                        </FormErrorMessage>
                      </FormControl>
                    );
                  }}
                </Field>

                <Field name="skinTypeWhere">
                  {({ field, form }) => (
                    <FormControl
                      isInvalid={
                        form.errors.skinTypeWhere && form.touched.skinTypeWhere
                      }
                    >
                      <FormLabel htmlFor="skinTypeWhere">箇所は？</FormLabel>
                      <Input {...field} id="skinTypeWhere" placeholder="箇所" />
                      <FormErrorMessage>
                        {form.errors.skinTypeWhere}
                      </FormErrorMessage>
                    </FormControl>
                  )}
                </Field>

                <Field name="skinTypePeriod">
                  {({ field, form }) => (
                    <FormControl
                      isInvalid={
                        form.errors.skinTypePeriod &&
                        form.touched.skinTypePeriod
                      }
                    >
                      <FormLabel htmlFor="skinTypePeriod">
                        時期（季節）は？
                      </FormLabel>
                      <Input
                        {...field}
                        id="skinTypePeriod"
                        placeholder="時期（季節）"
                      />
                      <FormErrorMessage>
                        {form.errors.skinTypePeriod}
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

export default Page7;
