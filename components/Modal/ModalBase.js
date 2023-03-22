import { Dialog, Transition } from '@headlessui/react';
import Image from 'next/image';
import React, { Fragment } from 'react';

const ModalBase = ({ isOpen, closeModal, children }) => {
	return (
		<Transition appear show={isOpen} as={Fragment}>
			<Dialog as="div" className="relative z-10" onClose={closeModal}>
				<Transition.Child
					as={Fragment}
					enter="ease-out duration-300"
					enterFrom="opacity-0"
					enterTo="opacity-100"
					leave="ease-in duration-200"
					leaveFrom="opacity-100"
					leaveTo="opacity-0"
				>
					<div className="fixed inset-0 bg-black bg-opacity-25" />
				</Transition.Child>

				<div className="fixed inset-0 flex items-center justify-center p-4 overflow-y-auto">
					<Transition.Child
						as={Fragment}
						enter="ease-out duration-300"
						enterFrom="opacity-0 scale-95"
						enterTo="opacity-100 scale-100"
						leave="ease-in duration-200"
						leaveFrom="opacity-100 scale-100"
						leaveTo="opacity-0 scale-95"
					>
						<Dialog.Panel className="max-w-[calc(100vw-40px)] max-h-[calc(100vh-100px)] px-[10px] py-[30px] tablet:px-[40px] tablet:py-[40px] centreFlex bg-primary rounded-[20px] flex-col relative">
							<div
								className="absolute top-[3px] right-[3px] tablet:right-[10px] tablet:top-[10px] cursor-pointer hover:bg-rose-400 p-[9px] rounded-full"
								onClick={closeModal}
							>
								<Image
									alt=""
									src="/images/icons/x.svg"
									width={24}
									height={24}
								/>
							</div>
							{children}
						</Dialog.Panel>
					</Transition.Child>
				</div>
			</Dialog>
		</Transition>
	);
};

export default ModalBase;
