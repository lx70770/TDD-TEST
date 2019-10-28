import React from "react";
import Enzyme, { shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import App from "./App";

Enzyme.configure({ adapter: new Adapter() });

describe("测试enzyme的shallow", () => {
  const wrapper = shallow(<App />);
  const container = wrapper.find("[data-jest='container']");

  it("使用Enzyme测试DOM元素", () => {
    console.log(wrapper.debug());
    expect(container.length).toBe(1);
    expect(container.prop("name")).toBe("lixiang");
  });

  it("使用jest-enzyme方便测试DOM", () => {
    expect(container).toExist();
    expect(container).toHaveProp("name", "lixiang");
  });
});

describe("测试enzyme的mount", () => {
  const wrapper = mount(<App />);

  // 某些场景是不能修改DOM元素的 可以用快照测试
  it("使用Enzyme测试快照", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
