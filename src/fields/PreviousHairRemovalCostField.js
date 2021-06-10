import React from "react";
import { Input } from "@chakra-ui/react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage
} from "@chakra-ui/form-control";
import { Field } from "formik";

const PreviousHairRemovalCostField = () => {
  return (
    <Field name="previousHairRemovalCost">
      {({ field, form }) => (
        <FormControl
          isInvalid={
            form.errors.previousHairRemovalCost &&
            form.touched.previousHairRemovalCost
          }
        >
          <FormLabel htmlFor="previousHairRemovalCost">費用は？</FormLabel>
          <Input
            {...field}
            id="previousHairRemovalCost"
            placeholder="費用（円）"
          />
          <FormErrorMessage>
            {form.errors.previousHairRemovalCost}
          </FormErrorMessage>
        </FormControl>
      )}
    </Field>
  );
};

export default PreviousHairRemovalCostField;
