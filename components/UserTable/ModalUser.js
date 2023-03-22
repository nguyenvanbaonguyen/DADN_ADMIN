import Avatar from '../Avatar/Avatar';
import Button220 from '../ButtonList/Button220';
import ModalBase from '../Modal/ModalBase';

const ModalUser =
	(isOpen, closeModal) =>
	({ user = {} }) => {
		return (
			<ModalBase closeModal={closeModal} isOpen={isOpen}>
				<div className="max-w-[400px] w-full  overflow-auto hide-scroll p-[10px]">
					<p className="font-semibold">Avatar</p>

					<div className="mt1">
						<Avatar />
					</div>

					<p className="font-semibold mt2">Full Name</p>
					<div className=" mt1 bg-secondary w-full  p-[20px] shadow-login rad-base">
						<input
							className="bg-secondary w-full outline-none "
							placeholder="Fullname*"
							name="fullName"
						/>
					</div>
					<p className="mt2 font-semibold">Email</p>
					<div className=" mt1 bg-secondary w-full  p-[20px] shadow-login rad-base">
						<input
							className="bg-secondary w-full outline-none "
							placeholder="Email*"
							name="email"
						/>
					</div>
					<p className="mt2 font-semibold">Phone</p>
					<div className=" mt1 bg-secondary w-full  p-[20px] shadow-login rad-base">
						<input
							className="bg-secondary w-full outline-none "
							placeholder="Email*"
							name="email"
						/>
					</div>

					<div className="flex mt2">
						<Button220
							content="Agree"
							className=" text-black bg-red-400 border-blue-sky hover:bg-red-600"
							s
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
	};

export default ModalUser;
