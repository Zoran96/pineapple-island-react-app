import { FaWifi, FaCogs } from "react-icons/fa"
import { MdPayments } from "react-icons/md";
import { BsTree } from "react-icons/bs";
import { AiOutlineLock } from "react-icons/ai";
import { RiLightbulbLine } from "react-icons/ri";

export const data = {
  heading: 'What Pineapple Land Offers',
  headingResponsive: 'Pineapple Island Offers',
  content: [
    {
      img: require('../../assets/images/benefit-content-img-1.jpg'),
      icons: [
        {
          ico: [<BsTree className="benefits__icons-icon" key={Math.random() * 10}/>],
          desc: 'Eco Friendly'
        },
        {
          ico: [<FaWifi className="benefits__icons-icon" key={Math.random() * 10}/>],
          desc: 'Smart Homes'
        },
        {
          ico: [<MdPayments className="benefits__icons-icon" key={Math.random() * 10}/>],
          desc: 'Good Rates'
        }
      ],
    },
    {
      img: require('../../assets/images/benefit-content-img-2.jpg'),
      icons: [
        {
          ico: [<FaCogs className="benefits__icons-icon" key={Math.random() * 10}/>],
          desc: 'Serviced Apartment'
        },
        {
          ico: [<AiOutlineLock className="benefits__icons-icon" key={Math.random() * 10}/>],
          desc: 'Private Security'
        },
        {
          ico: [<RiLightbulbLine className="benefits__icons-icon" key={Math.random() * 10}/>],
          desc: '24/7 Electricity'
        }
      ],
      inverted: true
    }
  ]
}