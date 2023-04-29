import { brand } from "../../data/data";
import HorizontalListItem from "../ui/horizontal-list/horizontal-list-item";

function Footer() {
    return (
        <footer className="flex flex-wrap text-grey text-sm font-extralight p-3">
            <HorizontalListItem title="Help" link="help"/>
            <HorizontalListItem title="Privacy Pollicy" link="privacy"/>
            <HorizontalListItem title="Terms of Service" link="terms"/>
            <HorizontalListItem title={`© ${new Date().getFullYear()} ${brand}`}/>
        </footer>
    );
  }
  
  export default Footer;
  