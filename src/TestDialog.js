import React from "react";
import PrimaryDialog, {
  usePrimaryDialog,
} from "./components/dialog/mui-dialog-hook";
import { Button } from "@material-ui/core";

const TestDialog = () => {
  const {
    openPrimary: openFirstDialog,
    togglePrimary: toggleFirstDialog,
  } = usePrimaryDialog();
  const {
    openPrimary: openSecondDialog,
    togglePrimary: toggleSecondDialog,
  } = usePrimaryDialog();

  return (
    <div>
      <PrimaryDialog
        openPrimary={openFirstDialog}
        togglePrimary={toggleFirstDialog}
        width={530}
        scrollType="body"
        // hideCrossBtn
      >
        <h2> First Dialog Content </h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore alias
          dolore illo ea explicabo minus id soluta tempora vitae aut neque ullam
          totam maxime excepturi, fugit amet, qui ipsam? Voluptas?
        </p>
      </PrimaryDialog>

      <PrimaryDialog
        openPrimary={openSecondDialog}
        togglePrimary={toggleSecondDialog}
        width={530}
        scrollType="body"
        // hideCrossBtn
      >
        <h2> Second Dialog Content </h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore alias
          dolore illo ea explicabo minus id soluta tempora vitae aut neque ullam
          totam maxime excepturi, fugit amet, qui ipsam? Voluptas?
        </p>
      </PrimaryDialog>

      <Button color="primary" onClick={toggleFirstDialog}>
        open 1st Dialog{" "}
      </Button>
      <Button color="secondary" onClick={toggleSecondDialog}>
        open 2nd Dialog{" "}
      </Button>
    </div>
  );
};

export default TestDialog;
