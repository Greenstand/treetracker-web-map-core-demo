The monorepo for native and web demo.

# How to start

* Install packages:

On the root folder:
```bash
yarn
```

* Start web demo:

```bash
cd apps/web
yarn dev
```

* Start native demo:

```bash
cd apps/native
yarn start
```

# About the structure

* `apps/native` the React Native demo.

* `apps/web` the React web demo.

* `packages/demo-core` the model layer that could be shared between native and web.

# Development Rules for this project

- The files in the `packages/demo-core` folder (the model layer) can import any other files in the `models` folder.

- The files in the `packages/demo-core` folder can not import files under `apps` (the viewer layer).

- The files in the `packages/demo-core` folder can not import lib that is platform-specific to web or native, for example: `next`, `react-native`.

- Folders in `apps` can import anything in the `packages/demo-core` folder.

- For `apps` viewer layer, don't recommend to import recoil state directly in the `packages/demo-core` folder, if we need some state managed by recoil but don't want to put it into the `packages/demo-core`, we can put it in the `apps` folder directly, in this way, we can not reuse the state crossing apps.

# About the hoisting

All the packages are hoisted to the root folder, which means the package will be installed in the root's `node_modules` rather the one under apps, the reason is that for some package, like `react` we can not separate (nohoist) it into both `web` and `demo-core`, if doing so, the app will throw error about react hook problem.

If there are some packages that we can separate/nohoist in the folder, for example, native, we can add the package into the root's `package.json`:

```json
{
  "workspaces": {
    "packages": [
      "apps/*",
      "packages/*"
    ],
    "nohoist": [
      "**/react-native",
      "**/react-native/**"
    ]
  }
}
```
