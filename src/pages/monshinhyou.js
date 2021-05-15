import React from "react";
import { Button, Input, Center, Stack, Flex } from "@chakra-ui/react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage
} from "@chakra-ui/form-control";
import { Formik, Form, Field } from "formik";
import Header from "../components/organisms/Header";
import SelectNumber from "../components/atoms/SelectNumber";

function FormikExample() {
  function validateNameFurigana(value) {
    return !value && "名前のフリガナが必須の項目です";
  }
  function validateName(value) {
    return !value && "名前が必須の項目です";
  }

  return (
    <>
      <Header />
      <Center m="8">
        <Formik
          initialValues={{
            nameFurigana: "",
            name: "",
            birthdate: { year: undefined, month: undefined, day: undefined }
          }}
          onSubmit={(values, actions) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              actions.setSubmitting(false);
            }, 1000);
          }}
        >
          {props => (
            <Form>
              <Stack spacing="3" w="500px">
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
                      isInvalid={
                        form.errors.nameFurigana && form.touched.nameFurigana
                      }
                      isRequired
                    >
                      <FormLabel htmlFor="nameFurigana">フリガナ</FormLabel>
                      <Input
                        {...field}
                        id="nameFurigana"
                        placeholder="フリガナ"
                      />
                      <FormErrorMessage>
                        {form.errors.nameFurigana}
                      </FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
                <Field name="birthdate">
                  {({ field, form }) => {
                    const { year, month, day } = field.value;
                    return (
                      <FormControl
                        isInvalid={
                          form.errors.birthdate && form.touched.birthdate
                        }
                        isRequired
                      >
                        <FormLabel htmlFor="birthdate">生年月日</FormLabel>
                        <Flex>
                          <SelectNumber
                            firstNumber={1900}
                            lastNumber={2021}
                            placeholder="年"
                            value={year}
                            onChange={value =>
                              props.setFieldValue(field.name, {
                                ...field.value,
                                year: value
                              })
                            }
                          />
                          <SelectNumber
                            firstNumber={1}
                            lastNumber={12}
                            placeholder="月"
                            value={month}
                            onChange={value =>
                              props.setFieldValue(field.name, {
                                ...field.value,
                                month: value
                              })
                            }
                          />
                          {/* Refactor this group so I can change the last number for days depending on month */}
                          <SelectNumber
                            firstNumber={1}
                            lastNumber={31}
                            placeholder="日"
                            value={day}
                            onChange={value =>
                              props.setFieldValue(field.name, {
                                ...field.value,
                                day: value
                              })
                            }
                          />
                        </Flex>
                        <FormErrorMessage>
                          {form.errors.birthdate}
                        </FormErrorMessage>
                      </FormControl>
                    );
                  }}
                </Field>

                <Button
                  mt={4}
                  colorScheme="blue"
                  isLoading={props.isSubmitting}
                  type="submit"
                >
                  Submit
                </Button>
              </Stack>
            </Form>
          )}
        </Formik>
      </Center>
    </>
  );
}

export default FormikExample;
