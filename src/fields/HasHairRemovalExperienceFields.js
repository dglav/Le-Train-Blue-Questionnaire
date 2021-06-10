import React from "react";
import { ButtonGroup, Button, Input } from "@chakra-ui/react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage
} from "@chakra-ui/form-control";
import { Field } from "formik";

const HasHairRemovalExperienceField = () => {
  return (
    <>
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
                onClick={() => {
                  form.setFieldValue("hasHairRemovalExperience", false);
                  form.setFieldValue(
                    "hasHairRemovalTrialExperience",
                    undefined
                  );
                  form.setFieldValue("trialExperienceSalonName", undefined);
                }}
                flexGrow="1"
                variant={
                  !field.value && field.value !== undefined
                    ? "solid"
                    : "outline"
                }
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

      <Field name="hasHairRemovalTrialExperience">
        {({ field, form }) => {
          const isHasHairRemovalTrialExperienceVisible =
            form.getFieldProps("hasHairRemovalExperience").value === true;
          return (
            isHasHairRemovalTrialExperienceVisible && (
              <FormControl
                isInvalid={
                  form.errors.hasHairRemovalTrialExperience &&
                  form.touched.hasHairRemovalTrialExperience
                }
              >
                <FormLabel htmlFor="hasHairRemovalTrialExperience">
                  お試し体験は？
                </FormLabel>
                <ButtonGroup
                  isAttached
                  d="flex"
                  justifyContent="center"
                  colorScheme="blue"
                >
                  <Button
                    onClick={() =>
                      form.setFieldValue("hasHairRemovalTrialExperience", true)
                    }
                    flexGrow="1"
                    variant={field.value ? "solid" : "outline"}
                  >
                    はい
                  </Button>
                  <Button
                    onClick={() =>
                      form.setFieldValue("hasHairRemovalTrialExperience", false)
                    }
                    flexGrow="1"
                    variant={
                      !field.value && field.value !== "" ? "solid" : "outline"
                    }
                  >
                    いいえ
                  </Button>
                </ButtonGroup>
                <FormErrorMessage>
                  {form.errors.hasHairRemovalTrialExperience}
                </FormErrorMessage>
              </FormControl>
            )
          );
        }}
      </Field>
      <Field name="trialExperienceSalonName">
        {({ field, form }) => {
          const isTrialExperienceSalonNameVisible =
            form.getFieldProps("hasHairRemovalExperience").value === true;
          return (
            isTrialExperienceSalonNameVisible && (
              <FormControl
                isInvalid={
                  form.errors.trialExperienceSalonName &&
                  form.touched.trialExperienceSalonName
                }
              >
                <FormLabel htmlFor="trialExperienceSalonName">氏名</FormLabel>
                <Input
                  {...field}
                  id="trialExperienceSalonName"
                  placeholder="氏名"
                />
                <FormErrorMessage>
                  {form.errors.trialExperienceSalonName}
                </FormErrorMessage>
              </FormControl>
            )
          );
        }}
      </Field>
    </>
  );
};

export default HasHairRemovalExperienceField;
