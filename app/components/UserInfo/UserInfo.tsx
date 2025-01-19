import React from 'react';
import Image from 'next/image';

interface UserInfoProps {
  userImage?: string;
}

const UserInfo: React.FC<UserInfoProps> = ({ userImage }) => {
    return (
        <div className="flex flex-col items-center">
            <div className="w-auto h-full flex flex-col items-center">
                <h2 className="text-center">I am</h2>
                <Image
                    src={userImage ? userImage : "/placeholder.png"}
                    alt="User Avatar"
                    objectFit="cover"
                    width={100}
                    height={100}
                />
                <p className="text-center">Davey Jones</p>
            </div>
        </div>
    );
};

export default UserInfo;