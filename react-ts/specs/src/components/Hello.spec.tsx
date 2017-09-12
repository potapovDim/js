import * as React from "react";
import { mount } from 'enzyme';
import { expect } from 'chai';
import { Hello, HelloProps} from '../../../src/components/Hello';

describe('Hello', () => {
  it('render component and assert', () => {
    const props: HelloProps = {
      compiler: 'Test Compiler',
      framework: 'React'
    };
    const wrapper = mount(<Hello {...props} />);
    expect(wrapper.text().indexOf(props.compiler) >= 0).to.eql(true);
    expect(wrapper.text().indexOf(props.framework) >= 0).to.eql(true);
    wrapper.unmount();
  });
});