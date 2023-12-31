import TopNav from "./components/TopNav";

interface Props {
    children: JSX.Element;
}

const Layout = ({children}: Props) => {

    return (
        <div className="h-screen bg-slate-50 flex flex-col">
            <TopNav />
            <div className="flex-1">
              {children}
            </div>
        </div>
    )
}

export default Layout;