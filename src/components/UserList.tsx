import React from "react";
import { Button, Flex, Modal, Space, Table, Tag } from "antd";
import type { ColumnsType } from "antd/es/table";
import { deleteUsers, getUsers } from "../apis/UserApi";
import { ExclamationCircleOutlined, PlusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import useUserList from "../hooks/useUserList";
import { Navigate } from "react-router-dom";
import UserModal from "./UserModal";
import { useDispatch } from "react-redux";

interface DataType {
  id: string;
  name: string;
  avatar: number;
}
// delete api/v1/users/12
const UserList: React.FC = () => {
  const { confirm } = Modal;

  const columns: ColumnsType<DataType> = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Avatar",
      dataIndex: "avatar",
      // key: "avatar",
      render: (url) => <img src={url} alt="" />,
    },
    {
      title: "Action",
      render: (_, record) => (
        <Space size="middle">
          <a
            href="/"
            onClick={(event: any) => {
              event.preventDefault();
              dispatch({
                type: "edit",
                payload: {
                  isOpen: true,
                  initValue: {
                    id: record.id,
                    name: record.name,
                    avatarPath: record.avatar,
                  },
                },
              });
            }}
          >
            Edit
          </a>
          <a
            href="/"
            onClick={(event: any) => {
              event.preventDefault();
              confirm({
                title: "Confirm",
                icon: <ExclamationCircleOutlined />,
                content: "Are you sure???",
                okText: "OK",
                cancelText: "Cancel",
                onOk: async () => {
                  await deleteUsers(record.id);
                  await getData();
                },
              });
            }}
          >
            Delete
          </a>
        </Space>
      ),
    },
  ];
  const [data, getData]: any = useUserList();
  const dispatch = useDispatch();
  const showModal = () => {
    dispatch({
      type: "create",
      payload: {
        isOpen: true,
        initValue: {},
      },
    });
  };

  return (
    <>
      <UserModal />
      <Flex justify="flex-end" style={{ marginBottom: 20 }}>
        <Button type="primary" icon={<PlusCircleOutlined />} onClick={showModal}>
          ADD
        </Button>
      </Flex>
      <Table columns={columns} dataSource={data} rowKey="id" />
    </>
  );
};

export default UserList;
