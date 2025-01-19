import UserInfo from "./UserInfo";
import BuddyInfo from "./BuddyInfo";

const UserInfoSection = () => {
  return (
    <section className="w-full flex justify-center">
      <div className="flex flex-row gap-28">
        <UserInfo />
        <BuddyInfo />
      </div>
    </section>
  );
};

export default UserInfoSection;