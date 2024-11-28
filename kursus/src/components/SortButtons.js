
import {
  sortAZ,
  sortPriceDecrease,
  sortPriceIncrease,
  sortRatingDecrease,
  sortRatingIncrease,
  sortZA
} from "../utils/filterSortUtils";

import Button from '@mui/material/Button'; // terve mooduli


function SortButtons(props) {

  return (
    <div>
        <Button onClick={() => props.setProducts(sortAZ(props.products))}>Sort AZ</Button>
        <Button onClick={() => props.setProducts(sortZA(props.products))}>Sort ZA</Button>
        <Button onClick={() => props.setProducts(sortPriceIncrease(props.products))}>sort Increase</Button>
        <Button onClick={() => props.setProducts(sortPriceDecrease(props.products))}>sort Decrease</Button>
        <Button onClick={() => props.setProducts(sortRatingIncrease(props.products))}>sort rating Increase</Button>
        <Button onClick={() => props.setProducts(sortRatingDecrease(props.products))}>sort rating Decrease</Button>
    </div>
  )
}

export default SortButtons