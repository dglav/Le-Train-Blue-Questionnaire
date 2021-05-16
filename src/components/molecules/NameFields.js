import React from "react";
import { Input } from "@chakra-ui/react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage
} from "@chakra-ui/form-control";
import { Field } from "formik";

function validateNameFurigana(value) {
  return !value && "名前のフリガナが必須の項目です";
}
function validateName(value) {
  return !value && "名前が必須の項目です";
}

const NameFields = () => {
  return (
    <>
      <Field name="name" validate={validateName}>
        {({ field, form }) => (
          <FormControl
            isInvalid={form.errors.name && form.touched.name}
            isRequired
          >
            <FormLabel htmlFor="name">氏名</FormLabel>
            <Input {...field} id="name" placeholder="氏名" />
            <FormErrorMessage>{form.errors.name}</FormErrorMessage>
          </FormControl>
        )}
      </Field>
      <Field name="nameFurigana" validate={validateNameFurigana}>
        {({ field, form }) => (
          <FormControl
            isInvalid={form.errors.nameFurigana && form.touched.nameFurigana}
            isRequired
          >
            <FormLabel htmlFor="nameFurigana">氏名【カナ】</FormLabel>
            <Input {...field} id="nameFurigana" placeholder="氏名【カナ】" />
            <FormErrorMessage>{form.errors.nameFurigana}</FormErrorMessage>
          </FormControl>
        )}
      </Field>
    </>
  );
};

export default NameFields;
