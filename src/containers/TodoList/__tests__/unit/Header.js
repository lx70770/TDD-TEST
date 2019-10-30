import React from "react";
import Enzyme, { shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Header from "../../components/Header";

Enzyme.configure({ adapter: new Adapter() });

it("Header渲染正常", () => {
  const wrapper = shallow(<Header />);
  expect(wrapper).toMatchSnapshot();
});

it("Header组件里包含一个Input框", () => {
  const wrapper = shallow(<Header />);
  const inputElem = wrapper.find("[data-test='input']");
  expect(inputElem.length).toBe(1);
});

it("Header组件Input框初始化内容为空，用户输入时会变化 使用simulate", () => {
  const wrapper = shallow(<Header />);
  const inputElem = wrapper.find("[data-test='input']");
  const userInput = "JEST";
  inputElem.simulate("change", {
    target: { value: userInput }
  });
  expect(wrapper.state("value")).toEqual(userInput);
});

it("Header组件Input框初始化内容为空，用户输入回车 函数不应该被调用", () => {
  const fn = jest.fn();
  const wrapper = shallow(<Header addUndoItem={fn} />);
  const inputElem = wrapper.find("[data-test='input']");
  const userInput = "";
  wrapper.setState({ value: userInput });
  inputElem.simulate("keyUp", {
    keyCode: 13
  });
  expect(fn).not.toHaveBeenCalled();
});

it("Header组件Input框初始化内容不为空，用户输入回车 函数应该被调用", () => {
  const fn = jest.fn();
  const wrapper = shallow(<Header addUndoItem={fn} />);
  const inputElem = wrapper.find("[data-test='input']");
  const userInput = "JEST";
  wrapper.setState({ value: userInput });
  inputElem.simulate("keyUp", {
    keyCode: 13
  });
  expect(fn).toHaveBeenCalled();
  expect(fn).toHaveBeenLastCalledWith(userInput);
});

it("Header组件Input框初始化内容不为空，用户输入回车 input应该被清空", () => {
  const fn = jest.fn();
  const wrapper = shallow(<Header addUndoItem={fn} />);
  const inputElem = wrapper.find("[data-test='input']");
  const userInput = "JEST";
  wrapper.setState({ value: userInput });
  inputElem.simulate("keyUp", {
    keyCode: 13
  });
  const newInputElem = wrapper.find("[data-test='input']");
  expect(newInputElem.prop("value")).toBe("");
});
