import React from "react";
import { Input } from "@chakra-ui/react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage
} from "@chakra-ui/form-control";
import { Field } from "formik";

const EmailField = () => {
  return (
    <Field name="email">
      {({ field, form }) => (
        <FormControl isInvalid={form.errors.email && form.touched.email}>
          <FormLabel htmlFor="email">メールアドレス</FormLabel>
          <Input
            {...field}
            id="email"
            placeholder="メールアドレス"
            type="email"
          />
          <FormErrorMessage>{form.errors.email}</FormErrorMessage>
        </FormControl>
      )}
    </Field>
  );
};

export default EmailField;
