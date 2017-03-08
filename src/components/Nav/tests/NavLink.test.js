/**
 * Testing our NavLink component
 */
import { ThemeProvider } from 'styled-components';

import { shallow, mount } from 'enzyme';
import React from 'react';
import theme from 'theme';

import NavLink from '../NavLink';

const children = (<h1>Test</h1>);

const renderComponent = (props = {}) => shallow(
  <NavLink
    className={props.className}
  >
    {props.children}
  </NavLink>
);


const renderComponentUsingTheme = (props = {}) => mount(
  <ThemeProvider theme={theme}>
    <NavLink
      className={props.className}
    >
      {props.children}
    </NavLink>
  </ThemeProvider>
);


describe('<NavLink />', () => {
  it('should render an <NavLink> tag without a theme', () => {
    const renderedComponent = renderComponent({
      children,
    });
    expect(renderedComponent.find('a').length).toBe(1);
  });
  it('should have children without a theme', () => {
    const renderedComponent = renderComponent({
      children,
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
  it('should render a <NavLink> tag with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
    });
    expect(renderedComponent.find('NavLink').length).toBe(1);
  });
  it('should have children with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
});