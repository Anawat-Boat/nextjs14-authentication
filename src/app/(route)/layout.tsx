export const AuthLayout = ({
    children, // will be a page or nested layout
}: {
    children: React.ReactNode;
}) => {
    return <section className="flex flex-row justify-center py-4 bg-white min-h-screen text-black">
        {children}
    </section>;
};

export default AuthLayout;
