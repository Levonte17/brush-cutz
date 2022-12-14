
import cut4 from '../assets/cut4.png'
import barber1 from '../assets/barber1.png'

function Girl(props) {
    return(
<div className='left'>
  <h1 >
    Master Barber:
    <br/>
    TIFFANI HENINGBURG
  </h1>
<div className="homeimg">
  <img src={barber1} alt='home' className="homeimg1"/>
  <img src={cut4} alt='home' className="homeimg1"/>
</div>
</div>
    )
};

export default Girl;