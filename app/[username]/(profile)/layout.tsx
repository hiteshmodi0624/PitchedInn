import ProfileRoot from "../../(root)/components/profile/profile-root";
const ProfileLayout = ({
    children,
    params,
}: {
    children: React.ReactNode;
    params: { username: string };
}) => {
    return <ProfileRoot params={params}>{children}</ProfileRoot>;
};

export default ProfileLayout;
