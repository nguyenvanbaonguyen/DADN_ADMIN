import ModalConfirm from '@/components/Modal/ModalConfirm';
import { useState } from 'react';

const useModal = (Component = ModalConfirm) => {
	const [isOpen, setIsOpen] = useState(false);

	const closeModal = () => {
		setIsOpen(false);
	};

	const openModal = () => {
		setIsOpen(true);
	};

	return [openModal, closeModal, Component(isOpen, closeModal)];
};

export default useModal;
