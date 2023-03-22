import { useDispatch, useSelector } from 'react-redux';

import { getIds, getParams } from '@/redux/table/tableSelector';
import ModalConfirm from './ModalConfirm';
import { callApi, toggleSign } from '@/redux/table/tableSlice';

const ModalDelete =
	(isOpen, closeModal) =>
	({ api, id }) => {
		const dispatch = useDispatch();

		let ids = useSelector(getIds);
		const params = useSelector(getParams);
		const callDatas = callApi(api);

		const deleteMany = async () => {
			try {
				if (id != undefined) ids = [id];

				if (ids.length <= 0) return closeModal();
				await Promise.all(
					ids.map(async (id) => {
						await api.delete(id);
					})
				);

				dispatch(callDatas(params));
				closeModal();
			} catch (err) {
				console.log(err);
			}
		};

		const ModalDel = ModalConfirm(isOpen, closeModal);

		return <ModalDel action={deleteMany} />;
	};

export default ModalDelete;
