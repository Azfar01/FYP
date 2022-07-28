import React, { useState } from 'react'
import { Image } from "@chakra-ui/react"
import { Helmet } from 'react-helmet';

import cover from './cover.jpg'
import { Input,InputGroup, InputLeftElement, Textarea,Button  } from "@chakra-ui/react"
import {BsEnvelope, GiPositionMarker, HiOutlinePhone} from 'react-icons/all'
import {Link, NavLink } from 'react-router-dom'
import './contactuscss.css'
const Contactus = () => {
    const [email, setemail] = useState('')
    const [body, setbody] = useState('')

    const handlesubmit = () =>{
        window.open(`mailto:Safaydonline@gmail.com?subject=Sample&body=${body}`)
    }
    return (
        
        <div className="contactUs">
            <nav class="app__nav">
      <ul class="app__nav_list">
        <li class="app__nav_item">
			<Link to = '/'>
          <a href="/" class="app__nav_link">
            <span class="app__nav_text">Home</span>
            <span class="app__nav_text">Home</span>
          </a>
		  	</Link>
        </li>
        <li class="app__nav_item">
		<Link to = '/about'>
          <a href="/about" class="app__nav_link">
            <span class="app__nav_text">About Us</span>
            <span class="app__nav_text">About Us</span>
          </a>
		</Link>
        </li>
        <li class="app__nav_item">
		<Link to = '/shop'>
          <a href="/shop" class="app__nav_link">
			{/* <NavLink to="/shop" class="app__nav_text" ><li>Shop</li></NavLink>
			<NavLink to="/shop" class="app__nav_text" ><li>Shop</li></NavLink> */}
            <span class="app__nav_text">Shop</span>
            <span class="app__nav_text">Shop</span>
          </a>
		  </Link>
        </li>
        <li class="app__nav_item">
		<Link to = '/contactus'>
          <a href="#" class="app__nav_link">
            <span class="app__nav_text">Contact</span>
            <span class="app__nav_text">Contact</span>
          </a>
		  </Link>
        </li>
      </ul>
    </nav>
            <Helmet>
                <title>Contact</title>
            </Helmet>
        <div className="headerContact">
            <Image className="imageContact" src='https://i.imgur.com/7rwaigw.jpg' alt="contactImage" objectFit="cover"/>
            <div className="text">
                <h2>Contact</h2>  
            </div>
              
        </div>
        <div className="textt">
                <h2>Any Question / Query or Complains. Get in touch with us now. Our Team is always here to Help!</h2>  
            </div>

        <div className="card-contact">
            <div className="sendMsg">
                <h4>Send Us A Message</h4>
                    <div className="inputContact">
                        <InputGroup width="450px" >
                            <InputLeftElement       pointerEvents="none"  children={<BsEnvelope className = 'envolope' color="gray.300" />}/>
                            <Input value = {email} onChange = {e=> setemail(e.target.value)} type="text" placeholder="Your Email Address"/>
                        </InputGroup>
                        
                    </div>
                    <div className="textAreaCnt">
                        <Textarea value = {body} onChange = {e=> setbody(e.target.value)} width="450px"  placeholder="How Can We Help" height="200px" />
                    </div>
                    <div className="contentContact">
                        <Button onClick = {handlesubmit} borderRadius="90px" colorScheme="teal" variant="solid" size="180px" className="contactBtn">Submit</Button>
                    </div>

            </div>
            <div className="showAdrss">
                <div className="box">
                    <div className="iconCtn"><GiPositionMarker opacity="0.8"/></div>
                    <div className="adressCtn">

                        <h3> Address</h3>
                        <p>Safayd Store Center 8th floor, 379 Rehman Building, Mughalpura, Lahore Pakistan</p>
                    </div>
                </div>
                    <div className="box">
                    <div className="iconCtn"><HiOutlinePhone opacity="0.8"/></div>
                    <div className="adressCtn">

                        <h3>Lets Talk</h3>
                        <p className="infoCtn">(+92) 3048998350</p>
                    </div>
                </div>
                <div className="box">
                    <div className="iconCtn"><BsEnvelope opacity="0.8"/></div>
                    <div className="adressCtn">

                        <h3>Sale Support</h3>
                        <p className="infoCtn">Safaydonline@gmail.com</p>
                    </div>
                </div>
            </div>
        </div>
</div>
    )
}

export default Contactus
