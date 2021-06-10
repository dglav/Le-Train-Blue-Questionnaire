import React from "react";
import { Input } from "@chakra-ui/react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage
} from "@chakra-ui/form-control";
import { Field } from "formik";

const PreviousHairRemovalImpressionField = () => {
  return (
    <Field name="previousHairRemovalImpression">
      {({ field, form }) => (
        <FormControl
          isInvalid={
            form.errors.previousHairRemovalImpression &&
            form.touched.previousHairRemovalImpression
          }
        >
          <FormLabel htmlFor="previousHairRemovalImpression">
            感想は？
          </FormLabel>
          <Input
            {...field}
            id="previousHairRemovalImpression"
            placeholder="感想"
          />
          <FormErrorMessage>
            {form.errors.previousHairRemovalImpression}
          </FormErrorMessage>
        </FormControl>
      )}
    </Field>
  );
};

export default PreviousHairRemovalImpressionField;
