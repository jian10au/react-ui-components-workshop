# React UI components workshop

## Steps:
### First component: Button
**Button.tsx**
* STEP1: Style the button
* STEP2: Style different button states (hover, active, focused)
* STEP3: Add props to change button themes
* STEP4: Add constants/enums for color
* STEP5: Export Button

**Button.stories.tsx**
* Add knob to change Button props

### Second component: Input
* STEP1: Add Input folder and create an input component (`<label>`, `<input>`)
* STEP2: Style the input (hover, focused)
* STEP3: Add props to change field validation status
* STEP4: Explain constants/enums for shared dimentions
* STEP5: Export the input
* *Something to think about: number, email, password inputs?*

**Input story**
* Add Input.stories.tsx and create a story
* Use addon `action` to display value on change

### Publish package to npm
* STEP1: `$ npm login`
* STEP2: `$ npm run build`
* STEP3: `.npmignore` and exports
* STEP4: `$ npm publish`
* STEP5: Go to stackblitz.com and use your components in a new project

### Third component: Content card (Try do it yourself)
* STEP1: Add Card folder and create a Card component (`<div>`)
* STEP2: Style the Card (Default color, fonts, shadow, border, padding?)
* STEP3: Optional contents on Card and default styles (Heading, Subheading, Separator?)
* STEP4: What if the Card is a Anchor link?
* STEP5: What if we want the Card's header section to be an image?
* STEP6: How does the Card defines its margins and its layout in it's parent component?
* STEP7: What if the background color must be in contrast with its container?
* *Something to think about: What if your designers didn't realise they are creating so many variations?*

### Update npm package version
* `npm-version`
