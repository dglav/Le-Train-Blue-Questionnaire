import React from "react";
import { Button, Input, Center, Stack, Flex } from "@chakra-ui/react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage
} from "@chakra-ui/form-control";
import { Formik, Form, Field } from "formik";
import Header from "../components/organisms/Header";
import BirthdateInput from "../components/molecules/BirthdateInput";

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
            birthdate: { year: undefined, month: undefined, day: undefined },
            address: "",
            addressFurigana: ""
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
                      <FormLabel htmlFor="nameFurigana">氏名【カナ】</FormLabel>
                      <Input
                        {...field}
                        id="nameFurigana"
                        placeholder="氏名【カナ】"
                      />
                      <FormErrorMessage>
                        {form.errors.nameFurigana}
                      </FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
                <BirthdateInput formProps={props} />
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
                        form.errors.addressFurigana &&
                        form.touched.addressFurigana
                      }
                      isRequired
                    >
                      <FormLabel htmlFor="addressFurigana">
                        住所【カナ】
                      </FormLabel>
                      <Input
                        {...field}
                        id="addressFurigana"
                        placeholder="住所【カナ】"
                      />
                      <FormErrorMessage>
                        {form.errors.addressFurigana}
                      </FormErrorMessage>
                    </FormControl>
                  )}
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
