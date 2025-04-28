import Footer from "@/components/website/footer/Footer";
import Navbar from "@/components/website/navbar/Navbar"

export default function Website({ children }) {
        return (
       <>
            <Navbar />
            {children}
            <Footer/>
                    </>


    );
}
