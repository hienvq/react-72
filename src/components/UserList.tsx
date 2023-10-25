import React from "react";
import { Button, Flex, Modal, Space, Table, Tag } from "antd";
import type { ColumnsType } from "antd/es/table";
import { deleteUsers, getUsers } from "../apis/UserApi";
import { ExclamationCircleOutlined, PlusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import useUserList from "../hooks/useUserList";
import { Navigate } from "react-router-dom";

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
          <a>Edit</a>
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
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <Modal title="Create User" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
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
