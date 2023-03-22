import { changeContent } from '@/components/Sidebar/sidebarSlice';
import { useDispatch } from 'react-redux';
import NewEditor from '@/components/PostEditor/NewEditor';
import Link from 'next/link';

const AddNew = () => {
	const dispatch = useDispatch();
	dispatch(changeContent('posts'));

	return (
		<div>
			<Link href="/posts">
				<p className="text-24-29 font-bold text-[#ABABAB]">
					Posts / <span className="text-select">Add Posts</span>
				</p>
			</Link>
			<div className="mt2 tablet:mt4">
				<NewEditor />
			</div>
		</div>
	);
};

export default AddNew;
