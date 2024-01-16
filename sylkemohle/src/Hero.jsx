
import './Hero.css'
import '../assets/sky.png'

function Hero() {
  

  return (
    <>
      <section className="hero" style={{backgroundImage: "url(../assets/sky.png"}}>
        
      <h1 className='tag-line'>YOUR VISION, OUR EXPERTISE</h1>
      <p className='tag'>So you can see more of what's important in life.</p>
      <div className='image-mod-cnt'>
        
        <img className="image-mod"src="../assets/model-glass-1.png" alt="" srcset="" />
      </div>
        
      </section>
      <section className="offer">
       
         <div className="offer-content">
         <h1 className='wwo-header'>OUR SERVICES</h1>
<div className="grid-1">
  <div className='service-card' id='card-1'>
    <h2 className='service-title'>Comprehensive Eye Exams</h2>
    <p className='service-price'>R499.00</p>
    <p className='service-description'>
      Assessing visual acuity (clarity of vision).
      Checking for refractive errors (nearsightedness, farsightedness, astigmatism).
      Determining eye health and overall well-being.
    </p>
  </div>

  <div className='service-card' id='card-2'>
    <h2 className='service-title'>Prescription Eyeglasses</h2>
    <p className='service-price'>R50.00</p>
    <p className='service-description'>
      Conducting eye exams to prescribe corrective lenses.
      Assisting in selecting eyeglass frames and fitting contact lenses.
    </p>
  </div>

  <div className='service-card' id='card-3'>
    <h2 className='service-title'>Vision Therapy</h2>
    <p className='service-price'>R50.00</p>
    <p className='service-description'>
      Providing exercises and activities to improve visual skills.
      Addressing issues such as eye coordination and focusing problems.
    </p>
  </div>
</div>

<div className="grid-2">
  <div className='service-card' id='card-4'>
    <h2 className='service-title'>Prescription Eyeglasses</h2>
    <p className='service-price'>R50.00</p>
    <p className='service-description'>
      Conducting eye exams to prescribe corrective lenses.
      Assisting in selecting eyeglass frames and fitting contact lenses.
    </p>
  </div>

  <div className='service-card' id='card-5'>
    <h2 className='service-title'>Vision Therapy</h2>
    <p className='service-price'>R50.00</p>
    <p className='service-description'>
      Providing exercises and activities to improve visual skills.
      Addressing issues such as eye coordination and focusing problems.
    </p>
  </div>

  <div className='service-card' id='card-6'>
    <h2 className='service-title'>Vision Therapy</h2>
    <p className='service-price'>R50.00</p>
    <p className='service-description'>
      Providing exercises and activities to improve visual skills.
      Addressing issues such as eye coordination and focusing problems.
    </p>
  </div>
</div>
</div>
 <section className='About-section'>
        <h1 className='wwo-header' id='wwo-about'>ABOUT US</h1>
        <div className='about-div'>
          <div className="about-image">
            <img src="../assets/pexels-phot.webp" alt="" srcset="" />
          </div>
          <div className="about-text">
          <h1 className='about-qa-head'>
          Why we love helping you see the things you love
          </h1>
          <h3 className='about-qa-rep'>
          "Our passion lies in enhancing your vision for a brighter, more enjoyable life. We take pride in helping you see the things you love, ensuring your journey is clear, comfortable, and uniquely yours."
          </h3>
          

          </div>
          

        </div>
      </section>
      </section>
     
    </>
  )
}

export default Hero
