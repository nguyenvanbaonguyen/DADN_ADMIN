import { useState } from 'react';
import { Popover } from '@headlessui/react';
import { switchAction, toAction } from '@/helpers/convertAction';

const PetAdd = () => {

    return (
        <Popover className="relative font-semibold capitalize">
            <Popover.Button
                as="div"
                className="w-[40px] h-[40px] centreFlex bg-[#FAFBFD] border-[0.6px] border-[#D5D5D5] cursor-pointer hover:bg-slate-200 rounded-full"

            >
                <p>+</p>
            </Popover.Button>
            <Popover.Panel as="div" className="absolute w-full">
                {({ close }) => (
                    <div>Add pet</div>
                )}
            </Popover.Panel>

        </Popover>
    )
};

export default PetAdd;