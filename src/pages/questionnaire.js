import React from "react";
import { Button, Center, Stack } from "@chakra-ui/react";
import { Formik, Form } from "formik";
import Header from "../components/organisms/Header";
import NameFields from "../components/molecules/NameFields";
import BirthdateInput from "../components/molecules/BirthdateField";
import AddressFields from "../components/molecules/AddressFields";
import PhoneNumberFields from "../components/molecules/PhoneNumerFields";

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
            addressFurigana: "",
            homePhoneNumber: "",
            cellPhoneNumber: ""
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
                <AddressFields />
                <PhoneNumberFields />
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
