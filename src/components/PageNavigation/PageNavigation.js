import { NavLink } from "react-router-dom";
import Styles from "./PageNavigation.module.scss";

export default function PageNavigation(props) {

	const {
		title = "demo"
	}	= props;

  return (
    <div className={Styles.mainWrapper}>
      <NavLink to="/">Home</NavLink>/{title}
    </div>
  )
}
