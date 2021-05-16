import React from "react";
import { Button, Input, Center, Stack } from "@chakra-ui/react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage
} from "@chakra-ui/form-control";
import { Formik, Form, Field } from "formik";
import Header from "../components/organisms/Header";
import NameFields from "../components/molecules/NameFields";
import BirthdateInput from "../components/molecules/BirthdateField";

function FormikExample() {
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
                <NameFields />
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
