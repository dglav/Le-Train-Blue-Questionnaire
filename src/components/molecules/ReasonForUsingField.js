import React from "react";
import { Input, RadioGroup, Radio, Grid, GridItem } from "@chakra-ui/react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage
} from "@chakra-ui/form-control";
import { Field } from "formik";

const ReasonForUsingField = () => {
  return (
    <>
      <Field name="reasonForUsingThisSalon">
        {({ field, form }) => (
          <FormControl
            isInvalid={
              form.errors.reasonForUsingThisSalon &&
              form.touched.reasonForUsingThisSalon
            }
          >
            <FormLabel htmlFor="reasonForUsingThisSalon">
              当サロンを利用と思ったきっかけはなんですか？
            </FormLabel>
            <RadioGroup
              onChange={value => {
                form.setFieldValue(field.name, value);
                const shouldResetIntroducedBy = field.value !== "ご紹介";
                if (shouldResetIntroducedBy)
                  form.setFieldValue("introducedBy", "");
              }}
              value={field.value}
            >
              <Grid
                templateRows="repeat(3, 1fr)"
                templateColumns="repeat(3, 1fr)"
              >
                <GridItem rowSpan={1} colSpan={1}>
                  <Radio value="イーノ">イーノ</Radio>
                </GridItem>
                <GridItem rowSpan={1} colSpan={1}>
                  <Radio value="ホットペッパー">ホットペッパー</Radio>
                </GridItem>
                <GridItem rowSpan={1} colSpan={1}>
                  <Radio value="HP">HP</Radio>
                </GridItem>
                <GridItem rowSpan={1} colSpan={1}>
                  <Radio value="チラシ">チラシ</Radio>
                </GridItem>
                <GridItem rowSpan={1} colSpan={1}>
                  <Radio value="ブログ">ブログ</Radio>
                </GridItem>
                <GridItem rowSpan={1} colSpan={1}>
                  <Radio value="フェイスブック">フェイスブック</Radio>
                </GridItem>
                <GridItem rowSpan={1} colSpan={1}>
                  <Radio value="その他">その他</Radio>
                </GridItem>
                <GridItem rowSpan={1} colSpan={1}>
                  <Radio value="ご紹介">ご紹介</Radio>
                </GridItem>
              </Grid>
            </RadioGroup>
            <FormErrorMessage>
              {form.errors.reasonForUsingThisSalon}
            </FormErrorMessage>
          </FormControl>
        )}
      </Field>
      <Field name="introducedBy">
        {({ field, form }) => {
          const isIntroducedByFieldVisible =
            form.getFieldProps("reasonForUsingThisSalon").value === "ご紹介";
          return (
            isIntroducedByFieldVisible && (
              <FormControl
                isInvalid={
                  form.errors.contactMethodOther &&
                  form.touched.contactMethodOther
                }
              >
                <FormLabel htmlFor="introducedBy"></FormLabel>
                <Input {...field} id="introducedBy" placeholder="ご紹介" />
                <FormErrorMessage>{form.errors.introducedBy}</FormErrorMessage>
              </FormControl>
            )
          );
        }}
      </Field>
    </>
  );
};

export default ReasonForUsingField;
