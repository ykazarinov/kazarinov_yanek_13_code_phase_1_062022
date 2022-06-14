import { useEffect } from "react";
import Feature from '../../components/Feature/feature'
import Banner from '../../components/Banner/banner'
import icon1 from '../../assets/img/icon-chat.png'
import icon2 from '../../assets/img/icon-money.png'
import icon3 from '../../assets/img/icon-security.png'

export default function Home(){

    const featuresContent = [{
        icon: icon1,
        title: 'You are our #1 priority',
        text: "Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes."
    },
    {
        icon: icon2,
        title: 'More savings means higher rates',
        text: "The more you save with us, the higher your interest rate will be!"
    },
    {
        icon: icon3,
        title: 'Security you can trust',
        text: "We use top of the line encryption to make sure your data and money is always safe."
    },
    ]
    const bannerContent = {
        title: "Promoted Content",
        text1: "No fees.",
        text2: "No minimum deposit.",
        text3: "High interest rates.",
        text4: "Open a savings account with Argent Bank today!"
    }


    useEffect(() => {
        document.title = "Argent Bank - Home Page"
     }, []);

    return  <main>
        <Banner 
            title={bannerContent.title} 
            text1={bannerContent.text1} 
            text2={bannerContent.text2}
            text3={bannerContent.text3} 
            text4={bannerContent.text4} 
        />
        <section className="features">
            <h2 className="sr-only">Features</h2>

            {featuresContent.map && featuresContent.map((item, index)=> (
                <Feature key={index}
                    icon={item.icon} 
                    title={item.title} 
                    text={item.text} 
                />
            ))}
        </section>
    </main>
}