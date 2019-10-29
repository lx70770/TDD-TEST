import React from "react";
import Enzyme, { shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import TodoList from "../../index";

Enzyme.configure({ adapter: new Adapter() });

it("TodoList初始化列表为空", () => {
  const wrapper = shallow(<TodoList />);
  expect(wrapper.state("undoList")).toEqual([]);
});

it("TodoList应该给Header传递一个addUndoItem的方法", () => {
  const wrapper = shallow(<TodoList />);
  const Header = wrapper.find("Header");
  expect(Header.prop("addUndoItem")).toBe(wrapper.instance().addUndoItem); // 获取组件实例
});

it("回车时，undolist新增内容", () => {
  const wrapper = shallow(<TodoList />);
  const Header = wrapper.find("Header");
  const addFunc = Header.prop("addUndoItem");
  const userInput = "JEST";
  addFunc(userInput);
  expect(wrapper.state("undoList").length).toBe(1);
  expect(wrapper.state("undoList")[0]).toBe(userInput);
});
