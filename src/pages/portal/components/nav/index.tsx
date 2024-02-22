
import MobileNav from "./MobileNav";
import Desktop from "./Desktop";
import NavPanel from "./NavPanel";

const Nav = () => {

    return (
        <>
           <MobileNav>
              <NavPanel />
           </MobileNav>
           <Desktop>
              <NavPanel />
           </Desktop>
        </>
    )
}

export default Nav;