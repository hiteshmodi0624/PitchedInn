import FooterItem from "./footer-item";

function Footer() {
    return (
        <footer className="flex flex-wrap text-grey text-sm font-extralight mx-12 sticky bottom-0 ">
            <FooterItem title="Help" link="help"/>
            <FooterItem title="Privacy Pollicy" link="privacy"/>
            <FooterItem title="Terms of Service" link="terms"/>
            <FooterItem title={`© ${new Date().getFullYear()} SharkWave`}/>
        </footer>
    );
  }
  
  export default Footer;
  