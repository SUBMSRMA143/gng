import Hm4 from '../../assets/home-banner4.jpg'
import Hm5 from '../../assets/home-banner5.jpg'
import './OurProjects.css'

const OurProjects = () => {
  return (
    <div className='op'>
        <h1>Our Projects</h1>
        <div className="op-card-cont">
            <div className="op-card">
                <img src={Hm4} alt='apartment-image'/>
                <div className='op-card-text'>
                    <h2>GnG Commercial - Alinza</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati hic a voluptatibus numquam at eos? Id ad obcaecati fugiat quo.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati hic a voluptatibus numquam at eos? Id ad obcaecati fugiat quo.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati hic a voluptatibus numquam at eos? Id ad obcaecati fugiat quo.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati hic a voluptatibus numquam at eos? Id ad obcaecati fugiat quo.</p>
                </div>
                <button>Book Now</button>
            </div>
            <div className="op-card">
                <img src={Hm5} alt='apartment-image'/>
                <div className='op-card-text'>
                    <h2>GnG Commercial - Alinza</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati hic a voluptatibus numquam at eos? Id ad obcaecati fugiat quo.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati hic a voluptatibus numquam at eos? Id ad obcaecati fugiat quo.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati hic a voluptatibus numquam at eos? Id ad obcaecati fugiat quo.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati hic a voluptatibus numquam at eos? Id ad obcaecati fugiat quo.</p>
                </div>
                <button>Coming Soon</button>
            </div>
        </div>
    </div>
  )
}

export default OurProjects