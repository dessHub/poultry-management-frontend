import Nav from "./components/nav";

interface Props {
    children: JSX.Element;
}

const Layout = ({children}: Props) => {

    return (
        <div className="h-screen bg-neutral-900 text-neutral-300 flex flex-col sm:flex-row">
            <Nav />
            <div className="flex-1">
              {children}
            </div>
        </div>
    )
}

export default Layout;