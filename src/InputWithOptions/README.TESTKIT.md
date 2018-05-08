# InputWithOptions component

> Input with dropdownLayout

## InputWithOptions TestKit API

### The InputWithOptions TestKit is exposing the [inputDriver](https://wix-wix-style-react.surge.sh/?selectedKind=Core&selectedStory=Input&full=0&down=0&left=1&panelRight=0) and [dropdownLayoutDriver](https://wix-wix-style-react.surge.sh/?selectedKind=Core&selectedStory=DropdownLayout&full=0&down=0&left=1&panelRight=0) and adds its own driver, see examples below
 
#### Driver methods:

| method | arguments | returned value | description |
|--------|-----------|----------------|-------------|
| focus | - | - | focus the input element |
| blur | - | - | click outside the dropdown element |
| pressDownKey | - | - | press down key on the input element |
| pressUpKey | - | - | press up key on the input element |
| pressAnyKey | - | - | press any key on the input element |
| pressEnterKey | - | - | press enter key on the input element |
| pressTabKey | - | - | press tab key on the input element |
| pressEscKey | - | - | press esc key on the input element |
| setProps | json | element | returns a clone of this element with the new props from the json | 

## Usage Example

> Unit Testing Example
```javascript
  import React from 'react';
  import {inputWithOptionsTestkitFactory} from 'wix-style-react/testkit';
  import {inputWithOptionsTestkitFactory as enzymeInputWithOptionsTestkitFactory} from 'wix-style-react/testkit/enzyme';

  /***************
   enzyme example
  ***************/
  
  const dataHook = 'myDataHook';
  const wrapper = mount(<InputWithOptions dataHook={dataHook}/>);
  const inputWithOptionsTestkit = enzymeInputWithOptionsTestkitFactory({wrapper, dataHook});

  //Do tests
  expect(inputWithOptionsTestkit.driver.exists()).toBeTruthy();
  expect(inputWithOptionsTestkit.inputDriver.exists()).toBeTruthy();
  expect(inputWithOptionsTestkit.dropdownLayoutDriver.exists()).toBeTruthy();

  /**********************
   ReactTestUtils example
  **********************/

  const div = document.createElement('div');
  const dataHook = 'myDataHook';
  const wrapper = div.appendChild(ReactTestUtils.renderIntoDocument(<div><InputWithOptions dataHook={dataHook}/></div>));
  const inputWithOptionsTestkit = inputWithOptionsTestkitFactory({wrapper, dataHook});

  //Do tests
  expect(inputWithOptionsTestkit.driver.exists()).toBeTruthy();
  expect(inputWithOptionsTestkit.inputDriver.exists()).toBeTruthy();
  expect(inputWithOptionsTestkit.dropdownLayoutDriver.exists()).toBeTruthy();
```
