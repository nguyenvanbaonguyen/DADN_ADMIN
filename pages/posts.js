import NewTable from '@/components/PostTable/PostTable';
import Link from 'next/link';
import React from 'react';

const Posts = () => {
	return (
		<div>
			<div className="flex justify-between">
				<p className="text-24-29 font-bold text-select">Posts</p>
				<Link href="/addpost">
					<div className="h-[60px] -my-[15px] w-[220px] bg-blue-sky rounded-[100px] centreFlex text-14-17 font-bold text-white cursor-pointer">
						+ Add Post
					</div>
				</Link>
			</div>
			<NewTable />
		</div>
	);
};

export default Posts;
