import AboutUsSection from "../../components/aboutUsSection"
import Footer from "../../components/footer"
import Join from "../../components/join"
import News from "../../components/news"
import PlanBSection from "../../components/planBSection"

const LandingPage = ()=>{
    return(
    <div>
        <PlanBSection />
        <News />
        <AboutUsSection />
        <Join />
        <Footer />
    </div>
)
    }

export default LandingPage