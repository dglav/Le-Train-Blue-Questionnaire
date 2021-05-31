import React from "react";
import { ButtonGroup, Button } from "@chakra-ui/react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage
} from "@chakra-ui/form-control";
import { Field } from "formik";

const HasHairRemovalExperienceField = () => {
  return (
    <Field name="hasHairRemovalExperience">
      {({ field, form }) => (
        <FormControl
          isInvalid={
            form.errors.hasHairRemovalExperience &&
            form.touched.hasHairRemovalExperience
          }
        >
          <FormLabel htmlFor="hasHairRemovalExperience">
            脱毛サロンの経験はありますか？
          </FormLabel>
          <ButtonGroup
            isAttached
            d="flex"
            justifyContent="center"
            colorScheme="blue"
          >
            <Button
              onClick={() =>
                form.setFieldValue("hasHairRemovalExperience", true)
              }
              flexGrow="1"
              variant={field.value ? "solid" : "outline"}
            >
              はい
            </Button>
            <Button
              onClick={() =>
                form.setFieldValue("hasHairRemovalExperience", false)
              }
              flexGrow="1"
              variant={!field.value && field.value !== "" ? "solid" : "outline"}
            >
              いいえ
            </Button>
          </ButtonGroup>
          <FormErrorMessage>
            {form.errors.hasHairRemovalExperience}
          </FormErrorMessage>
        </FormControl>
      )}
    </Field>
  );
};

export default HasHairRemovalExperienceField;
