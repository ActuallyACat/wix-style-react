# Search Testkits

## Enzyme/ReactTestUtils TestKit API

Search testkit is identical to [InputWithOptions](https://wix-wix-style-react.surge.sh/?selectedKind=Core&selectedStory=InputWithOptions&full=0&down=0&left=1&panelRight=0) testkit

## Protractor TestKit API

| method | arguments | returned value | description |
|--------|-----------|----------------|-------------|
| enterText | string | - | applied text to the input |
| getText | - | string | get the input text |
| hasClearButton | - | boolean | true if the clear button is visible |
| clickClear | - | - | if clear button is visible, will click it |
| clickOnInput | - | - | click on the input |
| clickSearchOptionAt | integer | - | click on search option element at position |
| getSearchOptionsCount | - | integer | get search options count |
| element | - | element | get the search element |
| getInput | - | element | get the input element |
| getSearchDropdown | - | element | get the search dropdown element |
| getSearchOptionAt | integer | element | get search option element at position |

## Usage Example

### Unit testing example
```javascript
import React from 'react';
import ReactTestUtils from 'react-dom/test-utils';
import {mount} from 'enzyme';

import {searchTestkitFactory} from '../../testkit';
import {searchTestkitFactory as enzymeSearchTestkitFactory} from '../../testkit/enzyme';

import Search from './Search';

const options = [
  'The quick',
  'brown',
  'fox',
  'jumps over',
  'the lazy',
  'dog'
].map((value, index) => ({id: index, value}));

describe('Example of Search testkits usage', () => {
  describe('ReactTestUtils testkit', () => {
    it('should do search when text was entered', () => {
      const div = document.createElement('div');
      const dataHook = 'myDataHook';
      const wrapper = div.appendChild(ReactTestUtils.renderIntoDocument(
        <div>
          <Search
            dataHook={dataHook}
            options={options}
            />
        </div>
      ));
      const testkit = searchTestkitFactory({wrapper, dataHook});

      testkit.inputDriver.focus();
      testkit.inputDriver.enterText('fox');
      expect(testkit.dropdownLayoutDriver.isShown()).toBe(true);
      expect(testkit.dropdownLayoutDriver.optionsLength()).toBe(1);
    });
  });

  describe('Enzyme testkit', () => {
    it('should do search when text was entered', () => {
      const dataHook = 'myDataHook';
      const wrapper = mount((
        <Search
          dataHook={dataHook}
          options={options}
          />
      ));
      const testkit = enzymeSearchTestkitFactory({wrapper, dataHook});

      testkit.inputDriver.focus();
      testkit.inputDriver.enterText('fox');
      expect(testkit.dropdownLayoutDriver.isShown()).toBe(true);
      expect(testkit.dropdownLayoutDriver.optionsLength()).toBe(1);
    });
  });
});
```
### E2E testing example
```javascript
import {
    searchTestkitFactory,
    waitForVisibilityOf
} from '../../testkit/protractor';
import eyes from 'eyes.it';

describe('Example of Search Protractor testkit usage', () => {
  eyes.it('should show menu on trigger click', () => {
    const testkit = searchTestkitFactory({dataHook: 'myDataHook'});

    waitForVisibilityOf(testkit.element(), 'Can not find Search element').then(() => {
      testkit.clickOnInput();
      testkit.enterText('fox');

      waitForVisibilityOf(testkit.getSearchDropdown(), 'Can not find Search dropdown').then(() => {
        expect(testkit.getSearchOptionsCount()).toEqual(1);
      });
    });
  });
});
```
