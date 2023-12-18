import Modal from '../components/Modal';
import Button from '../components/Button';
import { useState } from 'react';

function ModalPage(){

    const [showModal, setShowModal] = useState(false);

    const handleClick = () =>{
        setShowModal(true);
    }

    const handleCLose = () =>{
        setShowModal(false);
    }

    const actionBar = <div>
        <Button primary onClick={handleCLose}>I Accept!</Button>
    </div>

    const modal = <Modal onClose={handleCLose} actionBar={actionBar}>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus hendrerit, nunc sit amet gravida sodales, dui libero efficitur mi, vitae facilisis eros tortor id quam. Nunc hendrerit in eros at molestie. Mauris id bibendum sapien. Etiam nunc leo, placerat et semper eu, mattis et leo. Aenean eu elementum libero. Nam mauris dui, condimentum sed urna et, eleifend condimentum neque. Sed metus metus, tristique vitae dolor ut, facilisis rutrum libero. Sed non ligula nec metus accumsan condimentum. Cras mi felis, rutrum non feugiat at, malesuada vel tellus. Phasellus sit amet pellentesque metus. Phasellus a convallis leo.
            </p>
        </Modal>

    return <div>
        <Button primary onClick={handleClick}>Open Modal!</Button>
        {showModal && modal}
    </div>
}
export default ModalPage;