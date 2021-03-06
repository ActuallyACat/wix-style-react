import React from 'react';
import ReactTestUtils from 'react-dom/test-utils';
import ReactDOM from 'react-dom';
import styles from './DropdownLayout.scss';
import values from 'lodash/values';
import {isClassExists} from '../../test/utils';

const dropdownLayoutDriverFactory = ({element, wrapper, component}) => {
  const contentContainer = element.childNodes[0];
  const options = element.querySelector('[data-hook=dropdown-layout-options]');
  const optionAt = position => (options.childNodes[position]);
  const optionsLength = () => options.childNodes.length;
  const doIfOptionExists = (position, onSuccess) => {
    if (optionsLength() <= position) {
      throw `index out of bounds, try to get option ${position} while only ${optionsLength()} options exists`;
    }
    return onSuccess();
  };

  return {
    exists: () => !!element,
    isShown: () => isClassExists(contentContainer, 'shown'),
    isDown: () => isClassExists(contentContainer, 'down'),
    isUp: () => isClassExists(contentContainer, 'up'),
    hasTheme: theme => isClassExists(element, `theme-${theme}`),
    tabIndex: () => element.tabIndex,
    optionsLength: () => optionsLength(),
    mouseEnterAtOption: position => doIfOptionExists(position, () => ReactTestUtils.Simulate.mouseEnter(optionAt(position))),
    mouseLeaveAtOption: position => doIfOptionExists(position, () => ReactTestUtils.Simulate.mouseLeave(optionAt(position))),
    mouseClickOutside: () => document.body.dispatchEvent(new Event('mouseup', {cancelable: true})),
    isOptionExists: optionText => [].filter.call(options.childNodes, opt => opt.textContent === optionText).length > 0,
    isOptionHovered: position => doIfOptionExists(position, () => isClassExists(optionAt(position), 'hovered')),
    isOptionSelected: position => doIfOptionExists(position, () => isClassExists(optionAt(position), 'selected')),
    isOptionHoveredWithGlobalClassName: position => doIfOptionExists(position, () => isClassExists(optionAt(position), 'wixstylereactHovered')),
    isOptionSelectedWithGlobalClassName: position => doIfOptionExists(position, () => isClassExists(optionAt(position), 'wixstylereactSelected')),
    isOptionHeightSmall: position => doIfOptionExists(position, () => isClassExists(optionAt(position), 'smallHeight')),
    isOptionHeightBig: position => doIfOptionExists(position, () => isClassExists(optionAt(position), 'bigHeight')),
    isLinkOption: position => optionAt(position).tagName.toLowerCase() === 'a',
    classes: () => options.className,
    pressDownKey: () => ReactTestUtils.Simulate.keyDown(element, {key: 'ArrowDown'}),
    pressUpKey: () => ReactTestUtils.Simulate.keyDown(element, {key: 'ArrowUp'}),
    pressEnterKey: () => ReactTestUtils.Simulate.keyDown(element, {key: 'Enter'}),
    pressTabKey: () => ReactTestUtils.Simulate.keyDown(element, {key: 'Tab'}),
    pressEscKey: () => ReactTestUtils.Simulate.keyDown(element, {key: 'Escape'}),
    optionContentAt: position => doIfOptionExists(position, () => optionAt(position).textContent),
    optionAt,
    optionsContent: () => values(options.childNodes).map(option => option.textContent),
    clickAtOption: position => doIfOptionExists(position, () => ReactTestUtils.Simulate.mouseDown(optionAt(position))),
    clickAtOptionWithValue: value => {
      const option = values(options.childNodes).find(option => option.innerHTML === value);
      option && ReactTestUtils.Simulate.mouseDown(option);
    },
    isOptionADivider: position => doIfOptionExists(position, () => isClassExists(optionAt(position), 'divider')),
    mouseEnter: () => ReactTestUtils.Simulate.mouseEnter(element),
    mouseLeave: () => ReactTestUtils.Simulate.mouseLeave(element),
    setProps: props => {
      const ClonedWithProps = React.cloneElement(component, Object.assign({}, component.props, props), ...(component.props.children || []));
      ReactDOM.render(<div ref={r => element = r}>{ClonedWithProps}</div>, wrapper);
    },
    hasTopArrow: () => !!element.querySelector(`.${styles.arrow}`),
    isSelectedHighlight: () => component.props.selectedHighlight,
    optionById(optionId) {
      return this.optionByHook(`dropdown-item-${optionId}`);
    },
    optionByHook: hook => {
      const option = options.querySelector(`[data-hook=${hook}]`);
      if (!option) {
        throw `an option with data-hook ${hook} was not found`;
      }
      return {
        element: () => option,
        mouseEnter: () => ReactTestUtils.Simulate.mouseEnter(option),
        mouseLeave: () => ReactTestUtils.Simulate.mouseLeave(option),
        isHovered: () => isClassExists(option, 'hovered'),
        isSelected: () => isClassExists(option, 'selected'),
        isHoveredWithGlobalClassName: () => isClassExists(option, 'wixstylereactHovered'),
        isSelectedWithGlobalClassName: () => isClassExists(option, 'wixstylereactSelected'),
        content: () => option.textContent,
        click: () => ReactTestUtils.Simulate.mouseDown(option),
        isDivider: () => isClassExists(option, 'divider')
      };
    }
  };
};

export default dropdownLayoutDriverFactory;
