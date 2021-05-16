import React from "react";
import { Input } from "@chakra-ui/react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage
} from "@chakra-ui/form-control";
import { Field } from "formik";

const NameFields = () => {
  return (
    <>
      <Field name="address">
        {({ field, form }) => (
          <FormControl
            isInvalid={form.errors.address && form.touched.address}
            isRequired
          >
            <FormLabel htmlFor="address">住所</FormLabel>
            <Input {...field} id="address" placeholder="住所" />
            <FormErrorMessage>{form.errors.address}</FormErrorMessage>
          </FormControl>
        )}
      </Field>
      <Field name="addressFurigana">
        {({ field, form }) => (
          <FormControl
            isInvalid={
              form.errors.addressFurigana && form.touched.addressFurigana
            }
            isRequired
          >
            <FormLabel htmlFor="addressFurigana">住所【カナ】</FormLabel>
            <Input {...field} id="addressFurigana" placeholder="住所【カナ】" />
            <FormErrorMessage>{form.errors.addressFurigana}</FormErrorMessage>
          </FormControl>
        )}
      </Field>
    </>
  );
};

export default NameFields;
