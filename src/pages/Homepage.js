///////// COMPONENTS //////////
import Price from '../components/Price';
import Brent from '../components/Brent';
import Girl from '../components/Girl';
import Cuts from '../components/Cuts';
import Dash from '../components/Dash';

function Homepage({user}) {
    return(
      <div>
<Dash />
<Cuts />
<Price />
<Brent />
<Girl />
      </div>
    )
};

export default Homepage;