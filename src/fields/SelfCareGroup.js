import React from "react";
import { Button, ButtonGroup, Input } from "@chakra-ui/react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage
} from "@chakra-ui/form-control";
import { Field } from "formik";

const SelfCareGroup = ({
  yesNoFieldName,
  yesText,
  noText,
  fromWhen,
  where,
  frequency
}) => {
  return (
    <>
      <Field name={yesNoFieldName}>
        {({ field, form }) => {
          return (
            <FormControl
              isInvalid={
                form.errors[yesNoFieldName] && form.touched[yesNoFieldName]
              }
            >
              <ButtonGroup
                isAttached
                d="flex"
                justifyContent="center"
                colorScheme="blue"
              >
                <Button
                  onClick={() => form.setFieldValue(yesNoFieldName, true)}
                  width="50%"
                  variant={field.value ? "solid" : "outline"}
                >
                  {yesText}
                </Button>
                <Button
                  onClick={() => {
                    form.setFieldValue(yesNoFieldName, false);
                    form.setFieldValue(fromWhen, undefined);
                    form.setFieldValue(where, undefined);
                    form.setFieldValue(frequency, undefined);
                  }}
                  width="50%"
                  variant={
                    !field.value && field.value !== undefined
                      ? "solid"
                      : "outline"
                  }
                >
                  {noText}
                </Button>
              </ButtonGroup>
              <FormErrorMessage>{form.errors[yesNoFieldName]}</FormErrorMessage>
            </FormControl>
          );
        }}
      </Field>
      <Field name={fromWhen}>
        {({ form, field }) => {
          const isFieldVisible =
            form.getFieldProps(yesNoFieldName).value === true;

          return (
            isFieldVisible && (
              <FormControl
                isInvalid={form.errors[fromWhen] && form.touched[fromWhen]}
              >
                <FormLabel htmlFor={fromWhen}>いつ頃から</FormLabel>
                <Input {...field} id={fromWhen} placeholder="いつ頃から" />
                <FormErrorMessage>{form.errors[fromWhen]}</FormErrorMessage>
              </FormControl>
            )
          );
        }}
      </Field>
      <Field name={where}>
        {({ form, field }) => {
          const isFieldVisible =
            form.getFieldProps(yesNoFieldName).value === true;

          return (
            isFieldVisible && (
              <FormControl
                isInvalid={form.errors[where] && form.touched[where]}
              >
                <FormLabel htmlFor={where}>処理箇所</FormLabel>
                <Input {...field} id={where} placeholder="処理箇所" />
                <FormErrorMessage>{form.errors[where]}</FormErrorMessage>
              </FormControl>
            )
          );
        }}
      </Field>
      <Field name={frequency}>
        {({ form, field }) => {
          const isFieldVisible =
            form.getFieldProps(yesNoFieldName).value === true;

          return (
            isFieldVisible && (
              <FormControl
                isInvalid={form.errors[frequency] && form.touched[frequency]}
              >
                <FormLabel htmlFor={frequency}>処理頻度</FormLabel>
                <Input {...field} id={frequency} placeholder="処理頻度" />
                <FormErrorMessage>{form.errors[frequency]}</FormErrorMessage>
              </FormControl>
            )
          );
        }}
      </Field>
    </>
  );
};

export default SelfCareGroup;
