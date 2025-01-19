import React from 'react';
import Image from 'next/image';

interface BuddyInfoProps {
  userImage?: string;
}

const BuddyInfo: React.FC<BuddyInfoProps> = ({ userImage }) => {
    return (
        <div className="flex flex-col items-center">
            <div className="w-auto h-full flex flex-col items-center">
                <h2 className="text-center">My accountability buddy</h2>
                <Image
                    src={userImage ? userImage : "/placeholder.png"}
                    alt="User Avatar"
                    objectFit="cover"
                    width={100}
                    height={100}
                />
                <p className="text-center">Herman Bud</p>
            </div>
        </div>
    );
};

export default BuddyInfo;