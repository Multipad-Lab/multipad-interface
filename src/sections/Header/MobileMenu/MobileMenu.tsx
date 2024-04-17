import { useState } from "react"
import { BsXLg } from "react-icons/bs"
import MobileMenuStyleWrapper from "./MobileMenu.style"
import logo from "src/assets/images/logo.svg"
import data from "src/assets/data/menu/menuData"
import { Link, NavLink } from "react-router-dom"
import { useModal } from "src/utils/ModalContext"
import { AccountRole } from "src/types/account"
import { adminMenuData } from "src/assets/data/menu/adminMenuData"
import ConnectButton from "src/components/connectButton"
import { useAccount, useChainId } from "wagmi"
import { useFaucet } from "src/hooks"
import Spin from "src/components/Spin/Spin"
import Button from "src/components/button"

const MobileMenu = ({ mobileMenuhandle }: any) => {
  const [menuId, setMenuId] = useState("")
  const [subMenuId, setSubMenuId] = useState("")
  const { account } = useModal()
  const navbar = account?.role === AccountRole.ADMIN ? adminMenuData : data
  const { isConnected } = useAccount()
  const chainId = useChainId()
  const { faucet, isLoading } = useFaucet()

  const handleFaucet = () => {
    if (isLoading) return

    faucet()
  }

  return (
    <MobileMenuStyleWrapper className='gamfi_mobile_menu'>
      <div className='gamfi_mobile_menu_content'>
        <div className='mobile_menu_logo'>
          <img className='gamfi_logo' src={logo} alt='gamfi logo' />
          <button className='mobile_menu_close_btn' onClick={() => mobileMenuhandle()}>
            {" "}
            <BsXLg />{" "}
          </button>
        </div>
        <div className='gamfi_mobile_menu_list'>
          <ul>
            {/* menu  */}
            {navbar?.map((menu, i) => (
              <li
                key={i}
                // manu expand icon and menu active based on condition
                className={`${menu.subMenus?.length > 0 ? "has_submenu" : ""} ${
                  menuId === menu.id ? "expand_submenu" : ""
                }`}
                onClick={() => setMenuId(menu.id)}
              >
                <NavLink className={({ isActive }) => (isActive ? "active" : "")} to={menu.url}>
                  {menu.title}
                </NavLink>

                {/* if has subMenu and length is greater than 0 */}
                {menu.subMenus?.length > 0 && (
                  <ul className='sub_menu_list'>
                    {menu.subMenus?.map((subMenu, i) => (
                      <li
                        key={i}
                        // manu expand icon and menu active based on condition
                        className={`${subMenu?.subMenuChilds && subMenu?.subMenuChilds?.length > 0 ? "sub_has_submenu" : ""} ${
                          subMenuId === subMenu.id ? "expand_submenu_child" : ""
                        }`}
                        onClick={() => setSubMenuId(subMenu.id)}
                      >
                        <Link to={subMenu.url}>{subMenu.title}</Link>
                        {/* if subMenu child has menu child */}
                        {subMenu?.subMenuChilds && subMenu?.subMenuChilds?.length > 0 && (
                          <ul className='sub_menu_child_list'>
                            {subMenu?.subMenuChilds?.map((subChild, i) => (
                              <li key={i}>
                                <Link to={subChild.url}> {subChild.title} </Link>
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
        <ConnectButton isMobile />

        {isConnected && account && chainId === 97 && (
          <div className='faucet'>
            <Spin spinning={isLoading}>
              <Button onClick={handleFaucet} sm={true}>
                Faucet
              </Button>
            </Spin>
          </div>
        )}
      </div>
    </MobileMenuStyleWrapper>
  )
}

export default MobileMenu
