import TopNav from "./components/TopNav";

interface Props {
    children: JSX.Element;
}

const Layout = ({children}: Props) => {

    return (
        <div className="h-screen bg-blue-50">
            <TopNav />
            <div>
              {children}
            </div>
        </div>
    )
}

export default Layout;