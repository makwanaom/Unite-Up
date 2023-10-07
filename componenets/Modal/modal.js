"use client"

import React from 'react';
import { Modal, Button, } from 'antd'; // Import Modal and Button from 'antd'

const ModalComponent = ({ modalOpen, setModalOpen ,setStatus, status, onBtn }) => {
  return (
    <>
      <Modal
        title="Create a post"
        centered
        open={modalOpen}
        onOk={() => setModalOpen(false)}
        onCancel={() => setModalOpen(false)}
        footer={[
          <Button key={ModalComponent.id} onClick={onBtn} type="primary" disabled= {status.length > 0 ? false : true}>
            Post
          </Button>,
        ]}
      >
        <input
         className='border-none bg-white text-black text-base w-full' placeholder='What do you want to post?' 
         onChange={(event) => setStatus(event.target.value) }
         value={status} />


         {/* <div>
            {allStatuses.map((posts) => {
                return (
                    <>
                    <p>{posts.status}</p>
                    </>
                );
            })}
         </div> */}
      </Modal>
    </>
  );
};

export default ModalComponent;
