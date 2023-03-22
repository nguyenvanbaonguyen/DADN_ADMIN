import Paginate from '../Paginate/Paginate';
import AssetContents from './AssetContents';
import AssetHeader from './AssetHeader';
import AssetSearch from './AssetSearch';

const AssetTable = () => {
	return (
		<div>
			<AssetSearch />
			<div className="overflow-scroll hide-scroll tablet:max-w-auto">
				<div className="min-w-[1100px]">
					<AssetHeader />
					<AssetContents />
				</div>
			</div>
			<Paginate />
		</div>
	);
};

export default AssetTable;
