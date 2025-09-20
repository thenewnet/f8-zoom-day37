import withLoading from "@/hoc/withLoading";

const UserProfile = withLoading(
    () => {
        return (
            <div>
                <h3>User Profile</h3>
                <p>Name: John Doe</p>
                <p>Email: john@example.com</p>
            </div>
        );
    }
);

export default UserProfile;