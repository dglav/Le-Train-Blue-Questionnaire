import React from "react";
import { Input } from "@chakra-ui/react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage
} from "@chakra-ui/form-control";
import { Field } from "formik";

const PreviousHairRemovalLocationField = () => {
  return (
    <Field name="previousHairRemovalLocation">
      {({ field, form }) => (
        <FormControl
          isInvalid={
            form.errors.previousHairRemovalLocation &&
            form.touched.previousHairRemovalLocation
          }
        >
          <FormLabel htmlFor="previousHairRemovalLocation">
            脱毛箇所は？
          </FormLabel>
          <Input
            {...field}
            id="previousHairRemovalLocation"
            placeholder="脱毛箇所"
          />
          <FormErrorMessage>
            {form.errors.previousHairRemovalLocation}
          </FormErrorMessage>
        </FormControl>
      )}
    </Field>
  );
};

export default PreviousHairRemovalLocationField;
