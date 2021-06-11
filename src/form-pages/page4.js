import React from "react";
import {
  Center,
  Stack,
  Grid,
  GridItem,
  Checkbox,
  CheckboxGroup,
  Input
} from "@chakra-ui/react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage
} from "@chakra-ui/form-control";
import { Formik, Form, Field } from "formik";
import Header from "../components/Header";
import FormNavigationButtons from "../components/FormNavigationButtons";

function Page4({ questionnaireState, onSubmit, handleGoToPreviousPage }) {
  return (
    <>
      <Header />
      <Center m="8">
        <Formik
          initialValues={{
            experiencedAilments: questionnaireState.experiencedAilments,
            ailmentTimePeriod: questionnaireState.ailmentTimePeriod
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
                <Field name="experiencedAilments">
                  {({ field, form }) => {
                    return (
                      <FormControl
                        isInvalid={
                          form.errors.experiencedAilments &&
                          form.touched.experiencedAilments
                        }
                      >
                        <FormLabel htmlFor="experiencedAilments">
                          当サロンを利用と思ったきっかけはなんですか？
                        </FormLabel>
                        <CheckboxGroup
                          onChange={value => {
                            form.setFieldValue("experiencedAilments", value);
                            if (value.length === 0)
                              form.setFieldValue(
                                "ailmentTimePeriod",
                                undefined
                              );
                          }}
                          defaultValue={field.value || []}
                        >
                          <Grid
                            templateRows="repeat(10, 1fr)"
                            templateColumns="repeat(2, 1fr)"
                          >
                            <GridItem rowSpan={1} colSpan={1}>
                              <Checkbox value="糖尿病">糖尿病</Checkbox>
                            </GridItem>
                            <GridItem rowSpan={1} colSpan={1}>
                              <Checkbox value="肝臓病">肝臓病</Checkbox>
                            </GridItem>
                            <GridItem rowSpan={1} colSpan={1}>
                              <Checkbox value="心臓病">心臓病</Checkbox>
                            </GridItem>
                            <GridItem rowSpan={1} colSpan={1}>
                              <Checkbox value="ぜんそく">ぜんそく</Checkbox>
                            </GridItem>
                            <GridItem rowSpan={1} colSpan={1}>
                              <Checkbox value="ケロイド体質">
                                ケロイド体質
                              </Checkbox>
                            </GridItem>
                            <GridItem rowSpan={1} colSpan={1}>
                              <Checkbox value="ピル">ピル</Checkbox>
                            </GridItem>
                            <GridItem rowSpan={1} colSpan={1}>
                              <Checkbox value="アレルギー体質">
                                アレルギー体質
                              </Checkbox>
                            </GridItem>
                            <GridItem rowSpan={1} colSpan={1}>
                              <Checkbox value="皮膚炎">皮膚炎</Checkbox>
                            </GridItem>
                            <GridItem rowSpan={1} colSpan={1}>
                              <Checkbox value="伝染病">伝染病</Checkbox>
                            </GridItem>
                            <GridItem rowSpan={1} colSpan={1}>
                              <Checkbox value="賢蔵病">賢臓病</Checkbox>
                            </GridItem>
                            <GridItem rowSpan={1} colSpan={1}>
                              <Checkbox value="てんかん">てんかん</Checkbox>
                            </GridItem>
                            <GridItem rowSpan={1} colSpan={1}>
                              <Checkbox value="アトピー性皮膚炎">
                                アトピー性皮膚炎
                              </Checkbox>
                            </GridItem>
                            <GridItem rowSpan={1} colSpan={1}>
                              <Checkbox value="豊胸">豊胸</Checkbox>
                            </GridItem>
                            <GridItem rowSpan={1} colSpan={1}>
                              <Checkbox value="血液の病気">血液の病気</Checkbox>
                            </GridItem>
                            <GridItem rowSpan={1} colSpan={1}>
                              <Checkbox value="X腺治療">X腺治療</Checkbox>
                            </GridItem>
                            <GridItem rowSpan={1} colSpan={1}>
                              <Checkbox value="紫外線（日光）アレルギ">
                                紫外線（日光）アレルギ
                              </Checkbox>
                            </GridItem>
                            <GridItem rowSpan={1} colSpan={1}>
                              <Checkbox value="福交感皮質ホルモン剤使用">
                                福交感皮質ホルモン剤使用
                              </Checkbox>
                            </GridItem>
                            <GridItem rowSpan={1} colSpan={1}>
                              <Checkbox value="刺青">刺青</Checkbox>
                            </GridItem>
                            <GridItem rowSpan={1} colSpan={1}>
                              <Checkbox value="その他">その他</Checkbox>
                            </GridItem>
                          </Grid>
                        </CheckboxGroup>
                        <FormErrorMessage>
                          {form.errors.experiencedAilments}
                        </FormErrorMessage>
                      </FormControl>
                    );
                  }}
                </Field>
                <Field name="ailmentTimePeriod">
                  {({ field, form }) => {
                    const isAilmentTimePeriodVisible =
                      form.getFieldProps("experiencedAilments").value?.length >
                      0;

                    return (
                      isAilmentTimePeriodVisible && (
                        <FormControl
                          isInvalid={
                            form.errors.ailmentTimePeriod &&
                            form.touched.ailmentTimePeriod
                          }
                        >
                          <FormLabel htmlFor="ailmentTimePeriod">
                            いつ頃？
                          </FormLabel>
                          <Input
                            {...field}
                            id="ailmentTimePeriod"
                            placeholder="いつ頃？"
                          />
                          <FormErrorMessage>
                            {form.errors.ailmentTimePeriod}
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

export default Page4;
