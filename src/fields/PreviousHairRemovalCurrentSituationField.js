import React from "react";
import { Input } from "@chakra-ui/react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage
} from "@chakra-ui/form-control";
import { Field } from "formik";

const PreviousHairRemovalCurrentSituation = () => {
  return (
    <Field name="previousHairRemovalCurrentSituation">
      {({ field, form }) => (
        <FormControl
          isInvalid={
            form.errors.previousHairRemovalCurrentSituation &&
            form.touched.previousHairRemovalCurrentSituation
          }
        >
          <FormLabel htmlFor="previousHairRemovalCurrentSituation">
            現在の状況は？
          </FormLabel>
          <Input
            {...field}
            id="previousHairRemovalCurrentSituation"
            placeholder="状況"
          />
          <FormErrorMessage>
            {form.errors.previousHairRemovalCurrentSituation}
          </FormErrorMessage>
        </FormControl>
      )}
    </Field>
  );
};

export default PreviousHairRemovalCurrentSituation;
