import React from 'react'
import "../../Styles/HeaderStyles.css"
import "../../Styles/HomeStyle.css"
import Layout from "../../(components)/Layout/Layout"
import Section1 from './Section1'
import Section2 from './Section2'
import Section3 from './Section3'
import Section4 from './Section4'
import Section5 from './Section5'
import Section6 from './Section6'
import Section7 from './Section7'

function Home() {
  return (
    <>
    <Layout>
       {/* Home Hero Section */}
       <Section1 />

       {/* Home about Section */}
       <Section2 />

       {/* Home Menu Section */}
       <Section3 />

       {/* Home Promotion Section */}
       <Section4 />
       {/* Home Shop Section */}
       <Section5 />

       {/* Home blog Section */}
       <Section6 />
       
       {/* Home Contact Section */}
       <Section7 />
    </Layout>
    </>
  )
}

export default Home