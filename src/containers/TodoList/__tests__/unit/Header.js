import React from "react";
import { shallow } from "enzyme";
import Header from "../../components/Header";
import { findTestWrapper } from "../../../../utils/testUtils";

describe("Header组件", () => {
  it("渲染正常", () => {
    const wrapper = shallow(<Header />);
    expect(wrapper).toMatchSnapshot();
  });

  it("包含一个Input框", () => {
    const wrapper = shallow(<Header />);
    const inputElem = findTestWrapper(wrapper, "input");
    expect(inputElem.length).toBe(1);
  });

  it("Input框初始化内容为空，用户输入时会变化 使用simulate", () => {
    const wrapper = shallow(<Header />);
    const inputElem = findTestWrapper(wrapper, "input");
    const userInput = "JEST";
    inputElem.simulate("change", {
      target: { value: userInput }
    });
    expect(wrapper.state("value")).toEqual(userInput);
  });

  it("Input框初始化内容为空，用户输入回车 函数不应该被调用", () => {
    const fn = jest.fn();
    const wrapper = shallow(<Header addUndoItem={fn} />);
    const inputElem = findTestWrapper(wrapper, "input");
    const userInput = "";
    wrapper.setState({ value: userInput });
    inputElem.simulate("keyUp", {
      keyCode: 13
    });
    expect(fn).not.toHaveBeenCalled();
  });

  it("Input框初始化内容不为空，用户输入回车 函数应该被调用", () => {
    const fn = jest.fn();
    const wrapper = shallow(<Header addUndoItem={fn} />);
    const inputElem = findTestWrapper(wrapper, "input");
    const userInput = "JEST";
    wrapper.setState({ value: userInput });
    inputElem.simulate("keyUp", {
      keyCode: 13
    });
    expect(fn).toHaveBeenCalled();
    expect(fn).toHaveBeenLastCalledWith(userInput);
  });

  it("Input框初始化内容不为空，用户输入回车 input应该被清空", () => {
    const fn = jest.fn();
    const wrapper = shallow(<Header addUndoItem={fn} />);
    const inputElem = findTestWrapper(wrapper, "input");
    const userInput = "JEST";
    wrapper.setState({ value: userInput });
    inputElem.simulate("keyUp", {
      keyCode: 13
    });
    const newInputElem = findTestWrapper(wrapper, "input");
    expect(newInputElem.prop("value")).toBe("");
  });
});
