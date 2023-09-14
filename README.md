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
