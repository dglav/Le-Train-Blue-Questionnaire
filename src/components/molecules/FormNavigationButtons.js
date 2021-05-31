import React from "react";
import { Button, ButtonGroup } from "@chakra-ui/react";

const FormNavigationButtons = ({
  handleGoToPreviousPage,
  onSubmit,
  isLoading,
  values
}) => {
  return (
    <ButtonGroup spacing={8} mt={8} w="100%">
      {onSubmit && (
        <Button
          colorScheme="blue"
          isLoading={isLoading}
          type="submit"
          flexGrow={1}
        >
          確定
        </Button>
      )}
      {handleGoToPreviousPage && (
        <Button onClick={() => handleGoToPreviousPage(values)} flexGrow={1}>
          もどる
        </Button>
      )}
    </ButtonGroup>
  );
};

export default FormNavigationButtons;
