import React from "react";
import PrimaryDialog, {
  usePrimaryDialog,
} from "./components/dialog/mui-hook-dialog";
import { Button } from "@material-ui/core";

const TestDialog = () => {
  const { openPrimary, togglePrimary } = usePrimaryDialog();

  return (
    <div>
      <PrimaryDialog
        openPrimary={openPrimary}
        togglePrimary={togglePrimary}
        width={530}
        scrollType="body"
        // hideCrossBtn
      >
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore alias
          dolore illo ea explicabo minus id soluta tempora vitae aut neque ullam
          totam maxime excepturi, fugit amet, qui ipsam? Voluptas?
        </p>
      </PrimaryDialog>

      <Button color="primary" onClick={togglePrimary}>
        open Dialog{" "}
      </Button>
    </div>
  );
};

export default TestDialog;
