import Content from "../components/root/content";
import Navbar from "../components/root/navbar";

function Root() {
    return (
      <div className="grid grid-cols-[244px_1fr] bg-primary">
        <Navbar/>
        <Content/>
      </div>
    );
  }
  
export default Root;
