import { useState } from "react"
// import { useModal } from "src/utils/ModalContext"
import { MdNotes, MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowRight } from "react-icons/md"
import NavWrapper from "./Header.style"
// import Button from "src/components/button"
import MobileMenu from "../MobileMenu/MobileMenu"
import data from "src/assets/data/menu/menuData"
import logo from "src/assets/images/logo.svg"

// import connectIcon from "src/assets/images/icons/connect.png"
import walletIcon1 from "src/assets/images/icons/pancake.png"
import walletIcon2 from "src/assets/images/icons/uniswap.png"
import walletIcon3 from "src/assets/images/icons/market.png"
import walletIcon4 from "src/assets/images/icons/gate.png"
import { Link, NavLink } from "react-router-dom"
import ConnectButton from "src/components/connectButton"
import { routesName } from "src/const/routes"
import { useModal } from "src/utils/ModalContext"
import { AccountRole } from "src/types/account"
import { adminMenuData } from "src/assets/data/menu/adminMenuData"
import Button from "src/components/button"
import { useAccount, useChainId } from "wagmi"
import { useFaucet } from "src/hooks"
import Spin from "src/components/Spin/Spin"
import IconFire from "src/assets/images/icon_fire.png"

const Header = () => {
  const [isMobileMenu, setMobileMenu] = useState(false)
  const { account } = useModal()
  const navbar = account?.role === AccountRole.ADMIN ? adminMenuData : data
  const { isConnected } = useAccount()
  const chainId = useChainId()
  const { faucet, isLoading } = useFaucet()

  const handleFaucet = () => {
    if (isLoading) return

    faucet()
  }

  const handleMobileMenu = () => {
    setMobileMenu(!isMobileMenu)
  }

  // *******Comment out this code blew if you want to use sticky menu *******
  // useEffect(() => {
  //   const header = document.getElementById("navbar");
  //   const handleScroll = window.addEventListener("scroll", () => {
  //     if (window.pageYOffset > 50) {
  //       header.classList.add("sticky");
  //     } else {
  //       header.classList.remove("sticky");
  //     }
  //   });

  //   return () => {
  //     window.removeEventListener("sticky", handleScroll);
  //   };
  // }, []);

  // const handleWalletBtn = (e: any) => {
  //   e.preventDefault()
  //   walletModalHandle()
  // }

  return (
    <NavWrapper className='gamfi_header' id='navbar'>
      <div className='container'>
        {/* Main Menu Start */}
        <div className='gamfi_menu_sect'>
          <div className='gamfi_menu_left_sect'>
            <div className='logo'>
              <Link to={routesName.ROOT}>
                <img src={logo} alt='multipad logo' />
              </Link>
            </div>
          </div>
          <div className='gamfi_menu_right_sect gamfi_v1_menu_right_sect'>
            <div className='gamfi_menu_list'>
              <ul>
                {/* menu  */}
                {navbar?.map((menu, i) => {
                  return (
                    <li key={i}>
                      <NavLink className={({ isActive }) => (isActive ? "active" : "")} to={menu.url}>
                        {menu.title} {menu?.subMenus?.length > 0 && <MdOutlineKeyboardArrowDown />}
                      </NavLink>

                      {/* if has subMenu and length is greater than 0 */}
                      {menu.subMenus?.length > 0 && (
                        <ul className='sub_menu_list'>
                          {menu.subMenus?.map((subMenu, i) => (
                            <li key={i}>
                              <Link to={subMenu.url}>
                                {subMenu.title}{" "}
                                {subMenu?.subMenuChilds && subMenu?.subMenuChilds?.length > 0 && (
                                  <MdOutlineKeyboardArrowRight />
                                )}
                              </Link>

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
                  )
                })}
                <li style={{ "margin-left": "-42px", "margin-bottom": "32px" }}>
                  <img style={{ height: "28px", width: "28px" }} src={IconFire}></img>
                </li>
                {isConnected && account && chainId === 97 && (
                  <li onClick={handleFaucet}>
                    <div className='faucet'>
                      <Spin spinning={isLoading}>
                        <Button sm={true}>Faucet</Button>
                      </Spin>
                    </div>
                  </li>
                )}
              </ul>
            </div>
            <div className='gamfi_menu_btns'>
              <button className='menu_btn' onClick={() => handleMobileMenu()}>
                <MdNotes />
              </button>

              <div className='wallet_btn'>
                Buy token <MdOutlineKeyboardArrowDown />
                <div className='wallet_token_list'>
                  <Link to='#'>
                    {" "}
                    <img src={walletIcon1} alt='icon' /> PancakeSwap{" "}
                  </Link>
                  <Link to='#'>
                    {" "}
                    <img src={walletIcon2} alt='icon' /> UniSwap
                  </Link>
                  <Link to='#'>
                    {" "}
                    <img src={walletIcon3} alt='icon' /> CoinMarketCap
                  </Link>
                  <Link to='#'>
                    {" "}
                    <img src={walletIcon4} alt='icon' /> Gate.io
                  </Link>
                </div>
              </div>

              <div className='connect_btn'>
                <ConnectButton />
              </div>
              {/* <Button to='# ' sm variant='white' className='connect_btn' onClick={(e: any) => handleWalletBtn(e)}>
                <img src={connectIcon} alt='icon' />
                Connect
              </Button> */}
            </div>
          </div>
        </div>
        {/* <!-- Main Menu END --> */}
        {/* <!-- mobile menu --> */}
        {isMobileMenu && <MobileMenu mobileMenuhandle={handleMobileMenu} />}
      </div>
    </NavWrapper>
  )
}

export default Header
