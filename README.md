<h1 style="text-align: center;">
    <a href="https://wix.github.com/wix-style-react">
        <img src="https://raw.githubusercontent.com/wix/wix-style-react/master/.storybook/logo.svg?sanitize=true" alt="Wix Style React" width="300">
    </a>
</h1>

`wix-style-react` is a collection of [React](https://facebook.github.io/react/) components that conform to Wix Style created by Wix UX guild.

#### [Demo](https://wix-wix-style-react.surge.sh/) | [Source](https://github.com/wix/wix-style-react)

## Setup

* Install with `npm` or `yarn`:
```sh
npm i wix-style-react
# OR
yarn add wix-style-react
```

* Use in your project:

```jsx
import React from 'react';
import Button from 'wix-style-react/Button';

const MyComponent = () =>
  <Button onClick={() => console.log('thanks for clicking :)')}>
    Click me!
  </Button>;
```

## Requirements

* Load Wix fonts from CDN
    ```html
    <link rel="stylesheet" href="//static.parastorage.com/services/third-party/fonts/Helvetica/fontFace.css">
    ```
* Ensure `<body>` has either `ltr` or `rtl` class applied to it (depending on displayed language);

## Tips

* Use [Yoshi](https://github.com/wix/yoshi) as build tool to avoid configuration. Otherwise follow [webpack setup instructions here](https://wix-wix-style-react.surge.sh/?selectedKind=Introduction&selectedStory=Usage%20Without%20Yoshi&full=0&down=0&left=1&panelRight=0)
* Enable font smoothing with browser specific css properties, for example:
    ```css
    html {
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }
    ```
* Use [demo pages](https://wix-wix-style-react.surge.sh/) to find all available components with examples.

## Contributing
Please refer to the [Contribution page](https://wix-wix-style-react.surge.sh/?selectedKind=Introduction&selectedStory=Contribution&full=0&down=0&left=1&panelRight=0)

## Tests
Please refer to the [Testing page](https://wix-wix-style-react.surge.sh/?selectedKind=Introduction&selectedStory=Testing&full=0&down=0&left=1&panelRight=0)

## License
This project is offered under [MIT License](https://github.com/wix/wix-style-react/blob/master/LICENSE).
