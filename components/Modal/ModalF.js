import { Dialog, Transition } from '@headlessui/react';
import Image from 'next/image';
import React, { Fragment } from 'react';
import Button220 from '../ButtonList/Button220';

const ModalConfirm = ({ isOpen = false, closeModal = () => {} }) => {
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
						<Dialog.Panel className="w-[700px] h-[340px] centreFlex bg-primary rounded-[20px] flex-col relative">
							<div
								className="absolute right-[30px] top-[30px] cursor-pointer hover:bg-rose-400 p-[9px] rounded-full"
								onClick={closeModal}
							>
								<Image
									alt=""
									src="/images/icons/x.svg"
									width={24}
									height={24}
								/>
							</div>
							<h2 className="text-[40px] leading-[49px] text-select font-bold">
								Are you agree to cancel?
							</h2>
							<p className="text-20-24 mt-4">You will lose this information</p>
							<div className="">
								<Button220
									content="Cancel"
									className="mt-4 text-black border-blue-sky hover:bg-slate-100"
								/>
							</div>
						</Dialog.Panel>
					</Transition.Child>
				</div>
			</Dialog>
		</Transition>
	);
};

export default ModalConfirm;
