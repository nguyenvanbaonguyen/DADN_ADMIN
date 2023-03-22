import { useDispatch, useSelector } from 'react-redux';
import { getInfoPage } from '@/redux/table/tableSelector';
import ButtonIcon from '../ButtonList/ButtonIcon';
import { setPage } from '@/redux/table/tableSlice';

const Paginate = ({}) => {
	const dispatch = useDispatch();

	const { page, totalItems, totalPage } = useSelector(getInfoPage);

	const handleChangePage = (page) => () => {
		dispatch(setPage(page));
	};

	return (
		<div className="mt2 ml-[40px] flex items-center">
			<ButtonIcon
				type="full"
				icon="left"
				disable={page <= 1}
				action={handleChangePage(page - 1)}
			/>

			<div className="centreFlex text-16-20 font-bold w-10 h-10 bg-[#FAFBFD] rounded-[8px] border-[0.6px] ml-[10px]">
				{page}
			</div>

			<ButtonIcon
				type="full"
				icon="right"
				className="ml-[10px]"
				action={handleChangePage(page + 1)}
				disable={page >= totalPage}
			/>

			<div className="text-16-20 text-[#ABABAB] ml-[15px]">
				Page {page}/{totalPage} (Total {totalItems})
			</div>
		</div>
	);
};

export default Paginate;
