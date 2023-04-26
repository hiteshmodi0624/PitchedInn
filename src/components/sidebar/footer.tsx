import { brand } from "../../data/data";
import FooterItem from "./footer-item";

function Footer() {
    return (
        <footer className="flex flex-wrap text-grey text-sm font-extralight p-3">
            <FooterItem title="Help" link="help"/>
            <FooterItem title="Privacy Pollicy" link="privacy"/>
            <FooterItem title="Terms of Service" link="terms"/>
            <FooterItem title={`© ${new Date().getFullYear()} ${brand}`}/>
        </footer>
    );
  }
  
  export default Footer;
  