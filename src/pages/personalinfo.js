import React from "react";
import { Button, Center, Stack } from "@chakra-ui/react";
import { Formik, Form } from "formik";
import Header from "../components/organisms/Header";
import NameFields from "../components/molecules/NameFields";
import BirthdateInput from "../components/molecules/BirthdateField";
import AddressFields from "../components/molecules/AddressFields";
import PhoneNumberFields from "../components/molecules/PhoneNumberFields";
import EmailField from "../components/molecules/EmailField";
import WorkFields from "../components/molecules/WorkFields";
import TextMessagePermissionField from "../components/molecules/TextMessagePermissionField";

function PersonalInfoForm() {
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
            cellPhoneNumber: "",
            email: "",
            placeOfWork: "",
            industry: "",
            hasPermissionToDM: "",
            contactMethod: "",
            contactMethodOther: ""
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
                <BirthdateInput />
                <AddressFields />
                <PhoneNumberFields />
                <EmailField />
                <WorkFields />
                <TextMessagePermissionField />
                <Button
                  mt={4}
                  colorScheme="blue"
                  isLoading={props.isSubmitting}
                  type="submit"
                  onClick={() => console.log({ ...props.values })}
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

export default PersonalInfoForm;
