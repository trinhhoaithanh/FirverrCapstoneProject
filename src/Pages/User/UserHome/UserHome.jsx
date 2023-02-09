import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import { history } from "../../../index.js";
import { getPopularApi } from "../../../redux/reducers/popularReducer";
import '../UserHome/UserHome.scss'
const UserHome = () => {
  const {arrPopular}=useSelector(state => state.popularReducer)
  
  const dispatch=useDispatch();
  
 
  useEffect(()=>{
    const actionAsync = getPopularApi()
    dispatch(actionAsync)
  },[])
  return (
    <div className="user-home">
      <div className="carousel container">
      <h1>
        Find the perfect freelance <br /> services for your business
      </h1>
      <nav className="navbar">
        <div className="container-fluid">
          <form className="d-flex" role="search">
            <input
              className="form-control me-0"
              type="search"
              placeholder="Try building mobile app"
              aria-label="Search"
            />
            <button className="search-bar btn btn-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>
      <div className="job-name">
        <span>Popular:</span>
        
        {arrPopular?.slice(0,4).map((item,index)=>{
          return (
          
              <button key={index} className="popular-btn mx-1" onClick={()=>{
                history.push('/taskList')
              }}>{item.tenLoaiCongViec}</button>
            
          )
    })}
        
       
      </div>
      </div>
      <div style={{marginTop:'450px'}} className="brand container bg-transparent">
        
        <div className="row">
          <div className="col-2">
          <span style={{color:'#b5b6ba'}}>Trusted by:</span>
          </div>
          <div className="col-2">
         <img src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/facebook.31d5f92.png" alt="facebook" />

          </div>
          <div className="col-2">
          <img src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/google.517da09.png" alt="Google" />

          </div>
          <div className="col-2">
         <img src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/netflix.e3ad953.png" alt="NETFLIX" />

          </div>
          <div className="col-2">
          <img src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/pandg.8b7310b.png" alt="P&G" />

          </div>
          <div className="col-2">
          <img src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/paypal.ec56157.png" alt="PayPal" />

          </div>
        </div>
      </div>
      
      <div className="service">
        <h3 className="text-dark">Popular professional services</h3>
        <div className="service-item row">
          <div className="col-2 ms-5 position-relative">

          <img className="w-100 rounded" alt="AI Artists" src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_1.0/v1/attachments/generic_asset/asset/f27bec553efc12cc60baed89b8f2223e-1674661140708/ai-artists-2x.png" />
          <div className="content-item position-absolute ">
          <small >Add talent to AI</small> <br /> 
            <h4>
            AI Artists  
            </h4>
          </div>
          </div>
          <div className="col-2 ms-5 position-relative">
          <img className="w-100" alt="Logo Design" src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741678/logo-design-2x.png"/>
          <div className="content-item position-absolute ">
          <small >Build your brand</small> <br /> 
            <h4>
            Logo Design
            </h4>
          </div>
          </div>
          <div className="col-2 ms-5 position-relative">
          <img className="w-100" alt="WordPress" src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_1.0/v1/attachments/generic_asset/asset/ae11e2d45410b0eded7fba0e46b09dbd-1598561917003/wordpress-2x.png" />
          <div className="content-item position-absolute ">
          <small >Customize your site</small> <br /> 
            <h4>
              WordPress
            </h4>
          </div>
          </div>
          <div className="col-2 ms-5 position-relative">
          <img className="w-100" alt="Voice Over" src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741669/voiceover-2x.png" />
          <div className="content-item position-absolute ">
          <small >Share your message</small> <br /> 
            <h4>
              Voice Over
            </h4>
          </div>
          </div>
          <div className="col-2 ms-5 position-relative">
          <img className="w-100" alt="Video Explainer" src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741663/animated-explainer-2x.png"/>
          <div className="content-item position-absolute ">
          <small >Engage your audience</small> <br /> 
            <h4>
              Video Explainer
            </h4>
          </div>
          </div>
        </div>
      </div>
     
     <div style={{paddingLeft:'300px',backgroundColor:' #f1fdf7'}} className="w-100 py-5 selling ">
        <div className="row">
        <div className="col-6">
          <h2 style={{fontSize:'32px',fontWeight:'700'}} className=" text-dark">A whole world of freelance <br /> talent at your fingertips</h2>
          <ul style={{listStyle:'none',paddingLeft:'0'}}>
            <li >
              <h6 style={{fontSize:'18px'}} className=" text-dark"><span ><svg className="me-2" width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M8 1.75C4.54822 1.75 1.75 4.54822 1.75 8C1.75 11.4518 4.54822 14.25 8 14.25C11.4518 14.25 14.25 11.4518 14.25 8C14.25 4.54822 11.4518 1.75 8 1.75ZM0.25 8C0.25 3.71979 3.71979 0.25 8 0.25C12.2802 0.25 15.75 3.71979 15.75 8C15.75 12.2802 12.2802 15.75 8 15.75C3.71979 15.75 0.25 12.2802 0.25 8Z"></path><path d="M11.5303 5.46967C11.8232 5.76256 11.8232 6.23744 11.5303 6.53033L7.53033 10.5303C7.23744 10.8232 6.76256 10.8232 6.46967 10.5303L4.46967 8.53033C4.17678 8.23744 4.17678 7.76256 4.46967 7.46967C4.76256 7.17678 5.23744 7.17678 5.53033 7.46967L7 8.93934L10.4697 5.46967C10.7626 5.17678 11.2374 5.17678 11.5303 5.46967Z"></path></svg></span>The best for every budget</h6>
              <p style={{color:'#756B6A',fontSize:'20px',lineHeight:'26px'}}>Find high-quality services at every price point. No <br /> hourly rates, just project-based pricing.</p>
            </li>
            <li>
              <h6 style={{fontSize:'18px'}} className=" text-dark"><span><svg className="me-2" width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M8 1.75C4.54822 1.75 1.75 4.54822 1.75 8C1.75 11.4518 4.54822 14.25 8 14.25C11.4518 14.25 14.25 11.4518 14.25 8C14.25 4.54822 11.4518 1.75 8 1.75ZM0.25 8C0.25 3.71979 3.71979 0.25 8 0.25C12.2802 0.25 15.75 3.71979 15.75 8C15.75 12.2802 12.2802 15.75 8 15.75C3.71979 15.75 0.25 12.2802 0.25 8Z"></path><path d="M11.5303 5.46967C11.8232 5.76256 11.8232 6.23744 11.5303 6.53033L7.53033 10.5303C7.23744 10.8232 6.76256 10.8232 6.46967 10.5303L4.46967 8.53033C4.17678 8.23744 4.17678 7.76256 4.46967 7.46967C4.76256 7.17678 5.23744 7.17678 5.53033 7.46967L7 8.93934L10.4697 5.46967C10.7626 5.17678 11.2374 5.17678 11.5303 5.46967Z"></path></svg></span>Quality work done quickly</h6>
              <p style={{color:'#756B6A',fontSize:'20px',lineHeight:'26px'}}>Find the right freelancer to begin working on your <br /> project within minutes.</p>
            </li>
            <li>
              <h6 style={{fontSize:'18px'}} className=" text-dark"><span><svg className="me-2" width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M8 1.75C4.54822 1.75 1.75 4.54822 1.75 8C1.75 11.4518 4.54822 14.25 8 14.25C11.4518 14.25 14.25 11.4518 14.25 8C14.25 4.54822 11.4518 1.75 8 1.75ZM0.25 8C0.25 3.71979 3.71979 0.25 8 0.25C12.2802 0.25 15.75 3.71979 15.75 8C15.75 12.2802 12.2802 15.75 8 15.75C3.71979 15.75 0.25 12.2802 0.25 8Z"></path><path d="M11.5303 5.46967C11.8232 5.76256 11.8232 6.23744 11.5303 6.53033L7.53033 10.5303C7.23744 10.8232 6.76256 10.8232 6.46967 10.5303L4.46967 8.53033C4.17678 8.23744 4.17678 7.76256 4.46967 7.46967C4.76256 7.17678 5.23744 7.17678 5.53033 7.46967L7 8.93934L10.4697 5.46967C10.7626 5.17678 11.2374 5.17678 11.5303 5.46967Z"></path></svg></span>Protected payments, every time</h6>
              <p style={{color:'#756B6A',fontSize:'20px',lineHeight:'26px'}}>Always know what you'll pay upfront. Your payment <br /> isn't released until you approve the work.</p>
            </li>
            <li>
              <h6 style={{fontSize:'18px'}} className=" text-dark"><span><svg className="me-2" width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M8 1.75C4.54822 1.75 1.75 4.54822 1.75 8C1.75 11.4518 4.54822 14.25 8 14.25C11.4518 14.25 14.25 11.4518 14.25 8C14.25 4.54822 11.4518 1.75 8 1.75ZM0.25 8C0.25 3.71979 3.71979 0.25 8 0.25C12.2802 0.25 15.75 3.71979 15.75 8C15.75 12.2802 12.2802 15.75 8 15.75C3.71979 15.75 0.25 12.2802 0.25 8Z"></path><path d="M11.5303 5.46967C11.8232 5.76256 11.8232 6.23744 11.5303 6.53033L7.53033 10.5303C7.23744 10.8232 6.76256 10.8232 6.46967 10.5303L4.46967 8.53033C4.17678 8.23744 4.17678 7.76256 4.46967 7.46967C4.76256 7.17678 5.23744 7.17678 5.53033 7.46967L7 8.93934L10.4697 5.46967C10.7626 5.17678 11.2374 5.17678 11.5303 5.46967Z"></path></svg></span>24/7 support</h6>
              <p style={{color:'#756B6A',fontSize:'20px',lineHeight:'26px'}}>Questions? Our round-the-clock support team is <br /> available to help anytime, anywhere.</p>
            </li>
          </ul>
        </div>
        <div className="col-6">
        <picture><source media="(min-width: 1160px)" srcSet="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_700,dpr_1.0/v1/attachments/generic_asset/asset/089e3bb9352f90802ad07ad9f6a4a450-1599517407052/selling-proposition-still-1400-x1.png 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_700,dpr_2.0/v1/attachments/generic_asset/asset/089e3bb9352f90802ad07ad9f6a4a450-1599517407052/selling-proposition-still-1400-x1.png 2x" /><source media="(min-width: 900px)" srcSet="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_600,dpr_1.0/v1/attachments/generic_asset/asset/089e3bb9352f90802ad07ad9f6a4a450-1599517407052/selling-proposition-still-1400-x1.png 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_600,dpr_2.0/v1/attachments/generic_asset/asset/089e3bb9352f90802ad07ad9f6a4a450-1599517407052/selling-proposition-still-1400-x1.png 2x" /><source media="(min-width: 600px)" srcSet="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_900,dpr_1.0/v1/attachments/generic_asset/asset/089e3bb9352f90802ad07ad9f6a4a450-1599517407052/selling-proposition-still-1400-x1.png 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_900,dpr_2.0/v1/attachments/generic_asset/asset/089e3bb9352f90802ad07ad9f6a4a450-1599517407052/selling-proposition-still-1400-x1.png 2x" /><source media="(min-width: 361px)" srcSet="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_600,dpr_1.0/v1/attachments/generic_asset/asset/089e3bb9352f90802ad07ad9f6a4a450-1599517407052/selling-proposition-still-1400-x1.png 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_600,dpr_2.0/v1/attachments/generic_asset/asset/089e3bb9352f90802ad07ad9f6a4a450-1599517407052/selling-proposition-still-1400-x1.png 2x" /><source media="(max-width: 360px)" srcSet="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_360,dpr_1.0/v1/attachments/generic_asset/asset/089e3bb9352f90802ad07ad9f6a4a450-1599517407052/selling-proposition-still-1400-x1.png 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_360,dpr_2.0/v1/attachments/generic_asset/asset/089e3bb9352f90802ad07ad9f6a4a450-1599517407052/selling-proposition-still-1400-x1.png 2x" /><img alt="Video teaser image" src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_700,dpr_1.0/v1/attachments/generic_asset/asset/089e3bb9352f90802ad07ad9f6a4a450-1599517407052/selling-proposition-still-1400-x1.png" loading="auto" /></picture>
        </div>
        </div>
        
      </div>
     
      
      <div className="category ">
        <div className="container ">
        <h2>Explore the marketplace</h2>
        <div className="category-list row p-5">
            <div className="col-2 category-item">
              <a href="#">
              <img className="w-25" src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/graphics-design.d32a2f8.svg" alt="Graphics & Design" loading="lazy" />
              <p>Graphics & Design</p>

              </a>
            </div>
            <div className="col-2 category-item">
            <a href="#">
            <img className="w-25" src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/online-marketing.74e221b.svg" alt="Digital Marketing" loading="lazy" />

              <p>Digital Marketing</p>

              </a>
            </div>
            <div className="col-2 category-item">
            <a href="#">
           <img className="w-25" src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/writing-translation.32ebe2e.svg" alt="Writing & Translation" loading="lazy" />


              <p>Writing & Translation</p>

              </a>
            </div>
            <div className="col-2 category-item">
            <a href="#">
            <img className="w-25" src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/video-animation.f0d9d71.svg" alt="Video &amp; Animation" loading="lazy"></img>
              <p>Video & Animation</p>

              </a>
            </div>
            <div className="col-2 category-item">
            <a href="#">
            <img className="w-25" src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/music-audio.320af20.svg" alt="Music & Audio" />

              <p className="text-dark">Music & Audio</p>

              </a>
            </div>
            
        </div>
        <div className="category-list row p-5">
        <div className="col-2 category-item">
              <a href="#">
              <img className="w-25" src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/programming.9362366.svg" alt="Programming & Tech" loading="lazy" />

              <p>Progamming & Tech</p>

              </a>
            </div>
            <div className="col-2 category-item">
            <a href="#">
           <img className="w-25" src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/business.bbdf319.svg" alt="Business" loading="lazy" />


              <p>Business</p>

              </a>
            </div>
            <div className="col-2 category-item">
            <a href="#">
           <img className="w-25" src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/lifestyle.745b575.svg" alt="Lifestyle" loading="lazy" />



              <p>Lifestyle</p>

              </a>
            </div>
            <div className="col-2 category-item">
            <a href="#">
           <img className="w-25" src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/data.718910f.svg" alt="Data" loading="lazy" />

              <p>Data</p>

              </a>
            </div>
            <div className="col-2 category-item">
            <a href="#">
            <img className="w-25" src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/photography.01cf943.svg" alt="Photography" loading="lazy" />


              <p className="text-dark">Photography</p>

              </a>
            </div>
        </div>
        </div>
       
      </div>
      
      <div className="cite mx-5">
        <div className="container">
          <div className="row">
            <div className="col-4">
              <picture className="w-100"><source media="(min-width: 1160px)" srcSet="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_560,dpr_1.0/v1/attachments/generic_asset/asset/42a6fd208670a0361b38bd72b47b9317-1599519173399/testimonial-video-still-rooted.jpg 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_560,dpr_2.0/v1/attachments/generic_asset/asset/42a6fd208670a0361b38bd72b47b9317-1599519173399/testimonial-video-still-rooted.jpg 2x" /><source media="(min-width: 900px)" srcSet="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_450,dpr_1.0/v1/attachments/generic_asset/asset/42a6fd208670a0361b38bd72b47b9317-1599519173399/testimonial-video-still-rooted.jpg 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_450,dpr_2.0/v1/attachments/generic_asset/asset/42a6fd208670a0361b38bd72b47b9317-1599519173399/testimonial-video-still-rooted.jpg 2x" /><source media="(min-width: 600px)" srcSet="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_820,dpr_1.0/v1/attachments/generic_asset/asset/42a6fd208670a0361b38bd72b47b9317-1599519173399/testimonial-video-still-rooted.jpg 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_820,dpr_2.0/v1/attachments/generic_asset/asset/42a6fd208670a0361b38bd72b47b9317-1599519173399/testimonial-video-still-rooted.jpg 2x" /><source media="(min-width: 361px)" srcSet="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_480,dpr_1.0/v1/attachments/generic_asset/asset/42a6fd208670a0361b38bd72b47b9317-1599519173399/testimonial-video-still-rooted.jpg 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_480,dpr_2.0/v1/attachments/generic_asset/asset/42a6fd208670a0361b38bd72b47b9317-1599519173399/testimonial-video-still-rooted.jpg 2x" /><source media="(max-width: 360px)" srcSet="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_360,dpr_1.0/v1/attachments/generic_asset/asset/42a6fd208670a0361b38bd72b47b9317-1599519173399/testimonial-video-still-rooted.jpg 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_360,dpr_2.0/v1/attachments/generic_asset/asset/42a6fd208670a0361b38bd72b47b9317-1599519173399/testimonial-video-still-rooted.jpg 2x" /><img alt="Video teaser image" src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_560,dpr_1.0/v1/attachments/generic_asset/asset/42a6fd208670a0361b38bd72b47b9317-1599519173399/testimonial-video-still-rooted.jpg" loading="lazy" /></picture>

            </div>
            <div className="col-6">
              <p>Kay Kim, Co-Founder | <span style={{fontWeight:'900'}}> rooted </span></p>
              <p className="text-cite">"It's extremely exciting that Fiverr has freelancers from all over the world — it broadens the talent pool. One of the best things about Fiverr is that while we're sleeping, someone's working."</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserHome;
