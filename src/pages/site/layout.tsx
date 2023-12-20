
type Props = {
    children: JSX.Element;
}

const Layout = ({children}: Props) => {

    return (
        <div className="h-screen bg-blue-50">
            {children}
        </div>
    )
}

export default Layout;