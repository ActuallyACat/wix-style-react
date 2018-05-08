# Dropdown component

> Dropdown with dropdownLayout

## Dropdown TestKit API

### Dropdown Enzyme/ReactTestUtils testkit is identical to [InputWithOptions](https://wix-wix-style-react.surge.sh/?selectedKind=Core&selectedStory=InputWithOptions&full=0&down=0&left=1&panelRight=0) test kit 

#### Protractor test kit:

| method | arguments | returned value | description |
|--------|-----------|----------------|-------------|
| click | - | - | click on the component |
| getInput | - | element | get the input element |
| getDropdown | - | element | get the dropdown element |
| getDropdownItem | number | string | get the text in item index <arg> |
| getDropdownItemsCount | - | number | get number of options |
| element | - | element | get the actual element |

## Usage Example

> E2E example
```javascript
  //Element should be rendered with a data-hook into the DOM
  <Dropdown {...props} dataHook='myDataHook'/>

  /**********************
   Protractor example
  **********************/

  import {dropdownTestkitFactory, waitForVisibilityOf} from 'wix-style-react/testkit/protractor';

  //Create an element testkit via the data-hook attribute
  const testkit = dropdownTestkitFactory({dataHook: 'myDataHook'});

  browser.get(appUrl);  //Your application url

  waitForVisibilityOf(testkit.element(), 'Cannot find Dropdown')
     .then(() => {
       //Do tests
        expect(testkit.element().isDisplayed()).toBeTruthy();
     });
```
