//imports
import React, { useEffect, useState, useRef } from 'react';
import GetBatteriesRequest, {GetBatterieRequest} from '../services/BatteryServices';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import { useDispatch, useSelector } from 'react-redux';
import { getBatteries } from '../features/batteriesSlice';
import { setBatteries, getBattery } from '../redux/actions';
//import ReactDOM from 'react-dom';
const TemplatePage = () => {
    const dispatch = useDispatch<any>()
    const data = useSelector((state: any) => state.batteries.batteries)
    const [packages, setPackages] = useState<any[]>();
    const [searchBattery, setSearchBattery] = useState<any>();
    useEffect(() => {
      dispatch(getBatteries())
      setPackages(data);
    }, [dispatch])

function selectItemIds(id: any) {
  data.forEach((element:any) => {
    if (element.id == id) {
      setSearchBattery(element);
      console.log(element)
    }
  });
}

const Confirm_ButtonEvent = async (id: any) => {
    //const post = await PostTransaction(parseInt(senderId), parseInt(receiverId), ttNumber);
    selectItemIds(id)
  };
    return (
        <>
          <Navbar />
            <div style={{ marginLeft: '2%', marginRight: '2%'  }}>
            <h1 className="h1">Battery list</h1>
            <div className="container">
              <div className="row">
                <div className="col">
                {data ? (
                  <div className="d-grid gap-2 col-6 mx-auto">
                  {data?.map((number: any) => (
                    <button onClick={() => Confirm_ButtonEvent(number.id)} key={number.id} className="btn  btn-dark" type="button">{number.batteryCode}</button>
                  ))}
                  </div>
                ) : (
                  <div>No data has been found.</div>
                )}
                </div>
                <div className="col">
                {searchBattery ? (
                  <div>
                    <div><h1 className="h1">{searchBattery.batteryCode}</h1></div>
                    <img src={'./'+ searchBattery.consoleImage} width="500px"></img>
                  </div>
                ) : (
                  <div>No data has been selected.</div>
                )}
                </div>
                  <div className="col">
                  {searchBattery ? (
                    <div className="blockquote">
                      <div>{searchBattery.batteryDescription}</div>
                    </div>
                  ) : (
                    <div>No data has been selected.</div>
                  )}
                  </div>
                </div>
              </div>
              <Footer />
        </div>
        </>
    );
};
export default TemplatePage;
