import React from "react";
import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";
import { SpinContainer } from "./style";

const SpinLoading = () => {
  const antIcon = <LoadingOutlined style={{ fontSize: 50 }} spin />;
  return (
    <SpinContainer>
      <Spin className="spin" indicator={antIcon} />
    </SpinContainer>
  );
};

export default SpinLoading;
