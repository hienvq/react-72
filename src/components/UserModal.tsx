import { Form, Input, Modal, Radio, Select, notification } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { UserState, asyncAction, closeAct } from "../store/reducers/userReducer";
import { useEffect, useState } from "react";
import useNoti from "../hooks/useNotification";
import { closeUserModal, closeUserModalAsync } from "../store/actions/UserActions";
import { store } from "../store/store";

const UserModal = () => {
  const [form] = Form.useForm();
  const isOpen = useSelector((state: { user: UserState }) => {
    console.log("HienVQ ~  state:", state);
    return state.user.isOpen;
  });
  const initialValue = useSelector((state: { user: UserState }) => state.user.initValue);
  const dispatch = useDispatch();
  useEffect(() => form.resetFields(), [initialValue]);

  const showNoti = useNoti();
  const [options, setOptions] = useState([] as any);
  useEffect(() => {
    // TODO: CALL API GET OPTIONS
    // create map data = > [{label, value}]
    const data = [
      { id: 1, name: "a" },
      { id: 2, name: "B" },
    ];
    const mapData2Option = data.map((e) => ({ value: e.id, label: e.name }));
    setOptions(mapData2Option);
  }, []);
  return (
    <Modal
      forceRender
      open={isOpen}
      title="Create/Edit User"
      okText={initialValue?.id ? "Edit" : "Create"}
      cancelText="Cancel"
      onCancel={() => {
        form.resetFields();
        dispatch(closeAct());
      }}
      onOk={() => {
        form
          .validateFields()
          .then((values) => {
            console.log("HienVQ ~  values:", values);
            showNoti("error", "title", "description");
            dispatch(asyncAction({ text: "ABC" }));
            // notification.success({
            //   message: "ABC",
            //   description: "DEF",
            //   duration: 2,
            // });

            // dispatch(closeUserModalAsync() as any);
          })
          .catch((info) => {
            console.log("Validate Failed:", info);
          });
      }}
    >
      <Form form={form} layout="vertical" name="form_in_modal" initialValues={initialValue}>
        <Form.Item name="name" label="Name" rules={[{ required: true, message: "Username is require!!!" }]}>
          <Input />
        </Form.Item>
        <Form.Item name="avatarPath" label="Avatar">
          <Input />
        </Form.Item>
        <Form.Item name="selectBox" label="Select">
          <Select options={options} />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default UserModal;
