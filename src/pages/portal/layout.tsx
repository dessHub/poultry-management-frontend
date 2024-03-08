import Nav from "./components/nav";

interface Props {
    children: JSX.Element;
}

const Layout = ({children}: Props) => {

    return (
        <div className="h-screen max-h-screen bg-neutral-950 text-neutral-300 flex flex-col sm:flex-row">
            <Nav />
            
            <div className="flex-1 sm:h-screen">
              {children}
            </div>
        </div>
    )
}

export default Layout;