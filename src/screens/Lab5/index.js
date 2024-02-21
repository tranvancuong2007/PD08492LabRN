import React from 'react';
import {Text} from 'react-native';

const MyLab5 = () => {
  return (
    <Text>
      Các nguyên tắc hoạt động của React Native gần như giống hệt với React ngoại trừ việc 
      React Native không thao tác với DOM thông qua DOM ảo. Nó chạy một quá trình xử lý nền 
      (phiên dịch JavaScript viết bởi các nhà phát triển) trực tiếp trên thiết bị đầu cuối
      và giao tiếp với nền tảng gốc qua một cầu trung gian, bất đông bộ và theo đợt.
    </Text>);
    
};

export default MyLab5;