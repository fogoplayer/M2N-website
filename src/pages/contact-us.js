import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
// import NavDesktop from "../components/navDesktop"
// import NavTablet from "../components/navTablet"
// import NavMobile from "../components/navMobile"

//IMAGES
import cmbndShp2x from "../import/img/combined-shape@2x.png"
import pth2x from "../import/img/path@2x.png"
import vctr462x from "../import/img/vector-46@2x.png"
import vctr472x from "../import/img/footer-logo-desktop.png"
import vctr942x from "../import/img/vector-94@2x.png"
import vctr952x from "../import/img/vector-95@2x.png"
import vctr502x from "../import/img/vector-50@2x.png"
import vctr512x from "../import/img/vector-51@2x.png"
import vctr982x from "../import/img/vector-98@2x.png"
import vctr992x from "../import/img/vector-99@2x.png"
import vctr542x from "../import/img/vector-54@2x.png"
import vctr1012x from "../import/img/vector-101@2x.png"
import vctr1022x from "../import/img/vector-102@2x.png"
import vctr1032x from "../import/img/vector-103@2x.png"
import vctr592x from "../import/img/vector-59@2x.png"
import vctr602x from "../import/img/vector-60@2x.png"
import vctr612x from "../import/img/vector-61@2x.png"
import vctr1082x from "../import/img/vector-108@2x.png"
import vctr1092x from "../import/img/vector-109@2x.png"
import vctr642x from "../import/img/vector-64@2x.png"
import vctr1112x from "../import/img/vector-111@2x.png"
import vctr662x from "../import/img/vector-66@2x.png"
import vctr1132x from "../import/img/vector-113@2x.png"
import vctr1142x from "../import/img/vector-114@2x.png"
import vctr1152x from "../import/img/vector-115@2x.png"
import vctr702x from "../import/img/vector-70@2x.png"
import vctr712x from "../import/img/vector-71@2x.png"
import vctr722x from "../import/img/vector-72@2x.png"
import vctr1192x from "../import/img/vector-119@2x.png"
import vctr1202x from "../import/img/vector-120@2x.png"
import vctr1212x from "../import/img/vector-121@2x.png"
import vctr762x from "../import/img/vector-76@2x.png"
import vctr772x from "../import/img/vector-77@2x.png"
import vctr782x from "../import/img/vector-78@2x.png"
import vctr792x from "../import/img/vector-79@2x.png"
import vctr1262x from "../import/img/vector-126@2x.png"
import vctr1272x from "../import/img/vector-127@2x.png"
import vctr822x from "../import/img/vector-82@2x.png"
import vctr1292x from "../import/img/vector-129@2x.png"
import vctr1302x from "../import/img/vector-130@2x.png"
import vctr1312x from "../import/img/vector-131@2x.png"
import vctr1322x from "../import/img/vector-132@2x.png"
import vctr1332x from "../import/img/vector-133@2x.png"
import ovlCpy31x from "../import/img/oval-copy-3@1x.png"
import ovl11x from "../import/img/oval-1@1x.png"
import pth2152x from "../import/img/path-215@2x.png"
import pth2162x from "../import/img/path-216@2x.png"
import pth2132x from "../import/img/path-213@2x.png"
import ln7112x from "../import/img/line-7-11@2x.png"
import ln8112x from "../import/img/line-8-11@2x.png"
import ln9112x from "../import/img/line-9-11@2x.png"
import ln10112x from "../import/img/line-10-11@2x.png"
import ln11112x from "../import/img/line-11-11@2x.png"
import ln12112x from "../import/img/line-12-11@2x.png"
import ln13112x from "../import/img/line-13-11@2x.png"
import pth71112x from "../import/img/path-71-11@2x.png"
import ln15112x from "../import/img/line-15-11@2x.png"
import vctr312 from "../import/img/footer-logo-desktop.png"
import vctr8262x from "../import/img/vector-826@2x.png"
import vctr8272x from "../import/img/vector-827@2x.png"
import vctr3152x from "../import/img/vector-315@2x.png"
import vctr8292x from "../import/img/vector-829@2x.png"
import vctr6072x from "../import/img/vector-607@2x.png"
import vctr8312x from "../import/img/vector-831@2x.png"
import vctr3192x from "../import/img/vector-319@2x.png"
import vctr8332x from "../import/img/vector-833@2x.png"
import vctr8342x from "../import/img/vector-834@2x.png"
import vctr8352x from "../import/img/vector-835@2x.png"
import vctr3232x from "../import/img/vector-323@2x.png"
import vctr8372x from "../import/img/vector-837@2x.png"
import vctr8382x from "../import/img/vector-838@2x.png"
import vctr8392x from "../import/img/vector-839@2x.png"
import vctr8402x from "../import/img/vector-840@2x.png"
import vctr8412x from "../import/img/vector-841@2x.png"
import vctr8422x from "../import/img/vector-842@2x.png"
import vctr8432x from "../import/img/vector-843@2x.png"
import vctr3312x from "../import/img/vector-331@2x.png"
import vctr3322x from "../import/img/vector-332@2x.png"
import vctr8462x from "../import/img/vector-846@2x.png"
import vctr8472x from "../import/img/vector-847@2x.png"
import vctr3352x from "../import/img/vector-335@2x.png"
import vctr3362x from "../import/img/vector-336@2x.png"
import vctr8502x from "../import/img/vector-850@2x.png"
import vctr8512x from "../import/img/vector-851@2x.png"
import vctr8522x from "../import/img/vector-852@2x.png"
import vctr8532x from "../import/img/vector-853@2x.png"
import vctr3412x from "../import/img/vector-341@2x.png"
import vctr3422x from "../import/img/vector-342@2x.png"
import vctr8562x from "../import/img/vector-856@2x.png"
import vctr8572x from "../import/img/vector-857@2x.png"
import vctr8582x from "../import/img/vector-858@2x.png"
import vctr8592x from "../import/img/vector-859@2x.png"
import vctr3472x from "../import/img/vector-347@2x.png"
import vctr8612x from "../import/img/vector-861@2x.png" 
import vctr862x from "../import/img/vector-862@2x.png" 
import vctr8632x from "../import/img/vector-863@2x.png"
import vctr8642x from "../import/img/vector-864@2x.png" 
import vctr8652x from "../import/img/vector-865@2x.png"
import cmbndShp52x from "../import/img/combined-shape-5@2x.png" 
import vctr3532x from "../import/img/vector-353@2x.png"
import ovlCpy171x from "../import/img/oval-copy-17@1x.png"
import pth21512x from "../import/img/path-215-1@2x.png"
import ln7532x from "../import/img/line-7-53@2x.png"
import ln8532x from "../import/img/line-8-53@2x.png"
import ln9532x from "../import/img/line-9-53@2x.png"
import ln10532x from "../import/img/line-10-53@2x.png"
import ln11532x from "../import/img/line-11-53@2x.png"
import ln12532x from "../import/img/line-12-53@2x.png"
import ln13532x from "../import/img/line-13-53@2x.png"
import pth71532x from "../import/img/path-71-53@2x.png"
import ln15532x from "../import/img/line-15-53@2x.png"
import ln7542x from "../import/img/line-7-54@2x.png"
import ln9542x from "../import/img/line-9-54@2x.png"
import ln10542x from "../import/img/line-10-54@2x.png"
import ln12542x from "../import/img/line-12-54@2x.png"
import ln13542x from "../import/img/line-13-54@2x.png"
import ln15542x from "../import/img/line-15-54@2x.png"


const SecondPage = () => (
  <Layout>
    <Seo title="Contact Us" />
    <input type="hidden" id="anPageName" name="page" value="contact-mobile-320px" />
    <div className="contact-desktop-1440px screen">
      <div className="footer-desktop-C61RwL" style={{ display: 'none' }}>
        <div className="icongroup-VNfvnu">
          <div className="instagram-5R3sf4"><img className="combined-shape-TnWo79" src={cmbndShp2x} /></div>
          <div className="twitter-5R3sf4"><img className="path-4KRaeG" src={pth2x} /></div>
          <div className="linkedin-5R3sf4"><img className="vector-pXCSGN" src={vctr462x} /></div>
        </div>
        <p className="terms-and-conditions-i19541492-VNfvnu dmsans-normal-white-14px-2">
          <span className="span0-eisHfp dmsans-normal-white-14px">Terms &amp; Conditions&nbsp;&nbsp; </span
          ><span className="span1-eisHfp dmsans-normal-white-14px-3">|&nbsp;&nbsp;</span
          ><span className="span2-eisHfp dmsans-normal-white-14px"> Privacy Policy</span>
        </p>
        <p className="company-i19541491-VNfvnu dmsans-normal-white-16px-2">
          ©2021 M2N, LLC&nbsp;&nbsp;•&nbsp;&nbsp;All rights reserved.
        </p>
        <div className="divider-VNfvnu"></div>
        <div className="newslettersignup-VNfvnu">
          <div className="newsletter-i19541499-vxY8x4 sourcesanspro-bold-white-16px">Newsletter</div>
          <form action="">
            <div className="input-default-vxY8x4">
              <div className="input-GVqwCV border-1px-celeste"></div>
              <input
                className="placeholder-i19541503-GVqwCV dmsans-normal-gunsmoke-16px"
                name="email"
                placeholder="Your email"
                type="email"
                required
              />
            </div>
            {/* <div className="default-text-vxY8x4 smart-layers-pointers">
              <div className="font-i19541507-kEobNx sourcesanspro-bold-white-16px">Subscribe</div>
            </div>
            <div className="button-primary-desktop-vxY8x4">
              <div className="font-i1954129778-U7FTmp valign-text-middle dmsans-bold-white-14px">SUBSCRIBE</div>
            </div> */}
            <input className="default-text-vxY8x4 sourcesanspro-bold-white-16px footer-submit" type="submit" value="Subscribe" />
          </form>
        </div>
        <div className="column3-VNfvnu">
          <div className="platform-i195455561-r3WsSG dmsans-bold-white-16px">Platform</div>
          <Link to="/mpower-app">
            <div className="ios-i195455562-r3WsSG dmsans-normal-white-16px">iOS</div>
          </Link>
          <Link to="/mpower-app">
            <div className="android-i195455563-r3WsSG dmsans-normal-white-16px">Android</div>
          </Link>
          <Link to="/mpower-app">
            <div className="browser-i195455564-r3WsSG dmsans-normal-white-16px">Browser</div>
          </Link>
        </div>
        <div className="column2-VNfvnu">
          <div className="about-i19541488-aRtUZh dmsans-bold-white-16px">
            <span className="span0-oHVwvk dmsans-bold-white-16px">About</span
            ><span className="span1-oHVwvk dmsans-normal-white-16px-2"><br /></span>
          </div>
            <Link to="/mpower">
              <div className="mpower-i195452914-aRtUZh dmsans-normal-white-16px">MPower</div>
            </Link>
            <Link to="/partners">
              <div className="partnerships-i195453345-aRtUZh dmsans-normal-white-16px">Partnerships</div>
            </Link>
            <Link to="/company">
              <div className="company-i195453781-aRtUZh dmsans-normal-white-16px">Company</div>
            </Link>
        </div>
        <div className="column1-VNfvnu">
          <Link to="/">
            <div className="logo-dewRqW">
              <img className="vector-ouSEQ4" src={vctr472x} />
            </div>
          </Link>
          <p className="aboutblurb-i19541487-dewRqW dmsans-normal-white-14px">
            A new approach to diversity, equity &amp; inclusion. Meeting people &amp; organizations where they are through proprietary technology.
          </p>
        </div>
      </div>
      <div className="frame-60-C61RwL">
        <img className="oval-copy-isdgOW" src={ovlCpy31x} />
        <p className="contactusify-thinafewdays-isdgOW dmsans-normal-big-stone-16px">
          We are excited to speak with you about our new approach to diversity, equity &amp; inclusion. Please share a message here or contact us via email or phone for a prompt response from our team.
        </p>
        <a href="tel:866-588-8922">
          <div className="phone-isdgOW">
            <div className="contactusify-thinafewdays-Q5MDTp dmsans-medium-big-stone-20px">866-588-8922</div>
            <div className="icon-2-Q5MDTp">
              <div className="ellipse-2-IvlqQS"></div>
              <div className="active-call-IvlqQS">
                <img className="path215-7T0mBT" src={pth2152x} />
                <img className="path216-7T0mBT" src={pth2162x} />
              </div>
            </div>
          </div>
        </a>
        <a href="mailto:info@m2n.us">
          <div className="email-isdgOW">
            <div className="contactusify-thinafewdays-20M4hb dmsans-medium-big-stone-20px">info@m2n.us</div>
            <div className="icon-20M4hb">
              <div className="ellipse-Px0UVe"></div>
              <div className="mail-Px0UVe"><img className="path213-1bhoUT" src={pth2132x} /></div>
            </div>
          </div>
        </a>
        <div className="leaveamessage-isdgOW dmsans-bold-baltic-sea-62px">Contact Us</div>
        <form action="">
          <div className="form-isdgOW">
            <div className="field-lixMB9">
              <input
                className="your-name-2-tKadVF dmsans-medium-manatee-12px"
                name="name"
                placeholder="Your Name"
                type="text"
                required
              />
            </div>
            <textarea
              className="field-WrgBsB"
              name="message"
              placeholder="Leave your message here"
              type="text"
              required
            ></textarea>
            <div className="field-9afi68">
              <input
                className="your-name-2-pXbN93 dmsans-medium-manatee-12px"
                name="company"
                placeholder="Company Name"
                type="text"
                required
              />
            </div>
            <div className="field-YswxU4">
              <input
                className="your-name-2-iADx3W dmsans-medium-manatee-12px"
                name="email"
                placeholder="Email Address"
                type="email"
                required
              />
            </div>
            <div className="field-lbdXRk">
              <input
                className="your-name-2-850k4i dmsans-medium-manatee-12px"
                name="phone"
                placeholder="Phone Number"
                type="text"
                required
              />
            </div>
            <input type="submit" style={{cursor: "pointer"}} className="frame-2-lixMB9 font-Tvszxn dmsans-bold-white-16px" value="SEND MESSAGE"/>
          </div>
        </form>
        <div className="frame-62-isdgOW">
          <div className="group-1-lBakbW">
            <img className="line7-3hCxVM" src={ln7112x} />
            <img className="line8-3hCxVM" src={ln8112x} />
            <img className="line9-3hCxVM" src={ln9112x} />
            <img className="line10-3hCxVM" src={ln10112x} />
            <img className="line11-3hCxVM" src={ln11112x} />
            <img className="line12-3hCxVM" src={ln12112x} />
            <img className="line13-3hCxVM" src={ln13112x} />
            <img className="path71-3hCxVM" src={pth71112x} />
            <img className="line15-3hCxVM" src={ln15112x} />
          </div>
        </div>
      </div>
      {/* <div className="navbar-desktop-C61RwL">
        <div className="buttonrow-HPBo1Y">
          <div className="b5-Wfh8x7 dmsans-bold-gunsmoke-14px-2">LOG IN</div>
          <div className="button-primary-desktop-Wfh8x7">
            <div className="font-eo3nRY valign-text-middle dmsans-bold-white-14px">SIGN UP</div>
          </div>
        </div>
        <div className="frame-HPBo1Y"><img className="vector-azHmrH" src="./import/img/vector-88@2x.png" /></div>
        <div className="frame-15-HPBo1Y">
          <div className="navitem-hover-S6Kvjz">
            <div className="textframe-VBTaE4"><div className="b1-jxM0bb dmsans-bold-baltic-sea-14px">HOME</div></div>
            <div className="indicator-VBTaE4 smart-layers-pointers"></div>
          </div>
          <div className="navitem-default-S6Kvjz">
            <div className="textframe-FdqQMQ"><div className="b1-EnImxV dmsans-bold-gunsmoke-14px">MPOWER</div></div>
            <div className="indicator-FdqQMQ"></div>
          </div>
          <div className="navitem-default-df9eD3">
            <div className="textframe-Eg20wO"><div className="b3-kHiIGi dmsans-bold-gunsmoke-14px">COMPANY</div></div>
            <div className="indicator-Eg20wO"></div>
          </div>
          <div className="navitem-default-OUMgDx">
            <div className="textframe-udu9xB"><div className="b4-vpgDzt dmsans-bold-gunsmoke-14px">PARTNERS</div></div>
            <div className="indicator-udu9xB"></div>
          </div>
        </div>
      </div> */}
      {/* <NavDesktop /> */}
    </div>
    <div className="contact-desktop-1024px screen">
      <div className="footer-C61RwL" style={{ display: 'none' }}>
        <div className="background-iPe1yZ"></div>
        <div className="frame-iPe1yZ">
          <img className="vector-gq7idq" src={vctr312} />
        </div>
        <p className="info-iPe1yZ dmsans-normal-white-14px">
          A new approach to diversity, equity &amp; inclusion. Meeting people &amp; organizations where they are through proprietary technology.
        </p>
        <div className="rectangle-iPe1yZ"></div>
        <p className="copyright-2018-al-iPe1yZ dmsans-normal-white-16px-2">
          ©2021 M2N, LLC&nbsp;&nbsp;•&nbsp;&nbsp;All rights reserved.
        </p>
        <p className="copyright-2018-al-CMvW9s dmsans-normal-white-14px-2">
          <span className="span0-eEh521 dmsans-normal-white-14px">Terms &amp; Conditions&nbsp;&nbsp; </span
          ><span className="span1-eEh521 dmsans-normal-white-14px-3">|&nbsp;&nbsp;</span
          ><span className="span2-eEh521 dmsans-normal-white-14px"> Privacy Policy</span>
        </p>
        <div className="frame-43-iPe1yZ">
          <div className="instagram-hamoIG"><img className="combined-shape-Kjvr2X" src={cmbndShp52x} /></div>
          <div className="twitter-hamoIG"><img className="path-jPphH2" src={pth2x} /></div>
          <div className="linkedin-1-hamoIG"><img className="vector-YIAmW9" src={vctr3532x} /></div>
        </div>
        <div className="newsletter-iPe1yZ sourcesanspro-bold-white-16px">Newsletter</div>
        <form action="">
          <div className="inputs-default-iPe1yZ">
            <div className="input-4j1ImY">
              <div className="style-urJPUx border-1px-celeste"></div>
            </div>
            <input
              className="placeholder-4j1ImY dmsans-normal-gunsmoke-16px"
              name="email"
              placeholder="Your email"
              type="email"
              required
              />
          </div>
          {/* <div className="default-text-iPe1yZ">
            <div className="button-TQGk14">
              <div className="style-BFaroP"></div>
            </div>
            <div className="font-TQGk14 sourcesanspro-bold-white-16px">Subscribe</div>
          </div> */}
          <input className="default-text-iPe1yZ sourcesanspro-bold-white-16px footer-submit" type="submit" value="Subscribe" />
        </form>
        <div className="column3-iPe1yZ">
          <div className="platform-X4QSxG dmsans-bold-white-16px">Platform</div>
            <Link to="/mpower-app">
              <div className="ios-X4QSxG dmsans-normal-white-16px">iOS</div>
            </Link>
            <Link to="/mpower-app">
              <div className="android-X4QSxG dmsans-normal-white-16px">Android</div>
            </Link>
            <Link to="/mpower-app">
              <div className="browser-X4QSxG dmsans-normal-white-16px">Browser</div>
            </Link>
          </div>
          <div className="column2-iPe1yZ">
            <div className="about-S164Qk dmsans-bold-white-16px">
                <span className="span0-HtUoHN dmsans-bold-white-16px">About</span
                ><span className="span1-HtUoHN dmsans-normal-white-16px-2"><br /></span>
              </div>
              <Link to="/mpower">
                  <div className="mpower-S164Qk dmsans-normal-white-16px">MPower</div>
              </Link>
              <Link to="/partners">
                <div className="partnerships-S164Qk dmsans-normal-white-16px">Partnerships</div>
              </Link>
              <Link to="/company">
                <div className="company-S164Qk dmsans-normal-white-16px">Company</div>
              </Link>
            </div>
      </div>
      <div className="frame-60-C61RwL">
        <img className="oval-copy-isdgOW" src={ovlCpy171x} />
        <p className="contactusify-thinafewdays-isdgOW dmsans-normal-big-stone-16px">
          We are excited to speak with you about our new approach to diversity, equity &amp; inclusion. Please share a message here or contact us via email or phone for a prompt response from our team.
        </p>
        <a href="tel:866-588-8922">
          <div className="phone-isdgOW">
            <div className="contactusify-thinafewdays-Q5MDTp dmsans-medium-big-stone-20px">866-588-8922</div>
            <div className="icon-2-Q5MDTp">
              <div className="ellipse-2-IvlqQS"></div>
              <div className="active-call-IvlqQS">
                <img className="path215-7T0mBT" src={pth21512x} />
                <img className="path216-7T0mBT" src={pth2162x} />
              </div>
            </div>
          </div>
        </a>
        <a href="mailto:info@m2n.us">
          <div className="email-isdgOW">
            <div className="contactusify-thinafewdays-20M4hb dmsans-medium-big-stone-20px">info@m2n.us</div>
            <div className="icon-20M4hb">
              <div className="ellipse-Px0UVe"></div>
              <div className="mail-Px0UVe"><img className="path213-1bhoUT" src={pth2132x} /></div>
            </div>
          </div>
        </a>
        <div className="leaveamessage-isdgOW dmsans-bold-baltic-sea-62px">Contact Us</div>
        <form action="">
          <div className="form-isdgOW">
            <div className="field-lixMB9">
              <input
                className="your-name-2-tKadVF dmsans-medium-manatee-12px"
                name="name"
                placeholder="Your Name"
                type="text"
                required
              />
            </div>
            <textarea
              className="field-WrgBsB"
              name="message"
              placeholder="Leave your message here"
              type="text"
              required
            ></textarea>
            <div className="field-9afi68">
              <input
                className="your-name-2-pXbN93 dmsans-medium-manatee-12px"
                name="company"
                placeholder="Company Name"
                type="text"
                required
              />
            </div>
            <div className="field-YswxU4">
              <input
                className="your-name-2-iADx3W dmsans-medium-manatee-12px"
                name="email"
                placeholder="Email Address"
                type="email"
                required
              />
            </div>
            <div className="field-lbdXRk">
              <input
                className="your-name-2-850k4i dmsans-medium-manatee-12px"
                name="phone"
                placeholder="Phone Number"
                type="text"
                required
              />
            </div>
            <input type="submit" style={{cursor: "pointer"}} className="frame-2-lixMB9 font-Tvszxn dmsans-bold-white-16px" value="SEND MESSAGE"/>          </div>
        </form>
        <div className="frame-61-isdgOW">
          <div className="group-1-H4hSpH">
            <img className="line7-x5Qw0n" src={ln7532x} />
            <img className="line8-x5Qw0n" src={ln8532x} />
            <img className="line9-x5Qw0n" src={ln9532x} />
            <img className="line10-x5Qw0n" src={ln10532x} />
            <img className="line11-x5Qw0n" src={ln11532x} />
            <img className="line12-x5Qw0n" src={ln12532x} />
            <img className="line13-x5Qw0n" src={ln13532x} />
            <img className="path71-x5Qw0n" src={pth71532x} />
            <img className="line15-x5Qw0n" src={ln15532x} />
          </div>
        </div>
      </div>
      {/* <div className="navbar-tablet-C61RwL">
        <div className="buttonrow-Xq4ViJ">
          <div className="b5-DkfaGf dmsans-bold-gunsmoke-14px-2">LOG IN</div>
          <div className="button-primary-desktop-DkfaGf">
            <div className="font-GrCJVF valign-text-middle dmsans-bold-white-14px">SIGN UP</div>
          </div>
        </div>
        <div className="logo-Xq4ViJ"><img className="vector-paUNwS" src="./import/img/vector-354@2x.png" /></div>
        <div className="navlinks-Xq4ViJ">
          <div className="navitem-hover-VcMpYN">
            <div className="textframe-x0oTG4"><div className="b1-qVUPyA dmsans-bold-baltic-sea-14px">HOME</div></div>
            <div className="indicator-x0oTG4 smart-layers-pointers"></div>
          </div>
          <div className="navitem-default-VcMpYN">
            <div className="textframe-XIn0T6"><div className="b1-pTXg1E dmsans-bold-gunsmoke-14px">MPOWER</div></div>
            <div className="indicator-XIn0T6"></div>
          </div>
          <div className="navitem-default-h3NML7">
            <div className="textframe-HffetE"><div className="b3-poT6nI dmsans-bold-gunsmoke-14px">COMPANY</div></div>
            <div className="indicator-HffetE"></div>
          </div>
          <div className="navitem-default-jBtke6">
            <div className="textframe-sUuHDU"><div className="b4-xtuTw9 dmsans-bold-gunsmoke-14px">PARTNERS</div></div>
            <div className="indicator-sUuHDU"></div>
          </div>
        </div>
      </div> */}
      {/* <NavTablet /> */}
    </div>
    <div className="contact-tablet-720px screen">
      {/* <NavMobile /> */}
      {/* <div className="navbar-mobile-C61RwL">
        <div className="logo-gTO9GM"><img className="vector-xvusrZ" src="./import/img/vector-1022@2x.png" /></div>
        <div className="menu24px-gTO9GM">
          <img className="iconnavigationmenu24px-xsYvp9" src="./import/img/icon-navigation-menu-24px-1@2x.png" />
        </div>
      </div>
      <div className="navbar-mobile-VMr6Om">
        <div className="logo-8x5SRt"><img className="vector-Ztm0bx" src="./import/img/vector-1023@2x.png" /></div>
        <div className="menu24px-8x5SRt">
          <img className="iconnavigationmenu24px-BAyIoO" src="./import/img/icon-navigation-menu-24px@2x.png" />
        </div>
      </div> */}
      <div className="footer-C61RwL" style={{ display: 'none' }}>
        <div className="newsletter-iPe1yZ sourcesanspro-bold-white-16px">Newsletter</div>
        <form action="">
          <div className="inputs-default-iPe1yZ">
            <div className="input-4j1ImY">
              <div className="style-urJPUx border-1px-celeste"></div>
            </div>
            <input
              className="placeholder-4j1ImY dmsans-normal-gunsmoke-16px"
              name="email"
              placeholder="Your email"
              type="email"
              required
              />
          </div>
          {/* <div className="default-text-iPe1yZ">
            <div className="button-TQGk14">
              <div className="style-BFaroP"></div>
            </div>
            <div className="font-TQGk14 sourcesanspro-bold-white-16px">Subscribe</div>
          </div> */}
          <input className="default-text-iPe1yZ sourcesanspro-bold-white-16px footer-submit" type="submit" value="Subscribe" />
        </form>
        <div className="frame-iPe1yZ">
          <img className="vector-gq7idq" src={vctr312} />
        </div>
        <p className="info-iPe1yZ dmsans-normal-white-14px">
          A new approach to diversity, equity &amp; inclusion. Meeting people &amp; organizations where they are through proprietary technology.
        </p>
        <div className="rectangle-iPe1yZ"></div>
        <p className="copyright-2018-al-iPe1yZ dmsans-normal-white-16px-2">
          ©2021 M2N, LLC&nbsp;&nbsp;•&nbsp;&nbsp;All rights reserved.
        </p>
        <p className="copyright-2018-al-CMvW9s dmsans-normal-white-14px-2">
          <span className="span0-eEh521 dmsans-normal-white-14px">Terms &amp; Conditions&nbsp;&nbsp; </span
          ><span className="span1-eEh521 dmsans-normal-white-14px-3">|&nbsp;&nbsp;</span
          ><span className="span2-eEh521 dmsans-normal-white-14px"> Privacy Policy</span>
        </p>
        <div className="frame-47-iPe1yZ">
          <div className="instagram-ER5pEj"><img className="combined-shape-a2OMEj" src={cmbndShp52x} /></div>
          <div className="twitter-ER5pEj"><img className="path-g8wxqH" src={pth2x} /></div>
          <div className="linkedin-1-ER5pEj"><img className="vector-H2IUZC" src={vctr3532x} /></div>
        </div>
        <div className="column2-iPe1yZ">
          <div className="about-S164Qk dmsans-bold-white-16px">
            <span className="span0-HtUoHN dmsans-bold-white-16px">About</span
            ><span className="span1-HtUoHN dmsans-normal-white-16px-2"><br /></span>
          </div>
          <Link to="/mpower">
              <div className="mpower-S164Qk dmsans-normal-white-16px">MPower</div>
          </Link>
          <Link to="/partners">
              <div className="partnerships-S164Qk dmsans-normal-white-16px">Partnerships</div>
          </Link>
          <Link to="/company">
              <div className="company-S164Qk dmsans-normal-white-16px">Company</div>
          </Link>
        </div>
        <div className="column3-iPe1yZ">
          <div className="platform-X4QSxG dmsans-bold-white-16px">Platform</div>
            <Link to="/mpower-app">
                <div className="ios-X4QSxG dmsans-normal-white-16px">iOS</div>
            </Link>
            <Link to="/mpower-app">
                <div className="android-X4QSxG dmsans-normal-white-16px">Android</div>
            </Link>
            <Link to="/mpower-app">
                <div className="browser-X4QSxG dmsans-normal-white-16px">Browser</div>
            </Link>
        </div>
      </div>
      <div className="frame-60-C61RwL">
        <img className="oval-copy-isdgOW" src={ovlCpy171x} />
        <p className="contactusify-thinafewdays-isdgOW dmsans-normal-big-stone-16px">
          We are excited to speak with you about our new approach to diversity, equity &amp; inclusion. Please share a message here or contact us via email or phone for a prompt response from our team.
        </p>
        <a href="tel:866-588-8922">
          <div className="phone-isdgOW">
            <div className="contactusify-thinafewdays-Q5MDTp dmsans-medium-big-stone-20px">866-588-8922</div>
            <div className="icon-2-Q5MDTp">
              <div className="ellipse-2-IvlqQS"></div>
              <div className="active-call-IvlqQS">
                <img className="path215-7T0mBT" src={pth21512x} />
                <img className="path216-7T0mBT" src={pth2162x} />
              </div>
            </div>
          </div>
        </a>
        <a href="mailto:info@m2n.us">
          <div className="email-isdgOW">
            <div className="contactusify-thinafewdays-20M4hb dmsans-medium-big-stone-20px">info@m2n.us</div>
            <div className="icon-20M4hb">
              <div className="ellipse-Px0UVe"></div>
              <div className="mail-Px0UVe"><img className="path213-1bhoUT" src={pth2132x} /></div>
            </div>
          </div>
        </a>
        <div className="leaveamessage-isdgOW dmsans-bold-baltic-sea-40px">Contact Us</div>
        <div className="frame-61-isdgOW">
          <div className="group-1-H4hSpH">
            <img className="line7-x5Qw0n" src={ln7542x} />
            <img className="line8-x5Qw0n" src={ln8532x} />
            <img className="line9-x5Qw0n" src={ln9542x} />
            <img className="line10-x5Qw0n" src={ln10542x} />
            <img className="line11-x5Qw0n" src={ln11532x} />
            <img className="line12-x5Qw0n" src={ln12542x} />
            <img className="line13-x5Qw0n" src={ln13542x} />
            <img className="path71-x5Qw0n" src={pth71532x} />
            <img className="line15-x5Qw0n" src={ln15542x} />
          </div>
        </div>
        <form action="">
        <div className="form-isdgOW">
          <div className="field-lixMB9">
            <input
              className="your-name-2-tKadVF dmsans-medium-manatee-12px"
              name="name"
              placeholder="Your Name"
              type="text"
              required
            />
          </div>
          <textarea
            className="field-WrgBsB"
            name="message"
            placeholder="Leave your message here"
            type="text"
            required
          ></textarea>
          <div className="field-9afi68">
            <input
              className="your-name-2-pXbN93 dmsans-medium-manatee-12px"
              name="company"
              placeholder="Company Name"
              type="text"
              required
            />
          </div>
          <div className="field-YswxU4">
            <input
              className="your-name-2-iADx3W dmsans-medium-manatee-12px"
              name="email"
              placeholder="Email Address"
              type="email"
              required
            />
          </div>
          <div className="field-lbdXRk">
            <input
              className="your-name-2-850k4i dmsans-medium-manatee-12px"
              name="phone"
              placeholder="Phone Number"
              type="text"
              required
            />
          </div>
          <input type="submit" style={{cursor: "pointer"}} className="frame-2-lixMB9 font-Tvszxn dmsans-bold-white-16px" value="SEND MESSAGE"/>        </div>
        </form>
      </div>
    </div>
    <div className="contact-mobile-320px screen">
    {/* <NavMobile /> */}
      {/* <div className="navbar-mobile-C61RwL">
        <div className="logo-gTO9GM"><img className="vector-xvusrZ" src="./import/img/vector-1022@2x.png" /></div>
        <div className="menu24px-gTO9GM">
          <img className="iconnavigationmenu24px-xsYvp9" src="./import/img/icon-navigation-menu-24px-1@2x.png" />
        </div>
      </div> */}
      <div className="footer-C61RwL" style={{ display: 'none' }}>
        <div className="newsletter-iPe1yZ sourcesanspro-bold-white-16px">Newsletter</div>
        <form action="">
          <div className="inputs-default-iPe1yZ">
            <div className="input-4j1ImY">
              <div className="style-urJPUx border-1px-celeste"></div>
            </div>
            <input
              className="placeholder-4j1ImY dmsans-normal-gunsmoke-16px"
              name="email"
              placeholder="Your email"
              type="email"
              required
              />
          </div>
          {/* <div className="default-text-iPe1yZ">
            <div className="button-TQGk14">
              <div className="style-BFaroP"></div>
            </div>
            <div className="font-TQGk14 sourcesanspro-bold-white-16px">Subscribe</div>
          </div> */}
          <input className="default-text-iPe1yZ sourcesanspro-bold-white-16px footer-submit" type="submit" value="Subscribe" />
        </form>
        <div className="frame-iPe1yZ">
          <img className="vector-gq7idq" src={vctr312} />
        </div>
        <p className="info-iPe1yZ dmsans-normal-white-14px">
          A new approach to diversity, equity &amp; inclusion. Meeting people &amp; organizations where they are through proprietary technology.
        </p>
        <div className="rectangle-iPe1yZ"></div>
        <p className="copyright-2018-al-iPe1yZ dmsans-normal-white-16px-2">
          ©2021 M2N, LLC&nbsp;&nbsp;•&nbsp;&nbsp;All rights reserved.
        </p>
        <p className="copyright-2018-al-CMvW9s dmsans-normal-white-14px-2">
          <span className="span0-eEh521 dmsans-normal-white-14px">Terms &amp; Conditions&nbsp;&nbsp; </span
          ><span className="span1-eEh521 dmsans-normal-white-14px-3">|&nbsp;&nbsp;</span
          ><span className="span2-eEh521 dmsans-normal-white-14px"> Privacy Policy</span>
        </p>
        <div className="frame-47-iPe1yZ">
          <div className="instagram-ER5pEj"><img className="combined-shape-a2OMEj" src={cmbndShp52x} /></div>
          <div className="twitter-ER5pEj"><img className="path-g8wxqH" src={pth2x} /></div>
          <div className="linkedin-1-ER5pEj"><img className="vector-H2IUZC" src={vctr3532x} /></div>
        </div>
        <div className="column2-iPe1yZ">
          <div className="about-S164Qk dmsans-bold-white-16px">
            <span className="span0-HtUoHN dmsans-bold-white-16px">About</span
            ><span className="span1-HtUoHN dmsans-normal-white-16px-2"><br /></span>
          </div>
          <Link to="/mpower">
              <div className="mpower-S164Qk dmsans-normal-white-16px">MPower</div>
          </Link>
          <Link to="/partners">
              <div className="partnerships-S164Qk dmsans-normal-white-16px">Partnerships</div>
          </Link>
          <Link to="/company">
              <div className="company-S164Qk dmsans-normal-white-16px">Company</div>
          </Link>
        </div>
        <div className="column3-iPe1yZ">
          <div className="platform-X4QSxG dmsans-bold-white-16px">Platform</div>
          <Link to="/mpower-app">
              <div className="ios-X4QSxG dmsans-normal-white-16px">iOS</div>
          </Link>
          <Link to="/mpower-app">
              <div className="android-X4QSxG dmsans-normal-white-16px">Android</div>
          </Link>
          <Link to="/mpower-app">
              <div className="browser-X4QSxG dmsans-normal-white-16px">Browser</div>
          </Link>
        </div>
      </div>
      {/* <NavMobile /> */}
      {/* <div className="navbar-mobile-VMr6Om">
        <div className="logo-8x5SRt"><img className="vector-Ztm0bx" src="./import/img/vector-1023@2x.png" /></div>
        <div className="menu24px-8x5SRt">
          <img className="iconnavigationmenu24px-BAyIoO" src="./import/img/icon-navigation-menu-24px@2x.png" />
        </div>
      </div> */}
      <div className="frame-60-C61RwL">
        <img className="oval-copy-isdgOW" src={ovlCpy171x} />
        <p className="contactusify-thinafewdays-isdgOW dmsans-normal-big-stone-16px">
          We are excited to speak with you about our new approach to diversity, equity &amp; inclusion. Please share a message here or contact us via email or phone for a prompt response from our team.
        </p>
        <a href="tel:866-588-8922">
          <div className="phone-isdgOW">
            <div className="contactusify-thinafewdays-Q5MDTp">866-588-8922</div>
            <div className="icon-2-Q5MDTp">
              <div className="ellipse-2-IvlqQS"></div>
              <div className="active-call-IvlqQS">
                <img className="path215-7T0mBT" src={pth21512x} />
                <img className="path216-7T0mBT" src={pth2162x} />
              </div>
            </div>
          </div>
        </a>
        <a href="mailto:info@m2n.us">
          <div className="email-isdgOW">
            <div className="contactusify-thinafewdays-20M4hb">info@m2n.us</div>
            <div className="icon-20M4hb">
              <div className="ellipse-Px0UVe"></div>
              <div className="mail-Px0UVe"><img className="path213-1bhoUT" src={pth2132x} /></div>
            </div>
          </div>
        </a>
        <div className="leaveamessage-isdgOW dmsans-bold-baltic-sea-40px">Contact Us</div>
        <div className="frame-61-isdgOW">
          <div className="group-1-H4hSpH">
            <img className="line7-x5Qw0n" src={ln7542x} />
            <img className="line8-x5Qw0n" src={ln8532x} />
            <img className="line9-x5Qw0n" src={ln9542x} />
            <img className="line10-x5Qw0n" src={ln10542x} />
            <img className="line11-x5Qw0n" src={ln11532x} />
            <img className="line12-x5Qw0n" src={ln12532x} />
            <img className="line13-x5Qw0n" src={ln13542x} />
            <img className="path71-x5Qw0n" src={pth71532x} />
            <img className="line15-x5Qw0n" src={ln15542x} />
          </div>
        </div>
        <form action="">
          <div className="form-isdgOW">
            <div className="field-lixMB9">
              <input
                className="your-name-2-tKadVF dmsans-medium-manatee-12px"
                name="name"
                placeholder="Your Name"
                type="text"
                required
              />
            </div>
            <textarea
              className="field-WrgBsB"
              name="message"
              placeholder="Leave your message here"
              type="text"
              required
            ></textarea>
            <div className="field-9afi68">
              <input
                className="your-name-2-pXbN93 dmsans-medium-manatee-12px"
                name="company"
                placeholder="Company Name"
                type="text"
                required
              />
            </div>
            <div className="field-YswxU4">
              <input
                className="your-name-2-iADx3W dmsans-medium-manatee-12px"
                name="email"
                placeholder="Email Address"
                type="email"
                required
              />
            </div>
            <div className="field-lbdXRk">
              <input
                className="your-name-2-850k4i dmsans-medium-manatee-12px"
                name="phone"
                placeholder="Phone Number"
                type="text"
                required
              />
            </div>
            <input type="submit" style={{cursor: "pointer"}} className="frame-2-lixMB9 font-Tvszxn dmsans-bold-white-16px" value="SEND MESSAGE"/>          </div>
        </form>
      </div>
    </div>
  </Layout>
)

export default SecondPage
