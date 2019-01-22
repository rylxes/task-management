import logo200Image from 'assets/img/logo/logo_200.png';
import sidebarBgImage from 'assets/img/sidebar/sidebar-4.jpg';
import SourceLink from 'components/SourceLink';
import React from 'react';
import FaGithub from 'react-icons/lib/fa/github';
import {
  MdAccountCircle,
  MdArrowDropDownCircle,
  MdBorderAll,
  MdBrush,
  MdChromeReaderMode,
  MdDashboard,
  MdExtension,
  MdGroupWork,
  MdInsertChart,
  MdKeyboardArrowDown,
  MdNotificationsActive,
  MdPages,
  MdRadioButtonChecked,
  MdSend,
  MdStar,
  MdTextFields,
  MdViewCarousel,
  MdViewDay,
  MdViewList,
  MdWeb,
  MdWidgets,
} from 'react-icons/lib/md';
import { NavLink } from 'react-router-dom';
import {
  // UncontrolledTooltip,
  Collapse,
  Nav,
  Navbar,
  NavItem,
  NavLink as BSNavLink,
} from 'reactstrap';
import bn from 'utils/bemnames';


const sidebarBackground = {
  backgroundImage: `url("${sidebarBgImage}")`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
};

const navComponents = [
  { to: '/form', name: 'buttons', exact: false, Icon: MdRadioButtonChecked },
  {
    to: '/form',
    name: 'button groups',
    exact: false,
    Icon: MdGroupWork,
  },
  { to: '/form', name: 'forms', exact: false, Icon: MdChromeReaderMode },
  { to: '/form', name: 'input groups', exact: false, Icon: MdViewList },
  {
    to: '/form',
    name: 'dropdowns',
    exact: false,
    Icon: MdArrowDropDownCircle,
  },
  { to: '/form', name: 'badges', exact: false, Icon: MdStar },
  { to: '/form', name: 'alerts', exact: false, Icon: MdNotificationsActive },
  { to: '/form', name: 'progress', exact: false, Icon: MdBrush },
  { to: '/form', name: 'modals', exact: false, Icon: MdViewDay },
];

const navContents = [
  { to: '/form', name: 'typography', exact: false, Icon: MdTextFields },
  { to: '/form', name: 'tables', exact: false, Icon: MdBorderAll },
];

const pageContents = [
  { to: '/form', name: 'login', exact: false, Icon: MdAccountCircle },
  {
    to: '/form',
    name: 'login modal',
    exact: false,
    Icon: MdViewCarousel,
  },
];

const navItems = [
  { to: '/form', name: 'dashboard', exact: true, Icon: MdDashboard },
  { to: '/form', name: 'cards', exact: false, Icon: MdWeb },
  { to: '/form', name: 'charts', exact: false, Icon: MdInsertChart },
  { to: '/form', name: 'widgets', exact: false, Icon: MdWidgets },
];

const bem = bn.create('sidebar');

class Sidebar extends React.Component {
  state = {
    isOpenComponents: true,
    isOpenContents: true,
    isOpenPages: true,
  };

  handleClick = name => () => {
    this.setState(prevState => {
      const isOpen = prevState[`isOpen${name}`];

      return {
        [`isOpen${name}`]: !isOpen,
      };
    });
  };

  render() {
    return (
      <aside className={bem.b()} data-image={sidebarBgImage}>
        <div className={bem.e('background')} style={sidebarBackground} />
        <div className={bem.e('content')}>
          <Navbar>
            <SourceLink className="navbar-brand d-flex">
              <img
                src={logo200Image}
                width="40"
                height="30"
                className="pr-2"
                alt=""
              />
              <span className="text-white">
                Reduction <FaGithub />
              </span>
            </SourceLink>
          </Navbar>
        </div>
      </aside>
    );
  }
}

export default Sidebar;
