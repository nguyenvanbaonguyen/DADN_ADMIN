import Button220 from '../ButtonList/Button220';
import ModalBase from './ModalBase';

const ModalConfirm =
	(isOpen, closeModal) =>
	({ action = () => {} }) =>
		(
			<ModalBase closeModal={closeModal} isOpen={isOpen}>
				<div className="flex flex-col centreFlex p-3 tablet:p-5 ">
					<h2 className="text-24-32 tablet:text-[40px] tablet:leading-[49px] text-select font-bold">
						Are you agree to delete?
					</h2>
					<p className="text-16-22 tablet:text-20-24 mt-4">
						You will lose this information
					</p>
					<div className="flex mt2 max-w-[300px]">
						<Button220
							content="Agree"
							className=" text-black bg-red-400 border-blue-sky hover:bg-red-600"
							onClick={action}
						/>
						<Button220
							content="Cancel"
							className="ml-3 text-black border-blue-sky hover:bg-slate-100"
							onClick={closeModal}
						/>
					</div>
				</div>
			</ModalBase>
		);

export default ModalConfirm;
