import React from "react";
import { Input } from "@chakra-ui/react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage
} from "@chakra-ui/form-control";
import { Field } from "formik";

const PhoneNumberFields = () => {
  return (
    <>
      <Field name="homePhoneNumber">
        {({ field, form }) => (
          <FormControl
            isInvalid={
              form.errors.homePhoneNumber && form.touched.homePhoneNumber
            }
          >
            <FormLabel htmlFor="homePhoneNumber">自宅電話</FormLabel>
            <Input
              {...field}
              id="homePhoneNumber"
              placeholder="自宅電話"
              type="tel"
            />
            <FormErrorMessage>{form.errors.homePhoneNumber}</FormErrorMessage>
          </FormControl>
        )}
      </Field>
      <Field name="cellPhoneNumber">
        {({ field, form }) => (
          <FormControl
            isInvalid={
              form.errors.cellPhoneNumber && form.touched.cellPhoneNumber
            }
          >
            <FormLabel htmlFor="cellPhoneNumber">携帯電話</FormLabel>
            <Input
              {...field}
              id="cellPhoneNumber"
              placeholder="携帯電話"
              type="tel"
            />
            <FormErrorMessage>{form.errors.cellPhoneNumber}</FormErrorMessage>
          </FormControl>
        )}
      </Field>
    </>
  );
};

export default PhoneNumberFields;
