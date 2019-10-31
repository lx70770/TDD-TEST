import React from "react";
import { shallow } from "enzyme";
import TodoList from "../../index";

it("TodoList初始化列表为空", () => {
  const wrapper = shallow(<TodoList />);
  expect(wrapper.state("undoList")).toEqual([]);
});

it("TodoList应该给Header传递一个addUndoItem的方法", () => {
  const wrapper = shallow(<TodoList />);
  const Header = wrapper.find("Header");
  expect(Header.prop("addUndoItem")).toBeTruthy(); // 获取组件实例
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

it("TodoList 应该给未完成列表传递 list 数据， 以及 deleteItem 方法", () => {
  const wrapper = shallow(<TodoList />);
  const UndoList = wrapper.find("UndoList");
  expect(UndoList.prop("list")).toBeTruthy();
  expect(UndoList.prop("deleteItem")).toBeTruthy();
});

it("deleteItem执行时，undolist删除内容", () => {
  const wrapper = shallow(<TodoList />);
  wrapper.setState({
    undoList: ["111", "222", "333"]
  });
  wrapper.instance().deleteItem(1);
  expect(wrapper.state("undoList")).toEqual(["111", "333"]);
});
