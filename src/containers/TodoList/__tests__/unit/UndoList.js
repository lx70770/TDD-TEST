import React from "react";
import { shallow } from "enzyme";
import UndoList from "../../components/UndoList";
import { findTestWrapper } from "../../../../utils/testUtils";

it("无todolist时，显示为空", () => {
  const wrapper = shallow(<UndoList list={[]} />);
  const countElem = findTestWrapper(wrapper, "count");
  const listElem = findTestWrapper(wrapper, "list-item");
  expect(countElem.text()).toEqual("0");
  expect(listElem.length).toEqual(0);
});

it("有todolist时", () => {
  const listData = ["1111", "2222", "3333"];
  const wrapper = shallow(<UndoList list={listData} />);
  const countElem = findTestWrapper(wrapper, "count");
  const listElem = findTestWrapper(wrapper, "list-item");
  expect(countElem.text()).toEqual("3");
  expect(listElem.length).toEqual(3);
});

it("点击某个删除按钮，会调用删除方法", () => {
  const listData = ["1111", "2222", "3333"];
  const fn = jest.fn();
  const index = 1;
  const wrapper = shallow(<UndoList list={listData} deleteItem={fn} />);
  const deleteItems = findTestWrapper(wrapper, "delete-item");
  deleteItems.at(index).simulate("click"); // enzyme中数组下标是用at来获取
  expect(fn).toHaveBeenLastCalledWith(index);
});
