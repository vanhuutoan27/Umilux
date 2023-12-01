import React from 'react';
import { FloatButton } from 'antd';
import { IoIosArrowUp } from 'react-icons/io';

function ToTopButton() {
  function scrollToTop() {
    window.scrollTo(0, 0);
  }

  return (
    <>
      <FloatButton
        shape="circle"
        type="primary"
        style={{
          bottom: 20,
          right: 20,
          width: '50px',
          height: '50px',
        }}
        icon={<IoIosArrowUp />}
        onClick={scrollToTop}
      />
    </>
  );
}

export default ToTopButton;