# 🏰 regl-typings
TypeScript typings for regl

### TODO

- [ ] Test it in JavaScript project, as opposed to TypeScript project.
- [ ] Try `createREGL` in module-less, aka global environment.
- [ ] Add typings for `regl.read()`.
- [ ] Support all ways to create/reinitialize a texture
      from arrays/typed arrays/ndarrays/framebuffers/textures.
      See https://github.com/regl-project/regl/blob/gh-pages/API.md#texture-constructor
- [ ] Add typings for `regl.texture({ copy: true })`.
- [ ] Add typings for `REGL.Props`.

In general, I see `REGL.Command` as a generic type parametrized by the type
of its props, like so


```typescript
interface MyCommandProps {
    color: [number, number, number, number];
}

const myCommand: REGL.Command<MyCommandProps> = regl({
    // ...
})

myCommand({
    colour: [1, 0, 0, 1], // This should err in compile time, because colour != color
}); 
```

React's component types are parametrized with the types of their props (and
state, for stateful components). This allows for compile-time error checks
regarding props' names and types, and that's a Good Thing.
