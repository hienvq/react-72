import { notification } from "antd";

type NotificationType = "success" | "info" | "warning" | "error";

const useNoti = () => {
  const openNotification = (type: NotificationType, message: string, description: string) => {
    notification[type]({
      message,
      description,
      duration: 2,
    });
  };
  return openNotification;
};

export default useNoti;
