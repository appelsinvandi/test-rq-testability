# Testability of `@tanstack/react-query` on `react` ^16, ^17, and ^18

This repo tests the testability of [@tanstack/react-query](https://github.com/TanStack/query/tree/main/packages/react-query) with older versions of [react](https://github.com/facebook/react).

It has been my experience in this repo, that using `react-query` ^3 works with react 16+, aligning with the text on https://react-query-v3.tanstack.com/installation.
However, the same is not the case for `@tanstack/react-query` ^4, where any react version below 18, will fail to update the hook state. Effectively misaligning with the text on https://tanstack.com/query/v4/docs/installation.

## Project structure

The relevant project structure simple, and as follows:

```
/
├─ test-cases/      # All the projects for testing variations are saved here.
│  └─ react-xx/     # Project folder for a test variation.
│     └─ README.md  # Explanation of the test case & expected + actual outcome.
└─ README.md        # Project overview, you are here.
```

## Setup

This project uses yarn 2 workspaces, so as long as you have some yarn version installed, just run the following command:

```
yarn install
```

This will install all the packages in the projects.
