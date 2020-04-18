<p style="text-align: center;" align="center">
    <h1 align="center">mui-dialog-hook</h1>
</p>
<p align="center">🖼 React hook for Modals</p>
<p align="center">
    <a href="https://github.com/Rasel141/mui-dialog-hook/pulls">
      <img src="https://camo.githubusercontent.com/d4e0f63e9613ee474a7dfdc23c240b9795712c96/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f5052732d77656c636f6d652d627269676874677265656e2e737667" />
    </a>
</p>

Simple, lightweight hook for Modals/Dialogs.

This hook is also isomorphic, meaning it works with SSR (server side rendering).

## Features

- SSR (server side rendering) support
- TypeScript support

### Examples

- [Example](https://codesandbox.io/s/mui-dialog-hook-5t7ig)

## Installation

```shell
yarn add mui-dialog-hook      or     npm i mui-dialog-hook
```

## Usage

### Basic Usage

```jsx
import React from "react";
import PrimaryDialog, { usePrimaryDialog } from "mui-dialog-hook";
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
```

### Multiple Dialog Usage

```jsx
import React from "react";
import PrimaryDialog, {
  usePrimaryDialog,
} from "mui-dialog-hook";
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
```

## PrimaryDialog props

| props           | Description                       | default | isRequired |
| --------------- | --------------------------------- | ------- | ---------- |
| `openPrimary`   | `openPrimary` initial state value | false   | true       |
| `togglePrimary` | `togglePrimary` state value       | false   | true       |
| `hideCrossBtn`  | hide cross button                 | false   | false      |
| `scrollType`    | `body` or `paper`                 | paper   | false      |
| `width`         | paper width                       |         | false      |
